---
sidebar_position: 20
---

# admingate-api の構築

admingate-api のサービスを構築する際の設定パラメータについて説明します。

## 環境変数一覧

| 変数名 | 内容 |
| --- | --- |
| GUACD_HOSTNAME | guacd のホスト名です。hive-builder での内部通信の場合はサービス名がホスト名になります。 |
| POSTGRES_HOSTNAME | postgres のホスト名です。hive-builder での内部通信の場合はサービス名がホスト名になります。 |
| POSTGRES_DATABASE | postgres のDB名です。下記記載の postgres のサービスと合わせてください。 |
| POSTGRES_USER | postgres のユーザー名です。下記記載の postgres のサービスと合わせてください。 |
| POSTGRES_PASSWORD | postgres の上記ユーザーのパスワードです。下記記載の postgres のサービスと合わせてください。 |
| GUACAMOLE_HOME | ホームディレクトリのパスです。 |
| RECORDING_SEARCH_PATH | 履歴ファイルを保存するパスです。下記記載の guacamole-recordings のパスと合わせてください。 |
| HEADER_ENABLED | 
