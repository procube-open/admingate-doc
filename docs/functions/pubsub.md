---
sidebar_position: 30
---

# Pub/Sub

teigi では Pub/Sub メッセージングを利用できます。

* 長時間かかるフローの進捗状況をユーザに通知できます
* Gadget から他のユーザの Gadget にメッセージを送ることでチャット機能を実現できます

## Pub/Sub 実装

Pub/Sub は APISIX の pubsub 機能で実装されます。バックエンドには Apache Kafka を使用します。
Gadget は APISIX の pubsub に接続して、特定のトピックをサブスクライブできます。