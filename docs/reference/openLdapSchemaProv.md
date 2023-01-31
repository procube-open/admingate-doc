---
author: Procube Co.,Ltd.
---

# OpenLDAPスキーマプロビジョニング

プロビジョニング設定の種別で OpenLDAPSchema を指定することで、 IDM2のクラス定義情報から LDAP スキーマを生成し、 OpenLDAP のサーバにインストールすることができます。

## プロビジョニング設定

種別が OpenLDAPSchema のプロビジョニング設定を作成し、 クラス毎設定にクラス定義（ \_classDefinition）クラスを追加することにより、 IDM2のクラス定義を OpenLDAP のスキーマとして出力できます。

OpenLDAPスキーマプロビジョニングでは、 OpenLDAP の OLC に LDAP プロトコルでアクセスして、 スキーマを設定します。従って、OpenLDAPスキーマプロビジョニングを使用する場合は、対象となる slapd の設定を slapd.conf ではなく、 OLC を使用するように構成しておく必要があります。 OpenLDAP のデフォルトでは、slapd は OLC を使用するように構成されていますので、特に変更の必要はありません。 プロビジョニング設定では、ホスト名に対象となるサーバのホスト名を指定し、ポート番号に 389 を指定してください。 また、ID に OLC データベースの rootdn である "cn=config" を指定し、 パスワードにその rootpw の値を指定する必要があります。OpenLDAP のインストール直後は OLCデータベースに rootpw の指定がありませんので、 rootpw を追加していただく必要があります。例えば、以下のような内容のファイルを /tmp/config.ldif に作成いただき、

```
dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: idm2prov

```

以下のコマンドを実行していただくことで、rootpw を idm2prov に設定することができます。 ただし、これはサンプルですので、実際の rootpw は乱数で生成したパスワードを使用していただくことをお勧めいたします。

```
ldapmodify -Y EXTERNAL -H ldapi:// -f /tmp/config.ldif 
```

OpenLDAPスキーマプロビジョニングの出力先の DN は、 "cn=\{通番\}idm2,cn=schema,cn=config" となります。 ここで、通番は 0 以上の整数で "cn=schema,cn=config" 配下の他のオブジェクトの DN で使用されていない 　最も若い番号が使用されます。

## クラス（objectclass）生成ルール

クラス定義の LDAPスキーマ生成属性の値が true であるもののみがプロビジョニングの対象となります。

１個のクラス定義に対して、以下の属性でオブジェクトクラスを生成します。

|属性名|生成ルール|
|---|-----|
|OID|"1.3.6.1.4.1.35304.18." の後ろにクラス番号を追加したもの。 クラス番号は、1 から始まり、生成した順に付与する。|
|NAME|クラス定義のクラス名。"\_"は"-"に置き換えられる。|
|SUP|クラス定義の LDAPスーパークラス。ただし、指定されていない場合は、この属性を生成しない。|
|STRUCTURAL|固定で必ず生成。|
|MUST|クラス定義の属性のうち、LDAPスキーマ生成属性の値が true で、かつ必須の値が true のものを列挙。|
|MAY|クラス定義の属性のうち、LDAPスキーマ生成属性の値が true で、かつ必須の値が false のものを列挙。|

## 属性型（attribuetype）生成ルール

クラス定義が内包する属性定義のデータ型がオブジェクト以外で、 LDAPスキーマ生成属性の値が true であるもののみがプロビジョニングの対象となります。

１個の属性定義に対して、以下の属性で属性型を生成します。

|属性名|生成ルール|
|---|-----|
|OID|クラスの OID の後ろに "." と属性番号を追加したもの。 属性番号は、1 から始まり、生成した順に付与する。|
|NAME|属性定義の名前。"\_"は"-"に置き換えられる。|
|SINGLE-VALUE|属性定義の配列が false の場合に出力|
|SYNTAX|属性定義のデータ型毎に後述の表に従って出力|
|EQUALITY|属性定義のデータ型毎に後述の表に従って出力|
|ORDERING|属性定義のデータ型毎に後述の表に従って出力|
|SUBSTR|属性定義のデータ型毎に後述の表に従って出力|

以下に、データ型毎の SYNTAX, EQUALITY, ORDERING, SUBSTR の生成ルールを示します。

|データ型|SYNTAX|EQUALITY|ORDERING|SUBSTR|
|----|------|--------|--------|------|
|文字列 （大文字小文字無視指定なし）|1.3.6.1.4.1.1466.115.121.1.15|caseExactMatch|caseExactOrderingMatch|caseExactSubstringsMatch|
|文字列（大文字小文字無視指定あり\)|1.3.6.1.4.1.1466.115.121.1.15|caseIgnoreMatch|caseIgnoreOrderingMatch|caseIgnoreSubstringsMatch|
|ブール|1.3.6.1.4.1.1466.115.121.1.7|booleanMatch|生成せず|生成せず|
|整数|1.3.6.1.4.1.1466.115.121.1.36|numericStringMatch|numericStringOrderingMatch|numericStringSubstringsMatch|
|日時|1.3.6.1.4.1.1466.115.121.1.24|generalizedTimeMatch|generalizedTimeOrderingMatch|生成せず|
|日付|1.3.6.1.4.1.1466.115.121.1.24|generalizedTimeMatch|generalizedTimeOrderingMatch|生成せず|
|IPアドレス|1.3.6.1.4.1.1466.115.121.1.15|caseExactMatch|生成せず|生成せず|

## 稼働後に利用する場合の注意事項

IDM2 から OpenLDAP のディレクトリへのプロビジョニングを設定していて、データが同期している状態で、 　クラス定義を変更する場合、OpenLDAP 上でデータ内容と矛盾しないよう、注意していただく必要があります。

属性の削除や変更を行う場合は、以下の手順で実施してください。

-   クラス定義から属性を削除する場合は、当該属性の値を削除してから実施してください。 更新形式のCSVファイルで全オブジェクトをダウンロードし、削除対処の属性の値を全行に渡って削除し、 再度アップロードすることで、当該属性の値を削除できます。値が必須の属性を削除する場合は、 先に必須を外すことで、同じ手順で属性の値を削除できます。
-   属性の型を変更する場合は、前項と同じ手順で属性の値を削除し、属性の型を変更後、 適切な値が入ったCSVファイルをアップロードすることで、属性の値の型を変換できます。
