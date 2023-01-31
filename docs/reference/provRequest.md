---
author: Procube Co.,Ltd.
---

# プロビジョニング要求

プロビジョニング要求はオブジェクトの変更内容一式を管理するオブジェクトです。

## データ型

プロビジョニング要求の属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|id / ID|プロビジョニング要求の ID|string|必須、ID文字種、一意|
|database / データベース|編集データベースの名称|string|必須、\[RepositorySandbox, Sandbox\] のいずれか|
|status / ステータス|プロビジョニング要求の状態|string|必須、\[編集中, 発効待ち, 発効済み, キャンセル済み\] のいずれか|
|creator / 作成者|プロビジョニング要求を作成したユーザ|string| |
|executor / 発効者|プロビジョニング要求を発効させたユーザ|string| |
|canceler / キャンセル者|プロビジョニング要求をキャンセルしたユーザ|string| |
|createDatetime / 作成日時|プロビジョニング要求が作成された日時|datetime| |
|fixedDatetime / 編集終了日時|プロビジョニング要求が発効待ち状態になった日時|datetime| |
|scheduledDatetime / 発効予定日時|プロビジョニング要求の発効予定日時|datetime| |
|fireDatetime / 発効日時|プロビジョニング要求が発効した日時|datetime| |
|cancelDatetime / キャンセル日時|プロビジョニング要求をキャンセルした日時|datetime| |
|targets / 編集内容|オブジェクト毎の更新情報を示す[プロビジョニングターゲット](provTarget)のリスト|object\[\]|必須、プロビジョニングターゲットオブジェクト|

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

**クラスの定義のパス**

|種別|パス|
|---|---|
|クラスの定義のパス|/IDManager/\_classes/\_provRequestDefinition|

**インスタンスのパス**

|種別|パス|
|---|---|
|インスタンスのパス（一覧）|"/IDManager/\_provRequests"|
|インスタンスのパス（1件）|"/IDManager/\_provRequests/" + this.id|

|種別|パス|
|---|---|
|インスタンスのパス（一覧）|"/IDManager/\_provRequestsUser/" + user\(\)|
|インスタンスのパス（1件）|"/IDManager/\_provRequestsUser/" + user\(\) + "/" + this\(\).id|

|種別|パス|
|---|---|
|インスタンスのパス（一覧）|"/IDManager/\_currentRepositorySandboxProvRequestsUser/" + user\(\)|
|インスタンスのパス（1件）|"/IDManager/\_currentRepositorySandboxProvRequestsUser/" + user\(\) + "/" + this\(\).id|

|種別|パス|
|---|---|
|インスタンスのパス（一覧）|"/IDManager/\_currentSandboxProvRequestsUser/" + user\(\)|
|インスタンスのパス（1件）|"/IDManager/\_currentSandboxProvRequestsUser/" + user\(\) + "/" + this\(\).id|
