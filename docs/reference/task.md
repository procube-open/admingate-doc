---
author: Procube Co.,Ltd.
---

# プロビジョニングタスク

プロビジョニングタスクは個々のタスクの内容と実行ステータスを保持するオブジェクトです。このオブジェクトは、プロビジョニング発効時に BindBroker により、生成されます。プロビジョニング設定名 \(provSettingName\) で指し示されるプロビジョニング設定の種別 \(type\) に基づいて、処理するタスクハンドラが決定され、タスクハンドラはこのオブジェクトの内容を読み込んでプロビジョニングを実行します。

## データ型

プロビジョニングタスクの属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|id / ID|タスク処理の ID|string|必須、ID文字種、一意|
|requestId / 要求ID|[プロビジョニング要求](provRequest)の ID|string|必須、ID文字種|
|name / 名前|タスクの名称。|string| |
|provSettingName / 設定名|生成元となった[プロビジョニング設定](provSetting)の名称。|string| |
|result / 結果|タスクの実行結果を表す。|string|\[実行待ち, 完了, 失敗, 一時停止, キャンセル済み\] のいずれか|
|operations / 操作|タスク実行時にタスク処理系に渡される[プロビジョニング操作命令](taskOperation)の配列|object\[\]|プロビジョニング操作命令オブジェクト|
|registerdDatetime / 登録日時|タスクの登録日時|datetime| |
|firstExecutedDateTime / 初回試行日時|タスクの初回試行日時|datetime| |
|lastExecutedDateTime / 最終試行日時|タスクの最終試行日時|datetime| |
|executedTimes / 試行回数|タスクの試行回数|number| |
|failedData / 再試行情報|失敗したエントリーの記録|string| |
|logs / ログ|タスク実行結果のログ|object\[\]|[タスクログオブジェクト](taskLog)|

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|"/IDManager/\_classes/\_task"|
|インスタンスのパス|"/IDManager/\_tasks/" + this.id|
