---
sidebar_position: 10
---

# admingate-client の構築

admingate-client のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

admingate-client で利用する環境変数は以下のとおりです。

| 環境変数名                 | デフォルト値                       | 内容                                                                              |
| -------------------------- | ---------------------------------- | --------------------------------------------------------------------------------- |
| GUAC_API_URL               | https://localhost:443              | Guacamole API のプロキシ先 URL です。                                             |
| DATABASE_URL               | mongodb://localhost:27017/files_db | MongoDB の接続先 URL です。                                                       |
| IDM_URL                    | http://localhost:8080              | ワークフロー申請ボタンを押した時の遷移先 URL です。                               |
| WS_URL                     | ws://localhost:4200                | SFTP で接続するための WebSocket の接続先 URL です。                               |
| GUAC_URL                   | https://localhost:443              | 接続ページや履歴ページを表示する際の Guacamole の URL です。                      |
| LOGOUT_URL                 | http://localhost:8080              | ログアウトボタンを押した時の遷移先 URL です。                                     |
| DOCUMENT_URL               | http://localhost:8080              | ヘルプボタンを押した時の遷移先 URL です。                                         |
| SESSION_MANAGER_URL        | http://localhost:8080              | セッションマネージャサービスの問い合わせ先 URL です。                             |
| IDM_DISABLE_USER_API_URL   | http://localhost:8080              | ユーザを無効化する際の IDManager のインタフェースの URL です。                    |
| BODY_LIMIT                 | 1,099,511,627,776                  | fastify で受け付ける HTTP リクエストの最大 body サイズです。                      |
| MAX_PARAM_LENGTH           | 1,073,741,824                      | fastify で受け付ける HTTP リクエストのリクエストパラメータの最大長です。          |
| IS_LOGGER                  | true                               | ログ出力の有効/無効を切り替えます。                                               |
| MONGO_INITDB_ROOT_USERNAME | 空文字列                           | MongoDB のルートユーザー名です。                                                  |
| MONGO_INITDB_ROOT_PASSWORD | 空文字列                           | MongoDB のルートパスワードです。                                                  |
| PORT                       | 4200                               | サーバーがリッスンするポート番号です。                                            |
| HOST                       | 0.0.0.0                            | サーバーがバインドするホスト名です。                                              |
| UPLOAD_SIZE_LIMIT          | 1,099,511,627,776                  | 単一ファイルのアップロードサイズ制限です。                                        |
| UPLOAD_TOTAL_SIZE_LIMIT    | 21,474,836,480                     | 全ファイルの合計アップロードサイズ制限です。                                      |
| UPLOAD_SPEED               | 33,554,432                         | 推定アップロード速度(バイト/秒)です。推定アップロード時間の計算に用いられます。   |
| SCAN_SIZE_LIMIT            | 4,294,967,296                      | ファイルスキャンのサイズ制限です。                                                |
| SCAN_SPEED                 | 429,916                            | 推定ファイルスキャン速度（バイト/秒）です。推定スキャン時間の計算に用いられます。 |
| FILESERVER_AV              | false                              | アップロードされたファイルウイルススキャンの有効/無効を切り替えます。             |

## roles の設定

roles(または initialize-roles)で`/usr/src/app/frontend`配下に存在するファイルを編集することで favicon や WebUI 左上のバーの画像を入れ替えることができます。
initialize-roles で行った編集はファイルをボリューム化することで永続化することができます。

### file-server のタスクサンプル

file-server ロールの files フォルダに test-favicon.ico を置いて、以下のタスクを実行することによって favicon を置き換えることができます。

```yml
- name: replace favicon.ico
  copy:
    src: test-favicon.ico
    dest: /usr/src/app/frontend/favicon.ico
  become: true
```

## ウイルススキャン

`FILESERVER_AV`環境変数を`true`にすることによってアップロードされたファイルのステータスが`WAITFOR_AVSCAN`でアップロードされるようになります。
ファイルのウイルススキャンを行いたい場合は MongoDB の changeStream 機能を利用するなどして別途実装する必要があります。

## WebGate の設定

WebGate のプロキシ設定で、`/` を admingate-client サービスの 4200 番に繋ぎ、`/guacamole`を admingate-api の 8080 番に渡すことで WebUI にアクセスできるようになります。
