---
sidebar_position: 35
---

# gRPC

Teigi の API は gRPC で提供される。（Version 1.2)

* Web UI から grpc-web で APISIX 経由でアクセスする
* アクセス制御や簡単な FieldMask は APISIX で実装する
* 内部通信は直接 grpc のサーバにアクセスする
* Open API 3 を別途サポートする？
* クラスの定義でクラスごとにコンパイルモードかインタプリタモードを選択できる
* meta やパッケージソフトの固定的なクラスはコンパイルモードを選択することで性能を向上させる
* gRPC サーバは Rust で開発され、tonic と mongo db のドライバーを使用して非同期で動作させる
* gRPC で MongoDB の Change Stream の配信を受け取ることができ、これにより Web UI で様々な通知をリアルタイムで受け取れるｚ１

参考：https://zenn.dev/tfutada/articles/e5bf173edd541b

## コンパイルモード

クラス定義、インタフェース定義から protobuf のサービス定義、 typescript, Rust のクラス定義を生成する。
Gaget 定義から Vue のコンポーネントを生成する。
コンパイルモードのクラスでは、定義情報は mongo DB に入っている必要はありません。

## インタプリタモード

Teigi オブジェクトは gRPC 内では BSON を protobuf にマッピングした形式で流通する。
gRPCサーバはクラス定義、インタフェース定義を読み込み、その内容を解釈しながらインタプリタとして動作する。
Gadget はクラス定義、インタフェース定義、Gadget定義を読み込んでインタプリタとして動作する。
インタプリタモードのクラスでは、定義情報は mongo DB に入っていなければなりません。
