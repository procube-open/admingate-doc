---
author: Procube Co.,Ltd.
---

# システム設定オブジェクト

システム設定オブジェクトは ID Manager のシステム全体の共通設定を保持するオブジェクトです。 /IDManager/\_masterSystemSettings/SystemSetting に１個だけ定義されるシングルトンです。

## データ型

クラス定義の属性は以下の通りです。

|名前 / 表示名|説明|データ型|修飾子|
|--------|---|----|---|
|name / 名前|オブジェクトの ID であるが、シングルトンであるため、 "SystemSetting" 固定である。|string|必須、システムID、一意|
|systemName / システム名|Web UI のタイトルとして利用されるシステム名|string|必須、出荷時は "NetSoarer ID Manager"|
|logoFileURL / ロゴファイル名|ロゴファイルの URL|string|出荷時は/IDManager/img/netsoarer\_logo.jpg|
|pwpolicyMaxLen / PW最大文字数|パスワードポリシー：最大文字数：省略されている場合は 255 と見なされる|number| |
|pwpolicyMinLen / PW最小文字数|パスワードポリシー：最小文字数：省略されている場合は 0 と見なされる|number| |
|pwpolicyAlphaCnt / PW英字文字数|パスワードポリシー：最小英字数：省略されている場合は 0 と見なされる|number| |
|pwpolicyNumSymbolCnt / PW数字記号文字数|パスワードポリシー：最小数字記号数：省略されている場合は 0 と見なされる|number| |
|pwpolicySymbolChars / PW利用可能記号|パスワードポリシー：利用可能記号：省略されている場合は "" と見なされる。ただし、文字「\{」は IDM2 でパスワードとして利用することを禁止しているため、ここに含めることはできない|string| |
|pwUserIf / PW変更インタフェース|パスワード変更サーブレットがユーザのオブジェクトにアクセスするためのインタフェース名|string|定義されているインタフェース名|
|pwUseQuestion / PW秘密質問利用|パスワード変更サーブレットで秘密の質問を利用するか否かを示すフラグ。 true の場合は秘密の質問を利用する。|boolean| |
|pwPermitSameValue / PW同一パスワード許可|パスワード変更サーブレットで現在のパスワードと同じ値の設定を許可するか否かを示すフラグ。 true の場合は同一パスワードを許す。|boolean| |
|pwChangeMessageDay / PW変更促進メッセージ表示開始日|パスワード変更サーブレットで、パスワードの有効期限切れメッセージの表示を開始する日。省略されている場合は 0 と見なされる|number| |
|pwAvailableDays / PW有効日数|パスワードの有効日数。パスワード変更サーブレットでパスワードの更新を行ったとき、ユーザオブジェクトの有効期限を更新日から有効日数後の日付に変更する。ただし、有効期限が入っていない場合は変更しない。省略されている場合は 180 と見なされる|number| |
|pwInitializeExpireMinutes / PW忘れ受付有効期限（分）|パスワード忘れ受付の有効期限（分）。パスワード忘れ受付サーブレットで、パスワードの再設定申請を行ったときに発信されるメールに埋め込まれたリダイレクタの URL の有効期限を分単位で指定する。省略されている場合は 60 とみなされる|number| |
|pwInitializeMailCount / PW忘れ申請制限回数|パスワード忘れ受付の申請回数の制限値。PW忘れ申請制限期間（分）に、同一ユーザID に対するパスワード再設定申請がこの制限回数を超えて行われると、エラーを表示して新たな申請を受け付けない。省略されている場合は 5 とみなされる。 他人のユーザIDを何度も入力してメールを沢山送りつけるイタズラに対応するため、同一ユーザID について、短時間に何度もメールを送信するのを避けることができる|number| |
|pwInitializeMailPeriod / PW忘れ申請制限期間（分）|パスワード忘れ受付の申請制限期間（分）。この制限期間に、PW忘れ申請制限回数を超えた場合は新たな申請を受け付けない。省略されている場合は 180 とみなされる|number| |
|systemIdIf / 連携システムリスト|API などで連携するシステムのシステムのIDと共有の鍵の対を提供するインタフェース （詳細はパスワード変更サーブレットを参照のこと）|string|定義されているインタフェース名|
|adminUsers / システム管理者|システム管理者と見なされるプリンシパルのユーザID|string\[\]| |
|adminRoles / システム管理者グループ|システム管理者と見なされるプリンシパルのグループ|string\[\]| |
|authType / 認証方式|認証の方式 **none**: すべてのアクセスを拒否する  **LDAP**: LDAP に問い合わせて、認証を行う  **SAML**: SAML IdP に認証を移譲する  |string|必須、\[none, LDAP, SAML\] のいずれか、出荷時はLDAP|
|ldapServer / LDAPサーバ|認証方式が LDAP の場合のサーバの FQDN|string|認証方式が LDAP のときのみ有効かつ必須、出荷時は localhost.localdomain|
|ldapBaseDN / LDAPベースDN|認証方式が LDAP の場合に、ユーザを検索する基点となる DN|string|認証方式が LDAP のときのみ有効かつ必須|
|ldapBindDN / LDAPバインドDN|認証方式が LDAP の場合に、LDAPへの接続に使用する BIND DN|string|認証方式が LDAP のときのみ有効かつ必須|
|ldapPassword / LDAPのパスワード|認証方式が LDAP の場合のパスワード|string|認証方式が LDAP のときのみ有効かつ必須|
|ldapUidAttrName / LDAPユーザID属性名|認証方式が LDAP の場合に、ユーザがログインに使用するユーザIDを保持する属性の LDAP 上の属性名|string|認証方式が LDAP のときのみ有効かつ必須|
|ldapGroupAttrName / LDAPグループ属性名|認証方式が LDAP の場合に、ユーザが所属するグループのIDを保持する属性の LDAP 上の属性名|string|認証方式が LDAP のときのみ有効|
|samlEntityId / SAMLエンティティID|認証方式が SAML の場合の IDM2 のエンティティ ID|string|認証方式が SAML のときのみ有効かつ必須|
|samlIdpEntityId / SAML-IdPエンティティID|認証方式が SAML の場合の IdP （認証サーバ）のエンティティ ID|string|認証方式が SAML のときのみ有効かつ必須|
|samlIdpMetadataURL / SAML-IdPメタデータURL|認証方式が SAML の場合のメタデータをダウンロードできる URL|string|認証方式が SAML のときのみ有効かつ必須|
|samlGroupAttrName / SAMLグループ属性名|認証方式が SAML の場合に、ユーザが所属するグループのIDを保持する属性の SAML アサーション上の属性名|string|認証方式が saml のときのみ有効|
|clockDaemons / クロックデーモン|[クロックデーモン](clockDaemon)のリスト|object\[\]|クロックデーモンオブジェクト|
|passphrase / パスフレーズ|[暗号化](crypt)で使用するパスフレーズ|string||
|adPasswordSyncKey / ADパスワード同期鍵|[Active Directory パスワード同期](adPasswordSync)で使用するインタフェースの認証鍵。ADパスワード同期を使用する場合は必須|string||
|adUidAttrName / ADユーザID属性名|[Active Directory パスワード同期](adPasswordSync)を使用する場合に、PW変更インタフェースで uid とは異なる属性値を用いてユーザID を指定する場合に使用する属性名|string||
|adUidType / ADユーザID形式|[Active Directory パスワード同期](adPasswordSync)を使用する場合に対応する IDM2 でのユーザID の形式。\{\}の部分を変換するため、任意の形式が可能です。|string||
|csvApiFileEncoding / CSV API ファイルエンコーディング|CSVアップロード、ダウンロードで使用するエンコーディング|string|\[Shift\_JIS, UTF-8\] のいずれか|
|traceFormula / 計算式トレースログを有効にする|計算式トレースログを有効にするかどうかのフラグ。デバッグ用途であり、高負荷となるため本稼動時は設定すべきでない|boolean| |

## 運用中の設定変更

運用中にシステム設定オブジェクトの値を変更する場合は以下の注意が必要です。
、パスワードポリシーを変更しても、設定済みのパスワードには影響しません。 保存されているパスワードが暗号化されている場合、設定済みのパスワードがポリシーに従っているか否かはチェックされません。 保存済みのパスワードが暗号化されていない場合、CSVアップロード時、ガジェットからの個別入力時に古い値をそのまま指定してもポリシーがチェックされるため、 他の属性を変更するために編集する場合でも、パスワードポリシー違反が検出されます。

## REST API パス

このオブジェクトにアクセスする場合の REST API のパスは以下の通りです。

|種別|パス|
|---|---|
|クラスの定義のパス|"/IDManager/\_classes/\_systemSetting"|
|インスタンスのパス|"/IDManager/\_sandboxSystemSettings/SystemSetting"|

