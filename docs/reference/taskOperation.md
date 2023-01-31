---
author: Procube Co.,Ltd.
---

# プロビジョニング操作命令

プロビジョニング操作命令はタスクハンドラが実行するプロビジョニング操作の内容を保持します。

## データ型

プロビジョニング操作命令の属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|id / ID|プロビジョニング操作命令の ID|string|必須、一意|
|taskId / タスク ID|タスク処理の ID|string|必須|
|opCode / 命令コード|命令コード|string|\[add, modify, delete\] のいずれか|
|class / クラス名|操作対象のクラス（ ex. ActiveDirectory であれば、 User, Group のいずれか）|string| |
|keyValue / キー値|操作対象のインスタンスを指し示すキー属性の値|string| |
|value / 値|変更後のオブジェクトの値を表すJSONオブジェクトの文字列表現|string| |
|patch / パッチ|オブジェクトの値の変更内容を表す[プロビジョニングパッチ](provPatch)|object\[\]|プロビジョニングパッチオブジェクト|

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|/IDManager/\_classes/\_taskOperation|
|インスタンスのパス|"/IDManager/\_taskOperation/" + this.taskId|
