---
sidebar_position: 10
---

# パート１: Keycloak での設定(1)

Keycloak のコンソール画面を開き、クライアントの設定を行ないます。

設定手順は以下のとおりです。

1. [AWS の SAML 用メタデータを取得する](#aws-の-saml-用メタデータを取得する)
1. [SAML クライアントを作成する](#saml-クライアントを作成する)
1. [Keycloak のメタデータXMLをダウンロードする](#keycloak-のメタデータxmlをダウンロードする)


## AWS の SAML 用メタデータを取得する

Keycloak での設定の前に、Amazon AWS から SAML用メタデータ https://<font color="red">_region-code_</font>.signin.aws.amazon.com/static/saml-metadata.xml または `https://signin.aws.amazon.com/static/saml-metadata.xml` を取得してローカルに保存しておきます。

<!--
（TODO: 暗号化が必要な場合は未検証）

SAML 暗号化が必要な場合は、https://<font color="red">_region-code_</font>.signin.aws.amazon.com/static/saml/<font color="red">_SAMLSP4SHN3UIS2D558H46_</font>/saml-metadata.xml を使用します。
-->

:::tip
<font color="red"><i>region-code</i></font> 値については、

[AWS 公式ドキュメント - AWS サインインエンドポイントとクォータ](https://docs.aws.amazon.com/ja_jp/general/latest/gr/signin-service.html) の [リージョン] 列を参照してください。
:::


## SAML クライアントを作成する

Keycloak Administration Console にサインインしてコンソール画面を開き、AWS を Service Provider (SP) とする SAML クライアント (AWS用) を追加します。

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Clients」を選択する
1. 「Import client」ボタンをクリックする
1. Clients > Import client ページ
   1. Resource file の Browse を選択し、前述 [AWS の SAML 用メタデータを取得する](#aws-の-saml-用メタデータを取得する) で保存した saml-metadata.xml ファイルをインポートする
   1. インポートが完了すると、saml-metadata.xml の情報に基づいて、Client ID などクライアント設定のほとんどのフィールドが自動的に入力される
   1. 「Save」をクリックする
1. 追加したクライアント「urn:amazon:webservices」の詳細で Settings タブをクリックする
1. Clients > Client details > urn:amazon:webservices > Settings ページ
   1. 必要に応じてフィールド値を設定する。入力必須のフィールドは「IDP-Initiated SSO URL name」のみ。以下は入力例
      - General settings
         - Client ID: `urn:amazon:webservices`（インポートで設定済み）
         - Name: `AWS-SAML-SSO`（任意のわかりやすい名前）
         - Description: `SAML client for AWS`（任意の説明）
      - Access settings
         - IDP-Initiated SSO URL name: `aws-saml`　（IDP Initiated ログインの初期ポイントとして公開される名前に設定される）
         - IDP Initiated SSO Relay State: `リダイレクト先URL`　（任意）
      - SAML capabilities
         - Name ID format: `email`<!--email または username を選択（ユーザーの識別子として何を使うかによって変わる）-->
         - Force Name ID Format: `ON` （選択したName ID形式を強制する）
         - Force POST binding: `ON` （AWS は POST リクエストのため）
      - Signature and Encryption
         - Sign documents: `ON` （SAMLアサーションの署名に必要）
         - Sign assertions: `ON` （SAMLアサーションそのものに署名する場合に推奨）
         - Signature algorithm: `RSA_SHA256`
   1. 「Save」をクリックする


:::tip
クライアントは `IDP-Initiated SSO URL name` に指定した値を含む URL で参照できるようになります。

形式： https://<YOUR_KEYCLOAK_URL>/realms/<YOUR_REALM_NAME>/protocol/saml/clients/<YOUR_IDP-Initiated_SSO_URL_name>

例： https://idp.xxxx.xxx/realms/webgate/protocol/saml/clients/aws-saml
:::

:::tip
IdPでの認証が成功した後、直接AWSマネジメントコンソールのトップページにリダイレクトされます。
特定のサービスページにリダイレクトさせたい場合は、`IDP Initiated SSO Relay State` に URL を指定してください。
:::


## Keycloak のメタデータXMLをダウンロードする

AWS 側で Keycloak を SAML IdP として認識させるために必要となる Keycloak のメタデータ XML ファイルをダウンロードします。

1. 前項で追加したクライアント「urn:amazon:webservices」の詳細を開く
1. Clients > Client details > urn:amazon:webservices ページ
   1. Actions をクリックし、「Download adaptor configs」 を選択する
   1. Format Option: 「Mod Auth Mellon files」(mod-auth-mellon) を選択する
   1. 「Download」をクリックする
1. ダウンロードファイルを展開したうちのメタデータ XML ファイル（例: urn_amazon_webservices/idp-metadata.xml）を保存しておく

:::note
要件に応じて、SAML暗号化キーの設定を行ってください。Keys タブ - Encryption keys config
:::
