---
sidebar_position: 30
---

# パート３: Keycloak での設定(2)

再度、Keycloak のコンソール画面を開き、クライアントの設定を完了させます。

設定手順は以下のとおりです。

1. [SAML クライアントにロールを追加する](#saml-クライアントにロールを追加する)
1. [SAML クライアントにマッパーを追加する](#saml-クライアントにマッパーを追加する)
1. [SAML クライアントの 「POST バインディング URL」および「リダイレクト URI」を再設定する](#saml-クライアントの-post-バインディング-urlおよびリダイレクト-uriを再設定する)
<!--1. [AWS SAML ロールを割り当てる](#aws-saml-ロールを割り当てる)-->
1. [ユーザにロールを割り当てる](#ユーザにロールを割り当てる)
1. [クライアント URL を確認する](#クライアント-url-を確認する)


## SAML クライアントにロールを追加する

クライアントから「AWS のロール（切り替え専用ロール）」へのアクセスと権限を与えるロールを追加します。
<!--
クライアントで許可する操作、ここでは「AWS のロール（切り替え専用ロール）」をロールとして追加します。
-->

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Clients」を選択し、一覧から対象クライアント `urn:amazon:webservices` の詳細を開く
1. Roles タブを開き、「Create role」ボタンをクリックする
1. Clients > Client details > Create role ページ
   1. Role name: `IAMロールのARN,IDプロバイダのARN` （[ID プロバイダとロールの ARN を取得する](./part2_aws.md#id-プロバイダとロールの-arn-を取得する) で控えた ARN をカンマ区切りで入力）
   例：`arn:aws:iam::123456789012:role/AG_SwitchOnlyRole,arn:aws:iam::123456789012:saml-provider/AGIDP`
   1. Description: `AWS switch only role` （任意の値）
   1. 「Save」をクリックする


## SAML クライアントにマッパーを追加する

SAML アサーションに AWS が求める情報を付与するためのマッパーを設定します。

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Clients」を選択し、一覧から対象クライアント `urn:amazon:webservices` の詳細を開く
1. Client Scopes タブを開く
   1. 一覧の「role_list」を Remove
   1. 一覧の「urn:amazon:webservices-dedicated」をクリックし詳細を開く
   1. Clients > Client details > Dedicated scopes > urn:amazon:webservices-dedicated ページ
      1. Scope タブ を開き、Full Scope Allowed を ON から OFF に変更する
      1. Mappers タブを開き、デフォルトで入っている Name を全件削除、または最低限のもの（<!--`https://aws.amazon.com/SAML/Attributes/RoleSessionName` と--> `https://aws.amazon.com/SAML/Attributes/Role`）を削除する
      1. Mappers タブで、「Configure a new mapper」または「Add mapper - By configure」ボタンをクリックする
      1. 「Configure a new mapper」ダイアログでマッパータイプを選択し、後述のマッパーを追加または修正する
      1. 「Save」をクリックする

---
#### Session Role（マッパータイプ: Role list、必須）
- Mapper Type: `Role list`
- Name: `https://aws.amazon.com/SAML/Attributes/Role`（任意の値）
- Role attribute name: `https://aws.amazon.com/SAML/Attributes/Role`
- Friendly Name: `RoleEntitlement`
- SAML Attribute Name Format: `Basic`
- Single Role Attribute: `ON`

#### Session Name（マッパータイプ: User Attribute、必須）
- Mapper Type: `User Attribute`
- Name: `https://aws.amazon.com/SAML/Attributes/RoleSessionName`（任意の値）
- User Attribute: `username`
- Friendly Name: `RoleSessionName`
- SAML Attribute Name: `https://aws.amazon.com/SAML/Attributes/RoleSessionName`
- SAML Attribute Name Format: `Basic`
- Aggregate attribute values: `Off`

#### PrincipalTag:AdminGateTeam（マッパータイプ: User Attribute、必須）
- Mapper Type: `User Attribute`
- Name: `https://aws.amazon.com/SAML/Attributes/PrincipalTag:AdminGateTeam`（任意の値）
- User Attribute: `team`
- Friendly Name: `TeamAttribute`
- SAML Attribute Name: `https://aws.amazon.com/SAML/Attributes/PrincipalTag:AdminGateTeam`
- SAML Attribute Name Format: `Basic`
- Aggregate attribute values: `Off`

#### Session Duration（マッパータイプ: Hardcoded attribute、オプション）
- Mapper Type: `Hardcoded attribute`
- Name: `https://aws.amazon.com/SAML/Attributes/SessionDuration`（任意の値）
- Friendly Name: `RoleSessionDuration`
- SAML Attribute Name: `https://aws.amazon.com/SAML/Attributes/SessionDuration`
- SAML Attribute Name Format: `Basic`
- Attribute value: `28800` (任意の値)
---


:::note
AWS が求める SAML アサーションについては、AWS の公式ドキュメントをご覧ください。

[AWS 公式ドキュメント - 認証レスポンス用の SAML アサーションを設定する](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_providers_create_saml_assertions.html)
:::


## SAML クライアントの 「POST バインディング URL」および「リダイレクト URI」を再設定する

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Clients」を選択し、一覧から対象クライアント `urn:amazon:webservices` の詳細を開く
1. Advanced タブを開く
   1. Fine Grain SAML Endpoint Configuration - Assertion Consumer Service POST Binding URL: `https://signin.aws.amazon.com/saml/acs/SAMLSP（省略）`（非リージョン）
   1. 「Save」をクリックする
1. Settings タブを開く
   1. Access settings - Valid redirect URIs: `https://signin.aws.amazon.com/saml/acs/SAMLSP（省略）`（非リージョン、リージョンとも）
   1. 「Save」をクリックする

:::note
それぞれ [ID プロバイダとロールの ARN を取得する](part2_aws.md#id-プロバイダとロールの-arn-を取得する)で控えた「サインインのエンドポイント URL」で再設定します。
:::
<!--
12.2.4. IDP でのログイン
https://docs.redhat.com/ja/documentation/red_hat_build_of_keycloak/22.0/html/server_administration_guide/client-saml-configuration#idp_initiated_login
-->

## ユーザにロールを割り当てる

### レルムロールを追加する

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Realm roles」をクリックする
1. 「Create role」ボタンをクリックする
1. Realm roles > Create role > Create role ページ
   1. Role name: `awsuser`（固定値）
   1. Description: `Role that permit access to AWS`（任意の値）
   1. 「Save」をクリックする
1. Associated roles タブを開き、「Assign role」ボタンをクリックする
   1. 一覧から[SAML クライアントにロールを追加する](#saml-クライアントにロールを追加する)で作成した `urn:amazon:webservices` のクライアントロールを選択する（「AWSの切り替え専用ロール」）
   1. 「Assign」をクリックする

:::note
レルムロール名 `awsuser` を変える場合は、prov-tools ロールの `files/playbooks/idpUser.yml` の `realm_role_access_aws` の属性値と合わせる必要があります。
:::


### ユーザにレルムロールを割り当てる

ユーザへのレルムロールの割り当ては、IDManager でユーザ登録した際のプロビジョニングで実行されます。そのため、ここでは設定の必要はありません。

:::tip
Manage - Users - 対象ユーザ - Role mapping でレルムロール `awsuser` が割り当てられていることが確認できます。
:::


## クライアント URL を確認する

ここまでの設定で、以下のURLでクライアントを参照できるようになります。

```
形式： https://<YOUR_KEYCLOAK_URL>/realms/<YOUR_REALM_NAME>/protocol/saml/clients/<YOUR_IDP-Initiated_SSO_URL_name>

例： https://idp.xxxx.xxx/realms/webgate/protocol/saml/clients/aws-saml
```

:::note
- `<YOUR_KEYCLOAK_URL>` および `<YOUR_REALM_NAME>` は、webgateレルム - Configure - Identity providers - User-defined - SAML v2.0 - SAML Settings - Service provider entity ID の値
- `<YOUR_IDP-Initiated_SSO_URL_name>` は、webgateレルム - Ｍanage - Clients - 該当クライアント（例： urn:amazon:webservices）- Settings タブ - Access settings - IDP-Initiated SSO URL name の値
:::

:::tip
SAML と IAM とのフェデレーションでエラーになった場合は、以下を参考にしてください。

[AWS 公式ドキュメント - トラブルシューティング](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/troubleshoot_saml.html)
:::