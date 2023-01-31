---
author: Procube Co.,Ltd.
---

# クラスプロビジョニング設定

クラスプロビジョニング設定はクラスごとのプロビジョニング内容を定義します。

## タスクの生成

BindBroker はこの情報をもとに[プロビジョニングタスク](task)を生成します。タスクの内容はプロビジョニング設定の種別 \(type\) ごとに異なります。

## データ型

クラスプロビジョニング設定の属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|type / 種別|[プロビジョニング設定](provSetting)で指定されたプロビジョニング種別|string|上位のオブジェクトから自動設定|
|className / クラス名|対象となるクラス名|string|必須、一意、現在定義されているクラスのいずれか|
|properties / 属性|プロビジョニングで転送する[クラスプロビジョニング属性](classProvProperty)のリスト -   このリストが指定されていない場合は、クラスに定義されているすべての属性が指定されたのと同義となる。種別が LDAP の場合、属性名にアンダースコアが含まれているものについては、自動的にハイフン'-' に置換される。 この置換はこのリストが指定されていない場合も行われる|object\[\]|クラスプロビジョニング属性オブジェクト|
|filter / フィルタ式|フィルタ式 -   対象となるオブジェクトを抽出する[問い合わせ式](querymongoDB.md)を文字列で指定する。省略された場合、このクラスの全てのオブジェクトが処理対象となる。|string| |
|templateDn / テンプレートDN|エントリ作成時のテンプレートとなるオブジェクトのDNを指定する|string|種別が LDAP, ActiveDirectory のときのみ有効|
|workingDir / 作業ディレクトリ|種別が SSH+CSV であるときに CSV ファイルを置くディレクトリ -   省略時は、ホームディレクトリを示す ~|string|種別が SSH+CSV のときのみ有効|
|csvNamingRule / CSV 命名規則|種別が SSH+CSV であるときに生成する CSV ファイルの命名規則 -   %id%, %registerdDatetime%, %currentDatetime% をパラメータとして指定可能、%id% ：プロビジョニングタスク \(\_task\) のID \(id\) を埋め込む、%registerdDatetime% ：プロビジョニングタスク \(\_task\) の登録日時 \(registerdDatetime\) を埋め込む、%currentDatetime% ：プロビジョニング実行時の現在日時を埋め込む、%id%, %currentDatetime% の日時は java の java.text.SimpleDateFormat でフォーマットに \[yyyyMMddHHmmssSSS\] を指定した形式とする、省略時は、"クラス名.csv"|string|種別が SSH+CSV のときのみ有効|
|execCommand / 処理コマンド|種別が SSH+CSV であるときに実行するスクリプト -   引数に CSV 命名規則 \(csvNamingRule\) を元に生成した CSV ファイル名を指定して実行する。省略時は、ファイル転送のみ行う。|string|種別が SSH+CSV のときのみ有効|
|tablesName / テーブル名|種別が RDB であるときに更新するテーブル名|string|必須、種別が RDB のときのみ有効|
|primaryColumn / 主キー列名|種別が RDB であるときに更新するテーブルの主キーの列名。 UPDATE, DELETE のクエリ生成で WHERE 句に指定する。 -   省略時は、追記のみが false の場合はプロビジョニング操作命令の命令コード add の場合に INSERT のみ行う。|string|種別が RDB のときのみ有効|
|noDecryption / 非復号化フラグ|暗号化設定で AES 暗号が指定された属性について、復号化を行わないことを指定するフラグ|boolean||

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|"/IDManager/\_classes/\_classProvSetting"|
|インスタンスのパス|プロビジョニング設定に内包されているため REST パスはない|
