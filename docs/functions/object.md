---
sidebar_position: 30
---

# オブジェクト

Teigi のデータはすべてBSONにシリアライズ可能な JavaScript のオブジェクトです。
* Mongo DB には BSONにシリアライズして格納されます
* オブジェクトのサイズは BSON にシリアライズして  16MB(16,000,000 bytes)未満でなければなりません
* メモリ上にロードされたときは JavaScript のオブジェクトとなります
* テキストにシリアライズする場合はEJSON v2 でシリアライズされます
* REST API で外部公開する場合は、通常のJSONへの変換が行われます
* 画像、暗号化データも BSON の $binary で保持できます

## TypeScript

Teigi のオブジェクトは TypeScript では TeigiObject クラスを継承します。
EJSON、BSONからデシリアライズでき、EJSON、BSONにシリアライズできます。

## REST API

REST API で流通する場合は、EJSON、JSONのいずれかの形式を選択できます。
JSONを TeigiObject にデシリアライズする場合は、値の型を確定するためにスキーマ情報が必要です。
スキーマー情報で値の型を確定できない場合はエラーになります。

## データベースとコレクション

Teigi のデータはすべてデータベース teigi に種別ごとにコレクションに分けて格納されます。
ここで種別は Teigi オブジェクトのクラスの派生構造の第一階層となります。

```plantuml Class
!theme spacelab
@startuml
Class TeigiObject {
  toBSON(): BSON
  toEJSON(): EJSON
  any getProperty(name: string)
  setProperty(name: string, value: any)
}

Class TeigiClass<T> {
  desirialize<T>(BSON|EJSON): T
}

Class TeigiProperty

Class TeigiInterface

Class TeigiGadget

Class TeigiPage

Class TeigiNaviItem

Class TeigiSideBar

Class User

Class Organization

Class Device

TeigiObject --|> TeigiClass
TeigiObject --|> TeigiProperty
TeigiObject --|> TeigiInterface
TeigiObject --|> TeigiGadget
TeigiObject --|> TeigiPage
TeigiObject --|> TeigiNaviItem
TeigiObject --|> TeigiSideBar
TeigiObject --|> User
TeigiObject --|> Organization
TeigiObject --|> Device

@enduml
```

## 属性値導出

Teigi オブジェクトはその属性値を導出式から計算した値で埋めることができる。以下の三種類の属性値導出が利用できる。

* 補間保存：オブジェクトの保存時にそのオブジェクトの属性値を計算して保存する
* 更新伝播：オブジェクトの保存時に他のオブジェクトの属性値の補間保存の結果を更新する
* 結合参照：オブジェクトの参照時に結合問い合わせをおこなって属性値を埋めた結果を返す

## デフォルト値補間

## 値の正規化

## 集約

Teigi オブジェクトはオブジェクトの特定のリストを外部の別のコレクションに持つことができる。
大量の内包オブジェクトを保つ場合に使用する。

# コード生成

# テストプログラム生成

# 　ドキュメント生成

