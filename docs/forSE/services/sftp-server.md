---
sidebar_position: 60
---

# sftp-server の構築

sftp-server のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

sftp-server で利用する環境変数は以下のとおりです。

| 環境変数名                    | デフォルト値                       | 内容                                                                  |
| ----------------------------- | ---------------------------------- | --------------------------------------------------------------------- |
| DATABASE_URL                  | mongodb://localhost:27017/files_db | MongoDB の接続先 URL です。                                           |
| MONGO_INITDB_ROOT_USERNAME    | 空文字列                           | MongoDB のルートユーザー名です。                                      |
| MONGO_INITDB_ROOT_PASSWORD    | 空文字列                           | MongoDB のルートパスワードです。                                      |
| SERVER_PRIVATE_KEY            | null                               | サーバー認証用の秘密鍵のパスです。                                    |
| SERVER_PRIVATE_KEY_PASSPHRASE | null                               | サーバー認証用の秘密鍵のパスフレーズです。                            |
| SFTP_SERVER_PORT              | 22                                 | サーバのポート番号です。                                              |
| UPLOAD_SIZE_LIMIT             | 10,737,418,240                     | 単一ファイルのアップロードサイズ制限です。                            |
| UPLOAD_TOTAL_SIZE_LIMIT       | 53,687,091,200                     | 全ファイルの合計アップロードサイズ制限です。                          |
| SCAN_SIZE_LIMIT               | 4,294,967,296                      | ファイルスキャンのサイズ制限です。                                    |
| FILESERVER_AV                 | false                              | アップロードされたファイルウイルススキャンの有効/無効を切り替えます。 |

