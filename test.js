function get_results (result) {
    print(tojson(result));
}
db.classes.insertMany([
	{
		"_s"
		"description": "システムの利用者のクラス",
		"displayName": "利用者",
		"isNestedObject": false,
		"isPrimaryAndNestedObject": false,
		"keyProperty": "uid",
		"ldapSuperClass": "person",
		"name": "user",
		"outputLdapSchema": true,
		"validation": [
			{
				"descriptionEx": "(this().idmRole != \"IDM_ADMIN\" && this().idmRole != \"IDM_CONTACT\") ? ((this().tenantid != \"\" && this().tenantid != null) ? \"\":\"指定した権限ではテナントIDは必須入力です\"):\"\"",
				"isWarning": false,
				"validateEx": "(this().idmRole != \"IDM_ADMIN\" && this().idmRole != \"IDM_CONTACT\") ? ((this().tenantid != \"\" && this().tenantid != null) ? true:false):true"
			}
		]
	},
	{
		"description": "IDaaS におけるテナント",
		"displayName": "テナント",
		"isNestedObject": false,
		"isPrimaryAndNestedObject": false,
		"keyProperty": "tenantid",
		"name": "tenant",
		"outputLdapSchema": false
	}
])
db.properties.insertMany([
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": " IDaaS のテナントのID",
		"displayName": "テナントID",
		"isArray": false,
		"name": "tenantid",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false,
		"valuesEx": "getResource(\"/IDManager/enumTenantsIF\")"
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "ユーザを識別する一意の ID",
		"displayName": "ユーザID",
		"isArray": false,
		"maxLen": 64,
		"minLen": 1,
		"name": "uid",
		"outputLdapSchema": false,
		"propagations": [
			{
				"targetProperty": "dn"
			}
		],
		"required": true,
		"stringRestriction": "id",
		"type": "string",
		"unique": true,
		"uniqueIgnoreCase": true
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "ユーザの氏名",
		"displayName": "氏名",
		"isArray": false,
		"maxLen": 256,
		"minLen": 1,
		"name": "cn",
		"outputLdapSchema": false,
		"required": true,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "ユーザがID管理業務上割り当てられた役割",
		"displayName": "ID管理役割",
		"isArray": false,
		"name": "idmRole",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false,
		"values": [
			{
				"displayName": "全権管理者",
				"value": "IDM_ADMIN"
			},
			{
				"displayName": "コンタクトセンター",
				"value": "IDM_CONTACT"
			},
			{
				"displayName": "エンドユーザー管理者",
				"value": "IDM_USER_ADMIN"
			},
			{
				"displayName": "一般利用者",
				"value": "IDM_USER"
			}
		]
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "\tユーザのパスワード",
		"displayName": "パスワード",
		"encryption": "SSHA",
		"isArray": false,
		"name": "userPassword",
		"outputLdapSchema": false,
		"required": false,
		"stringRestriction": "password",
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"derivation": "\"uid=\" + this().uid + \",ou=Users,DC=idaas2,DC=procube-demo,DC=jp\"",
		"description": "LDAPのディレクトリーツリー内での位置を示す識別子",
		"displayName": "DN",
		"isArray": false,
		"name": "dn",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "true の場合アカウントを無効化する",
		"displayName": "アカウント無効化",
		"isArray": false,
		"name": "accountLock",
		"outputLdapSchema": true,
		"required": false,
		"type": "boolean",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "最後にパスワード変更サーブレットからパスワードを変更した日時",
		"displayName": "パスワード変更日時",
		"isArray": false,
		"name": "passwdChangedDatetime",
		"outputLdapSchema": true,
		"required": false,
		"type": "datetime",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "この日をこえてログインするとパスワード変更が強要される",
		"displayName": "パスワード有効期限",
		"isArray": false,
		"name": "expireDate",
		"outputLdapSchema": true,
		"required": false,
		"type": "date",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"description": "パスワードが変更されるべき状態であることを示すフラグ",
		"displayName": "パスワード変更要求フラグ",
		"isArray": false,
		"name": "toBeChanged",
		"outputLdapSchema": true,
		"required": false,
		"type": "boolean",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"displayName": "データ1",
		"isArray": false,
		"name": "data1",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"displayName": "データ2",
		"isArray": false,
		"name": "data2",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"displayName": "データ3",
		"isArray": false,
		"name": "data3",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"displayName": "データ4",
		"isArray": false,
		"name": "data4",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "user",
		"allowAnotherValue": false,
		"displayName": "データ5",
		"isArray": false,
		"name": "data5",
		"outputLdapSchema": true,
		"required": false,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "IDaaSのテナントのID",
		"displayName": "テナントID",
		"isArray": false,
		"name": "tenantid",
		"outputLdapSchema": true,
		"required": false,
		"stringRestriction": "systemid",
		"type": "string",
		"unique": true,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "テナントの表示名",
		"displayName": "テナント表示名",
		"isArray": false,
		"name": "displayName",
		"outputLdapSchema": false,
		"required": false,
		"type": "string",
		"unique": true,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "テナントを収容する  Access Manager の ID",
		"displayName": "AccessManager ID",
		"isArray": false,
		"name": "amid",
		"outputLdapSchema": false,
		"required": true,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false,
		"values": [
			{
				"displayName": "am0",
				"value": "am0"
			},
			{
				"displayName": "am1",
				"value": "am1"
			},
			{
				"displayName": "am2",
				"value": "am2"
			}
		]
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "二要素認証を使用するかパスワードのみの認証とするかを選択する",
		"displayName": "認証方式",
		"isArray": false,
		"name": "authMethod",
		"outputLdapSchema": false,
		"required": true,
		"type": "string",
		"unique": false,
		"uniqueIgnoreCase": false,
		"values": [
			{
				"displayName": "パスワード",
				"value": "Password"
			},
			{
				"displayName": "OTP二要素認証",
				"value": "MFA"
			}
		]
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "セッションの最大時間を時間時間を単位として指定する。例えば 8 を指定すると、8時間を経過すると通信がある状態でも一旦ログアウトする。",
		"displayName": "セッション最長時間",
		"isArray": false,
		"name": "lifetime",
		"outputLdapSchema": false,
		"required": true,
		"type": "number",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "時間通信がない状態で指定した時間が経過するとログアウトする。たとえば、8を指定すると8時間ログインがない状態が持続するとログアウトする。SPへのアクセスでは IdP への通信は発生しないことを考慮して設定する必要がある。",
		"displayName": "無通信タイムアウト",
		"isArray": false,
		"name": "inactivity",
		"outputLdapSchema": false,
		"required": true,
		"type": "number",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "ログイン状態を維持する機能を使用するかどうかを指定する。スマホによるOTP二要素認証を使用する場合など、ログイン手順が利用者の負担となる場合にこれをチェックすることで毎日スマホからOTPを転記する負担を軽減できる。",
		"displayName": "ログイン状態維持",
		"isArray": false,
		"name": "usePeriodic",
		"outputLdapSchema": false,
		"required": false,
		"type": "boolean",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"description": "ログイン状態を維持する日数を指定する。たとえば、7を指定すると、ブラウザを無通信タイムアウトでセッションが切れても一週間ログイン状態が維持される。",
		"displayName": "ログイン状態維持日数",
		"isArray": false,
		"name": "daysForExpire",
		"outputLdapSchema": false,
		"propGroupName": [
			"usePeriodic#true"
		],
		"required": false,
		"type": "number",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"className": "samlsp",
		"description": "SAML SP のリスト",
		"displayName": "SAML SP リスト",
		"isArray": false,
		"name": "saml_sps",
		"outputLdapSchema": false,
		"required": false,
		"type": "object",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"className": "samlattr",
		"description": "SAML属性定義のリスト",
		"displayName": "SAML属性定義リスト",
		"isArray": false,
		"name": "saml_attrs",
		"outputLdapSchema": false,
		"required": false,
		"type": "object",
		"unique": false,
		"uniqueIgnoreCase": false
	},
	{
		"class": "tenant",
		"allowAnotherValue": false,
		"className": "samlnameid",
		"description": "SAML NameIDのリスト",
		"displayName": "SAML NameIDリスト",
		"isArray": false,
		"name": "saml_nameids",
		"outputLdapSchema": false,
		"required": false,
		"type": "object",
		"unique": false,
		"uniqueIgnoreCase": false
	}

])
db.classes.aggregate([
	{
		$lookup: {
			from: "properties",
			localField: "name",
			foreignField: "class",
			as: "propertyDefinitions"
		}
	}
])

db.transactions.insertMany([
	{
		$lookup: {
			from: "properties",
			localField: "name",
			foreignField: "class",
			as: "propertyDefinitions"
		}
	}
])