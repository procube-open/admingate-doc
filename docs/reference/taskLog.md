---
author: Procube Co.,Ltd.
---

# タスクログオブジェクト

## 概要

タスクログオブジェクトはタスク処理実行時のログを表すオブジェクトです。

## データ型

タスクログオブジェクトの属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|logId / ログID|ログを一意に示す文字列|string|必須、一意|
|taskId / タスクID|タスク処理の ID|string|必須|
|provSettingName / プロビジョニング設定名|タスク生成元となったプロビジョニング設定の名称。|string|必須|
|timestamp / 日時|ログの日時|datetime|必須|
|code / コード|ログメッセージの分類を表すコードをあらわす。コード体系は IDM2 ログと共通|string|必須|
|level / レベル|ログレベルを表す|string|必須、\[ERROR, WARN, INFO\] のいずれか|
|message / メッセージ|ログメッセージ|string| |
|context / 文脈情報|ログメッセージの生成元となる文脈情報。 JSON 形式で保持する。|string|必須|
|informedDatetime / 報告日時|ERRORレポートのメール送信を行った日時|datetime| |

## REST パス

このオブジェクトにアクセスする場合の REST パスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|"/IDManager/\_classes/\_taskLog"|
|インスタンスのパス|"/IDManager/\_taskLog/" + this.logId|
