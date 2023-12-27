---
sidebar_position: 10
---
# API
## http-proxy

`/guac-api/`で始まるAPIは全てfastifyからguacamoleにhttp-proxyで渡されている。
また、`/guac-api/api/token`以外のAPIは全てリクエストヘッダーの`GUACAMOLE-TOKEN`にトークンをつけて送信する必要がある。

## API一覧

AdminGateで使用されているAPIのみを表にする。

| パス                                                                      | Method | レスポンス内容                                                                                    |
|---------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------------------|
| `/guac-api/api/token`                                                     | GET    | トークンの取得ができる。                                                                          |
| `/guac-api/api/session/data/postgresql/works`                             | GET    | 作業の一覧を取得できる。                                                                          |
| `/guac-api/api/session/data/postgresql/works/:workId`                     | GET    | `identifier`が`{workId}`の作業を単体取得できる。                                         |
| `/guac-api/api/session/data/postgresql/notifications`                     | GET    | お知らせの一覧を取得できる。                                                                      |
| `/guac-api/api/session/data/postgresql/connections/:id/parameters`        | GET    | `identifier`が`{id}`の接続先のパラメータを取得できる。                                         |
| `/guac-api/api/session/data/postgresql/activeConnections`                 | GET    | アクティブな接続の一覧を取得できる。                                                              |
| `/guac-api/api/session/data/postgresql/history/connections`               | GET    | 接続履歴一覧が取得できる。                                                                        |
| `/guac-api/api/session/data/postgresql/history/connections/:id/logs/:key` | GET    | `identifier`が`{id}`の履歴で、`logs`のkeyが`{key}`のものをダウンロードできる。                    |
| `/guac-api/api/session/data/postgresql/activeConnections`                 | PATCH  | bodyに指定された内容をアクティブな接続に対して実行できる。AdminGateでは`remove`のみ使用している。 |