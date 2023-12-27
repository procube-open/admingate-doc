---
sidebar_position: 10
---
# API
**Fastify**を用いてAPIサーバーを実装し、[WebUI](/docs/category/webui-1)と合わせて使用することができる。
`metadata.accessHistory`の`Protocol`は`http`で記録される。

## アップロードキャンセル

ファイルアップロードをキャンセルすることができる。
アップロード時にリクエストヘッダーにuuidをつけておき、キャンセル時は同一のuuidを`/api/files/:dir/cancel`のbodyに入れることでキャンセルできる。