---
sidebar_position: 20
---

# admingate-api の構築

admingate-api のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

admingate-api で利用する環境変数は以下のとおりです。

| 変数名 | 内容 |
| --- | --- |
| GUACD_HOSTNAME | guacd のホスト名です。hive-builder での内部通信の場合はサービス名がホスト名になります。 |
| POSTGRES_HOSTNAME | postgres のホスト名です。hive-builder での内部通信の場合はサービス名がホスト名になります。 |
| POSTGRES_DATABASE | postgres のDB名です。別途記載の postgres のサービスと合わせてください。 |
| POSTGRES_USER | postgres のユーザー名です。別途記載の postgres のサービスと合わせてください。 |
| POSTGRES_PASSWORD | postgres の上記ユーザーのパスワードです。別途記載の postgres のサービスと合わせてください。 |
| GUACAMOLE_HOME | ホームディレクトリのパスです。 |
| RECORDING_SEARCH_PATH | 履歴ファイルを保存するパスです。下記記載の guacamole-recordings のパスと合わせてください。 |
| HEADER_ENABLED | SAML ヘッダー認証機能をオンにする場合は true としてください。 |

## ボリュームの設定

admingate-api には以下のボリュームを設定します。

| パス | 説明 |
| --- | --- |
| /var/lib/guacamole/recordings | 接続履歴を保存するディレクトリをボリューム化します。 |

## roles の設定

admingate-api で利用する roles について説明します。

設定する roles は以下のとおりです。

| role 名 | 実施タイミング | 内容 |
| --- | --- | --- |
| guacamole | build-images | guacamole の設定ファイルをコピーします。 |

### guacamole のタスクサンプル

guacamole のタスクサンプルとしては以下の通りです。

```yml
- name: create extensions directory if does not exist
  file:
    path: extensions
    state: directory
  become: true

- name: copy guacamole properties file
  copy:
    src: guacamole.properties
    dest: ./
  become: true
```

また、コピー元の設定ファイルとして guacamole.properties を用意する必要があります。

```
http-auth-header: HTTP_REMOTEUSER
```

:::note
http-auth-header プロパティは SAML 認証を利用する際に必要です。
guacamole.properties について、詳細は Guacamole の公式ドキュメントをご覧ください。

[Guacamole 公式ドキュメント](https://guacamole.apache.org/doc/gug/configuring-guacamole.html)
:::

## その他

その他設定項目について説明します。

### labels の設定

labels に設定する項目については以下の通りです。

| プロパティ | 備考 |
| --- | --- |
| published_name | admingate-api はAPIの他にサーバーアクセス時の画面を提供しているため、このプロパティを設定する必要があります。 |
| HIVE_MARK | 別途記載の guacd のサービスと同じ hive サーバーに存在する必要があるため、このプロパティを設定する必要があります。 |