---
sidebar_position: 80
---

# session-manager の構築

session-manager のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

session-manager で利用する環境変数は以下のとおりです。

| 変数名 | 内容 |
| --- | --- |
| HIVE_SERVERS | hive サーバーです。カンマ区切りで全サーバーを記載してください。 |
| IMAGE_CHROME | Chrome コンテナを立ち上げる際のイメージです。 |
| WEBDAV_SERVER | webdav サーバーのIPです。 |
| WEBDAV_PORT | webdav サーバーのポート番号です。 |
| WEBDAV_USERNAME | webdav サーバーのユーザー名です。 |
| WEBDAV_PASSWORD | webdav サーバーのパスワードです。 |
| GUACAMOLE_URL | Guacamole の API の URL です。 |
| GUACAMOLE_USERNAME | Guacamole のユーザー名です。 |
| GUACAMOLE_PASSWORD | Guacamole のパスワードです。
| VNC_PORT | VNC のポートです。 |
| VNC_PASSWORD | VNC のパスワードです。 |

## roles の設定

admingate-api で利用する roles について説明します。

設定する roles は以下のとおりです。

| role 名 | 実施タイミング | 内容 |
| --- | --- | --- |
| hive-trust-ca | build-images | CA局証明書のコンテナのトラストストアにインストールします。 |
| hive-certificate | build-images | アプリケーションのサーバに利用できるクライアント(サーバー)証明書を生成することが可能です。 |
