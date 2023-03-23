---
sidebar_position: 10
---

# 開発のすすめかた

ここでは、開発の進め方について説明する。

## 開発方針

ソフトウェアの品質向上のために以下のような施策を考える
* オープンソースの採用
* 最新技術の採用
* 開発プロセスの自動化

中でも日本のソフトウェア開発では開発プロセスの自動化の取り組みが遅れており、注意が必要である。本プロジェクトでは開発プロセスの自動化を最重要課題とする。
逆に、一般的な品質向上施策、セキュリテイ向上施策については、標準化や基準に基づいた盲目的な対応になりがちであり、再考が必要である。本プロジェクトでは、個々の施策ごとにコスト対効果を評価して実施の可否を判断することで真に社会貢献となるソフトウェアの開発を目指す。

## ロードマップ

以下に開発のロードマップを示す。


```plantuml
@startgantt
projectscale monthly  zoom 1.5
language ja

[Version 1.0 α版] lasts 90 days
[Version 1.0] lasts 90 days
[Version 1.1 α版] lasts 90 days
[Version 1.1] lasts 90 days

Project starts 2023-04-01
[Version 1.0 α版] ends 2023-06-30
[Version 1.0] ends 2023-09-30
[Version 1.1 α版] ends 2023-12-31
[Version 1.1] ends 2024-03-31
@endgantt
```

### Version 1.0 α版

#### 期間

2023/4/1-2023/6/30

#### 目標

トリアージと基礎技術調査：成果物は OSS層の仕様書、マニュアルモックシステム

### Version 1.0

#### 期間

2023/7/1-2023/9/30

#### 目標

PoC 開発、サンプルレベルのアプリケーションの動作

### Version 1.1 α版

#### 期間

2023/10/1-2024/12/31

#### 目標

基本的なガジェット、infoScoop, ID Manager を開発し、製品としてα版のリリース

### Version 1.1

#### 期間

2024/1/1-2024/3/31

#### 目標

パイロットユーザ向けのカスタマイズ、ガジェット、プロビジョニングを開発

### Version 1.2

grpc, http3 などの最新技術は 2023 年4月時点で取り組むには時期尚早であるため、これらの技術を採用したバージョンを 2024年に開発する。

#### 期間

2024/4/1-2024/9/30

#### 目標

互換性を維持しながら grpc, http3 のサポートに取り組んで性能向上を狙う

## トリアージ

* 開発の早期の段階で要件のリストを作成し、各要件の難易度を検討する
* 難易度は2人月以上(S), 1人月以上(A), 2週間以上(B), 1週間以上(C), 3日以上(D), 1日以上(E), 1日未満(F) というように工数の概算の対数でランク分けして表示する
* 要件の親子関係をもたせることも可能とする
* 実装するか否か、する場合はどのマイルストーンで実装するかを決定する
* 一般的な要件定義, 課題管理と以下の点で異なる
  * 項目ごとに難易度（＝概算工数）が必須である
  * 実装しない要件も記載する
  * すべてを最初からやるのではなく、スコープを分け、要件ごとにマイルストーンを設定する
  * ウォータフォールではなく、途中でリストに追加したりトリアージの結果を変更できる
  * トリアージの変更は利害関係者のレビューを必須とする


## 脆弱性対応

* [trivy](https://github.com/aquasecurity/trivy) による脆弱性診断で検出０件を目標とする
* ソースコードのリポジトリには github を使用し、そこで dependabot サービスを使用して常時脆弱性を監視する

trivy によるチェックは github action および VS Code に入れて実施する。

## デバッグログ
ブラウザ上のデバッグログをサーバ側にアップロードできること

### 背景
SPA はクライアント側で動作するので、ユーザが利用中に想定外のエラーが発生した場合にブラウザのコンソールを見ることができないので、デバッグが難しい。

### 詳細
* デバッグログをブラウザの local storage に蓄積し、 critical な例外が発生した際ににサーバにアップロードすること
* 蓄積しているデバッグログをユーザ操作により、ブラウザ上で表示したり、サーバにアップロードすることができること
* デバッグログは上限サイズ(100Kくらい？）をこえたところでローテートし、一定量（3個くらい）以上はたまらないようにすること

## devDependency
本番稼働環境にデプロイする場合に package.json の devDependency のモジュールが node_modules にインストールされないようにすること。

* yarn publish だと入らない?（未検証）
* コンテナ内に git clone して npm ci するとかだと入ってしまうので、 --production とか --omit=dev などをつけてインストールを避けること

## テスト自動化
テストを自動化すること。

* モジュール内単体テストは jest でテストすること
* REST API レベルのテストは jest-rest でテストすること
* Gadget のテストは Playwright などのヘッドレスブラウザで実行すること

## TDD
テスト駆動型開発を実施すること。すべての開発は以下の手順で実施する。

1. テスト項目書を書く
1. 利害関係者にテスト項目書をレビューしてもらう
1. テストプログラムを書く
1. テストを実行してテストが失敗することを確認する
1. コーディングしてテストが成功するまでデバッグする

ただし、Playwright によるテスト自動化は修正に対するコストが高いため、テストプログラムの代わりにテスト手順書を書くこととする。
* テスト手順書をマニュアルの操作例とすることが推奨される。
* Playwright によるテスト自動化は仕様が Fix してから、別作業として実施する。

## 文書の自動化
できるだけ、ドキュメントをソースコードから生成すること。

* API仕様書（swagger.yml)
* 仕様書、運用手順書（Markdownで作成後、Jinja2 でパラメータ埋め込み、有効化されてない機能の削除）

### 詳細
REST API については、 swagger.yml を生成すること。 example をふんだんに含めること。
APIをライブラリ提供する場合は TSDoc でソースコード中のコメントからドキュメントを生成すること。

## node v18 と yarn を利用

node v18 と yarn を利用すること。 package.json に以下の記述を追加すること。

```json
  "engines": {
    "node": ">=18",
    "npm": "please_use_yarn_instead"
  },
```

## typescript

typescript を使用する。tsconfig.json については、[Centralized Recommendations for TSConfig bases](https://github.com/tsconfig/bases)の中から適切なものを選ぶ。

### API Server
サーバサイドのプログラムについては、 @tsconfig/node18-strictest を使用する。

```bash
yarn add --dev @tsconfig/node18-strictest
```

tsconfig.json:
```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "API Server",
  "extends": "@tsconfig/node18-strictest/tsconfig.json"
}
```

### React

クライアント側 vue.js については、 @tsconfig/create-react-app を使用する。

```bash
yarn add --dev @tsconfig/create-react-app
```

tsconfig.json:
```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "React Appliacation",
  "extends": "@tsconfig/create-react-app/tsconfig.json"
}
```

### Vue

クライアント側 vue.js については、 @tsconfig/node18-strictest を使用する。

```bash
yarn add --dev @vue/tsconfig
```

tsconfig.json:
```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Vue Application",
  "extends": "@vue/tsconfig/tsconfig.json"
}
```