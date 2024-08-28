---
sidebar_position: 50
---

# ftp-server の構築

ftp-server のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

ftp-server で利用する環境変数は以下のとおりです。

| 環境変数名                 | デフォルト値                       | 内容                                                                  |
| -------------------------- | ---------------------------------- | --------------------------------------------------------------------- |
| DATABASE_URL               | mongodb://localhost:27017/files_db | MongoDB の接続先 URL です。                                           |
| MONGO_INITDB_ROOT_USERNAME | 空文字列                           | MongoDB のルートユーザー名です。                                      |
| MONGO_INITDB_ROOT_PASSWORD | 空文字列                           | MongoDB のルートパスワードです。                                      |
| PASV_IP                    | 127.0.0.1                          | passive モードで接続する際の IP アドレスです。                        |
| PASV_PORT_MIN              | 30000                              | passive モードで接続する際のポートの最小値です。                      |
| PASV_PORT_MAX              | 30009                              | passive モードで接続する際のポートの最大値です。                      |
| UPLOAD_SIZE_LIMIT          | 10,737,418,240                     | 単一ファイルのアップロードサイズ制限です。                            |
| UPLOAD_TOTAL_SIZE_LIMIT    | 53,687,091,200                     | 全ファイルの合計アップロードサイズ制限です。                          |
| SCAN_SIZE_LIMIT            | 4,294,967,296                      | ファイルスキャンのサイズ制限です。                                    |
| FILESERVER_AV              | false                              | アップロードされたファイルウイルススキャンの有効/無効を切り替えます。 |

## passive モードの有効化

passive モードでのファイル転送を受け付ける場合、以下の操作を行って下さい。

- HIVE_VIP で ftp-server サービスに仮想 IP を割り当てる
- `PASV_IP`環境変数で割り当てた仮想 IP と同じ IP を入れる
- ports で `PASV_PORT_MIN` ~ `PASV_PORT_MAX` の値を通すようにする
