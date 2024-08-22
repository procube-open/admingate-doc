---
slug: /forSE
sidebar_position: 10
---
# 構築手順

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
