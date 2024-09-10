---
slug: /forSE
sidebar_position: 10
---
# 構築手順

構築手順について説明します。

## サービス一覧

AdminGate は以下9つのサービスから構成されています。

| サービス名 | 概要 |
| --- | --- |
| admingate-client | Admin Gate の画面とファイルサーバーを管理します。 |
| admingate-api | guacamole をベースとしたAPIサーバーで、作業や接続先の取得・登録を行います。 |
| guacd | サーバーへの接続を管理します。 |
| postgres | 登録情報を管理するデータベースです。 |
| ftp-server | ファイルの転送を管理するFTPサーバーです。 |
| sftp-server | ファイルの転送を管理するSFTPサーバーです。 |
| mongo | ファイルサーバー関連の登録情報を管理するデータベースです。 |
| session-manager | ブラウザアクセス時に立ち上げる chrome コンテナを管理します。 |
| webdav-server | chrome コンテナにおけるファイルシステムとして Admin Gate のファイルサーバーをマウントします。 |

:::note
session-manager と webdav-server はブラウザアクセスを利用しない場合は不要です。
:::

## inventory ファイルサンプル

上記サービスを立ち上げるための inventory ファイルを作成します。

以下はサンプルになります。

```yml
---
plugin: hive_services
services:
  admingate-client:
    image: procube/file-server
    initialize_roles:
      - file-server
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
      DATABASE_URL: "mongodb://mongo:27017/files_db?authSource=admin"
      GUAC_URL: https://admingate-client.admin-gate.procube-demo.jp/guacamole
      GUAC_API_URL: http://admingate-api:8080/guacamole
      SESSION_MANAGER_URL: http://session-manager:80
      IDM_URL: https://idm.admin-gate.procube-demo.jp
      WS_URL: wss://admingate-client.admin-gate.procube-demo.jp
      LOGOUT_URL: https://admingate-client.admin-gate.procube-demo.jp/Shibboleth.sso/Logout
      IDM_DISABLE_USER_API_URL: http://idm:8090/IDManager/disabledUserIF?_autoCommit=true
    ports:
      - 4200:4200
    labels:
      published_name: admingate-client
      HIVE_MARK: admingate-client
      webgate:
        authentication: saml
        proxies:
          - target_port: 4200
            maxBodySize: 500
            pathPattern: /
            useWebSocket: true
          - target_port: 8080
            pathPattern: /guacamole
            setService: admingate-api
            useWebSocket: true
  admingate-api:
    image:
      from: procube/guacamole
      roles:
        - guacamole
    environment:
      GUACD_HOSTNAME: guacd
      POSTGRES_DATABASE: guacamole_db
      POSTGRES_HOSTNAME: postgres
      POSTGRES_PASSWORD: example
      POSTGRES_USER: guacamole_user
      GUACAMOLE_HOME: /opt/guacamole/
      RECORDING_SEARCH_PATH: /var/lib/guacamole/recordings
      HEADER_ENABLED: "true"
    volumes:
      - source: guacamole-recordings
        target: /var/lib/guacamole/recordings
        type: volume
    user: root
    labels:
      published_name: admingate-api
      HIVE_MARK: admingate-api
    endpoint_mode: dnsrr
  guacd:
    image: procube/guacd
    volumes:
      - source: guacamole-recordings
        target: /var/lib/guacamole/recordings
        type: volume
        drbd:
          fstype: xfs
          size: 20G
    endpoint_mode: dnsrr
    placement:
      constraints:
        - node.labels.admingate-api == true
  postgres:
    image:
      from: postgres:15.2-alpine
      roles:
        - python-aptk
        - guacamole-initdb
    environment:
      PGDATA: /var/lib/postgresql/data/guacamole
      POSTGRES_DB: guacamole_db
      POSTGRES_PASSWORD: example
      POSTGRES_USER: guacamole_user
    volumes:
      - source: guacamole-db
        target: /var/lib/postgresql/data
        type: volume
        drbd:
          fstype: xfs
          size: 5G
    endpoint_mode: dnsrr
  ftp-server:
    image: procube/ftp-server
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
      DATABASE_URL: mongodb://mongo:27017/files_db?authSource=admin
      PASV_IP: xxx.xxx.xxx.xxx
      PASV_PORT_MIN: "30000"
      PASV_PORT_MAX: "30003"
    ports:
      - "21:21"
      - "30000:30000"
      - "30001:30001"
      - "30002:30002"
      - "30003:30003"
    labels:
      HIVE_VIP: xxx.xxx.xxx.xxx
    placement:
      constraints:
        - node.hostname == hive0
  sftp-server:
    image: procube/sftp-server
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
      SFTP_SERVER_PORT: "8822"
      DATABASE_URL: mongodb://mongo:27017/files_db?authSource=admin
      SERVER_PRIVATE_KEY: |
        -----BEGIN OPENSSH PRIVATE KEY-----
        example private key
        -----END OPENSSH PRIVATE KEY-----
    ports:
      - "8822:8822"
  mongo:
    image:
      from: mongo
      roles:
        - python-aptk
        - mongo-initdb
    environment:
      MONGO_INITDB_DATABASE: files_db
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - 27017:27017
    volumes:
      - source: mongo-db
        target: /data/db
        type: volume
        drbd:
          fstype: xfs
          size: 20G
      - source: mongo-configdb
        target: /data/configdb
        type: volume
        drbd:
          fstype: xfs
          size: 2G
    backup_scripts:
      - name: mongo-backup
        container: mongo
        backup_command: "mongodump --uri=mongodb://root:example@localhost:27017/files_db?authSource=admin --gzip --archive=/archive"
        backup_file: "/archive"
        restore_command: "mongorestore --uri=mongodb://root:example@localhost:27017/files_db?authSource=admin --db=files_db --gzip --archive=/archive --drop"
        restore_file: "/archive"
        cleanup_days_before: 3
  webdav-server:
    image: procube/webdav-server
    ports:
      - 2000:2000
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
      DATABASE_URL: mongodb://mongo:27017/files_db?authSource=admin
      # WEBDAV_SERVER_PORT: 2000
      # WEBDAV_PUBLIC_VOLUME_USERNAME: public
    placement:
      constraints:
        - node.hostname == hive1
    labels:
      HIVE_VIP: yyy.yyy.yyy.yyy
  session-manager:
    image:
      from: procube/session-manager
      roles:
        - hive-trust-ca
        - hive-certificate
    environment:
      - HIVE_SERVERS: "hive0.admin-gate,hive1.admin-gate,hive2.admin-gate"
      - IMAGE_CHROME: "{{ groups['repository'] | intersect(groups[hive_stage]) | first }}:5000/image_chrome:latest"
      - WEBDAV_SERVER: "yyy.yyy.yyy.yyy"
      - WEBDAV_PORT: "2000"
      - WEBDAV_USERNAME: "user"
      - WEBDAV_PASSWORD: "test"
      - GUACAMOLE_URL: "http://guacamole:8080/guacamole"
      - GUACAMOLE_USERNAME: "guacadmin"
      - GUACAMOLE_PASSWORD: "guacadmin"
      - VNC_PORT: "5900"
      - VNC_PASSWORD: "secret"
```
