---
author: Procube Co.,Ltd.
---

# プロビジョニング設定

プロビジョニング設定は対象システム毎のプロビジョニングの設定を保持します。 BindBroker はプロビジョニング要求が発効するのを契機として、プロビジョニング設定に基づいてタスクを生成します。

## データ型

プロビジョニング設定の属性は以下の通り。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|name / 名前|プロビジョニング設定の名前|string|必須、システムID、一意|
|displayName / 表示名|プロビジョニング設定の表示名|string| |
|description / 説明文|プロビジョニング設定の説明 - ヘルプの生成に使用される|string| |
|database / データベース|連携するデータベースの名前|string|必須、\[Repository, Master\] のいずれか|
|type / 種別|プロビジョニングの種類（＝タスクプランナーの種類） IDM2 では、以下の種類のプロビジョニングを提供する。**LDAP**: LDAPディレクトリへのプロビジョニングを実行する。 **RDB**: リレーショナルデータベースへのプロビジョニングを実行する。**OpenLDAPSchema**: OpenLDAP のスキーマのプロビジョニングを実行する。\(詳細については、[OpenLDAPスキーマプロビジョニング](openLdapSchemaProv)を参照されたい）。**OpenLDAPDB**: OpenLDAP データベース設定をプロビジョニングを実行する。\(詳細については、[OpenLDAPデータベースプロビジョニング](openLdapDbProv)を参照されたい）。**SSH+CSV**: SCP で CSVファイルを転送し、相手システムの CLIコマンドを呼び出して、プロビジョニングを実行する。**ActiveDirectory**: Active Directory に対してプロビジョニングを実行する。**Gadget**: ガジェットの変更を InfoScoop に対してプロビジョニングする。
**CustomTaskExecutor**: カスタムタスクエグゼキュータを呼び出す|string|必須、\[LDAP, RDB, OpenLDAPSchema, OpenLDAPACL, SSH+CSV, ActiveDirectory, Gadget, CustomTaskExecutor\] のいずれか|
|host / ホスト名|プロビジョニング先のホスト名|string|必須、種別が LDAP, RDB, OpenLDAPSchema, OpenLDAPACL, SSH+CSV または ActiveDirectory または CustomTaskExecutor のときのみ有効|
|port / ポート番号|プロビジョニング先のホストに接続する際のポート番号。省略時は、それぞれ標準ポート番号|number|種別が LDAP, RDB, OpenLDAPSchema, OpenLDAPACL, SSH+CSV または ActiveDirectory または CustomTaskExecutor のときのみ有効|
|path / パス|カスタムタスクエグゼキュータのパス|string|種別が CustomTaskExecutor のときのみ有効|
|secureConnection / 暗号化接続|プロビジョニング先のホストに接続する際に使用する暗号化設定。種別が LDAP の場合のみ指定可能、ActiveDirectory は常に SSL 接続|string|\[SSL, STARTTLS\] のいずれか、種別が LDAP、OpenLDAPSchema または OpenLDAPACL のときのみ有効|
|loginname / ID|プロビジョニング先ホストにログインする際のユーザID。ただし、種別が LDAP である場合はバインドDN|string|必須、種別が LDAP, RDB, OpenLDAPSchema, OpenLDAPACL, SSH+CSV または ActiveDirectory のときのみ有効|
|password / パスワード|プロビジョニング先ホストにログインする際のパスワード|string|必須、種別が LDAP, RDB, OpenLDAPSchema, OpenLDAPACL, SSH+CSV または ActiveDirectory のときのみ有効|
|classSetting / クラス毎設定|[クラスプロビジョニング設定](classProvSetting)のリスト|object\[\]|クラスプロビジョニング設定オブジェクト|
|dependenciesForAddModify / 追加・更新時依存プロビジョニング設定|追加・更新時依存プロビジョニング設定。[プロビジョニング依存設定](provisioningSettingDependency)のリスト。省略された場合には依存なしとなる。複数指定された場合にはANDとなる。|object\[\]|プロビジョニング依存設定オブジェクト|
|dependenciesForDelete / 削除時依存プロビジョニング設定|削除時依存プロビジョニング設定。[プロビジョニング依存設定](provisioningSettingDependency)のリスト。省略された場合には依存なしとなる。複数指定された場合にはANDとなる。|object\[\]|プロビジョニング依存設定オブジェクト|
|prompt / プロンプト|種別が SSH+CSV であるときにコマンドが入力可能であると判断する文字列 -   省略時は、$, \#, %のいずれでも対応|string|種別が SSH+CSV のときのみ有効|
|timeout / タイムアウト|種別が SSH+CSV であるときにコマンドがタイムアウトと判断する秒数 -   タイムアウトの秒数を経過すると SSH 接続を切断し、タスクの実行は失敗に失敗したとする、省略時は、60秒|number|種別が SSH+CSV のときのみ有効|
|withHeader / ヘッダ行フラグ|種別が SSH+CSV であるときに CSV ファイルにヘッダ行を出力するか否かを表す -   true の場合、ヘッダ行を出力する、ヘッダ行は属性 \(properties\) を出力する。マッピング \(propertyNameMapping\) を指定している属性の場合は先属性 \(destinationProperty\) を出力する。、第一列の更新種別は更新種別列名 \(opFieldName\) を用いる|boolean|必須、種別が SSH+CSV のときのみ有効|
|opFieldName / 更新種別列名|種別が SSH+CSV であるときに CSV ファイルに出力する更新種別の列名。種別が RDB であるときは更新するテーブルのカラム名となり、必須。 -   種別が SSH+CSV の場合は、ヘッダ行フラグ \(withHeader\) が false の場合はこの値を指定しても列名は出力されない|string|種別が SSH+CSV または追記のみが true のときのみ有効|
|addOp / 追加命令|種別が SSH+CSV であるときに CSV ファイルに出力する追加を指示する更新種別列の値。種別が RDB であるときはテーブルに挿入する追加を指示する更新種別列の値。|string|必須、種別が SSH+CSV または追記のみが true のときのみ有効|
|modifyOp / 変更命令|種別が SSH+CSV であるときに CSV ファイルに出力する変更を指示する更新種別列の値。種別が RDB であるときはテーブルに挿入する変更を指示する更新種別列の値。|string|必須、種別が SSH+CSV または追記のみが true のときのみ有効|
|deleteOp / 削除命令|種別が SSH+CSV であるときに CSV ファイルに出力する削除を指示する更新種別列の値。種別が RDB であるときはテーブルに挿入する削除を指示する更新種別列の値。|string|必須、種別が SSH+CSV または追記のみが true のときのみ有効|
|encode / CSVエンコード|種別が SSH+CSV であるときに CSV ファイルの文字コード|string|必須、種別が SSH+CSV のときのみ有効、\[UTF-8, Shift-JIS\] のいづれか|
|dateFormat / 日付フォーマット|種別が SSH+CSV であるときに CSV ファイルに出力する日付のフォーマット。種別が RDB であるときはデータ型が日付の属性を文字列に変換、また逆に文字列の属性を日付に解釈して登録する際に利用する。java の java.text.SimpleDateFormat のフォーマットで指定する。 -   省略時は、yyyy-MM-dd|string|種別が SSH+CSV または RDB のときのみ有効|
|datetimeFormat / 日時フォーマット|種別が SSH+CSV であるときに CSV ファイルに出力する日時のフォーマット。種別が RDB であるときはデータ型が日時の属性を文字列に変換、また逆に文字列の属性を日時に解釈して登録する際に利用する。java の java.text.SimpleDateFormat のフォーマットで指定する。 -   省略時は、yyyy-MM-dd HH:mm:ss|string|種別が SSH+CSV または RDB のときのみ有効|
|rdbmsType / RDBMSの種類|種別が RDB であるときの RDBMS の種類。|string|必須、種別が RDB のときのみ有効、\[PostgreSQL, MySQL\] のいずれか|
|rdbDatabase / RDBデータベース名|種別が RDB であるときのデータベース名。|string|必須、種別が RDB のときのみ有効|
|appendOnly / 追記のみ|種別が RDB であるときの SQL の生成ルール。 -   true の場合、プロビジョニング操作命令の命令コードの値に関わらず INSERT を実行する、false の場合、命令コードの値を参照し add の場合は INSERT, modify の場合は UPDATE, delete の場合は DELETE を実行する|boolean|種別が RDB のときのみ有効|
|ignoreZeroResult / 実行結果 0 件無視|種別が RDB であるときの UPDATE, DELETE の実行結果が、実行結果が 0 件の場合も成功として扱うか否かを示すフラグ。 -   true の場合、実行結果が 0 件も成功として扱う|boolean|種別が RDB のときのみ有効|
|ignoreMultiResult / 実行結果複数件無視|種別が RDB であるときの UPDATE, DELETE の実行結果が、複数件の場合も成功として扱うか否かを示すフラグ。 -   true の場合、実行結果が複数件も成功として扱う|boolean|種別が RDB のときのみ有効|
|leafClass / 末端クラス|他のクラスから参照される末端のクラスを宣言する -   BindBroker はここに指定されたクラスの追加と変更を最初に実行し、他のクラスの処理を完了した後、ここに指定したクラスの削除処理を実行する、Active Directory の場合、 Active Directory のユーザに対応するクラスをここに指定しなければならない、複数指定された場合、それらのクラス間の順序は指定できない|string\[\]|定義されているクラスのいずれか、種別が LDAP または ActiveDirectory のときのみ有効|
|outputAll / 全件出力フラグ|このプロビジョニング設定によるプロビジョニングで全件を出力するか否かを示すフラグ。true の場合、プロビジョニングが発効されると常に全件出力を行います。SSH+CSVの場合は更新種別の列が出力されなくなります。|boolean| |
|stop / 一時停止フラグ|このプロビジョニング設定によるプロビジョニングを一時的に停止するか否かを示すフラグ。一時停止している間に発効したプロビジョニングについては、そのタスクの実行が保留され、プロビジョニング先へは配信されません。一時停止を解除すると、保留されていたタスクが実行されます。|boolean| |
|ignore / 無効フラグ|このプロビジョニング設定が無効であるか否かを示すフラグ。無効化されている間に発効したプロビジョニングについては、このプロビジョニング設定は無視され、変更内容はプロビジョニング先に対して消失しますので、注意してください。|boolean| |

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|"/IDManager/\_classes/\_provSetting"|
|インスタンスのパス|"/IDManager/\_sandboxProvSettings/" + this.name|

