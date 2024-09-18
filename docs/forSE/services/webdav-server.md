---
sidebar_position: 90
---

# webdav-server の構築

ftp-server のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

ftp-server で利用する環境変数は以下のとおりです。

| 環境変数名                    | デフォルト値                       | 内容                                                                                                                               |
| ----------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| DATABASE_URL                  | mongodb://localhost:27017/files_db | MongoDB の接続先 URL です。                                                                                                        |
| MONGO_INITDB_ROOT_USERNAME    | 空文字列                           | MongoDB のルートユーザー名です。                                                                                                   |
| MONGO_INITDB_ROOT_PASSWORD    | 空文字列                           | MongoDB のルートパスワードです。                                                                                                   |
| WEBDAV_PUBLIC_VOLUME_USERNAME | public                             | public ディレクトリにアクセスするユーザ名です。                                                                                    |
| WEBDAV_CREATE_FILE_TIMEOUT    | 3600                               | 新規ファイルのアップロードが中断されたときに残る一時データを一定時間経過後に削除するための、削除までの時間を指定します（単位：秒） |
| WEBDAV_SERVER_PORT:           | 2000                               | WebDAV サーバのポート番号です。                                                                                                    |
| UPLOAD_SIZE_LIMIT             | 10,737,418,240                     | 単一ファイルのアップロードサイズ制限です。                                                                                         |
| UPLOAD_TOTAL_SIZE_LIMIT       | 53,687,091,200                     | 全ファイルの合計アップロードサイズ制限です。                                                                                       |
| SCAN_SIZE_LIMIT               | 4,294,967,296                      | ファイルスキャンのサイズ制限です。                                                                                                 |
| FILESERVER_AV                 | false                              | アップロードされたファイルウイルススキャンの有効/無効を切り替えます。                                                              |
