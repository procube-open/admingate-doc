---
sidebar_position: 30
---

# Keycloak での設定

Keycloak Administration Console にサインインしてコンソール画面を開き、SAML クライアントの作成、およびメタデータ XML のダウンロードを行ないます。

## SAML クライアントの作成

AWS を SAML 連携の Service Provider (SP) として設定するための Client を追加します。
<!--AWSをSAML連携のサービスプロバイダーとしてKeycloakに登録します。-->

1. 対象のレルム「Admin Gate - Webgate」を選択する
1. ナビゲーションペインで「Manage」-「Clients」を選択する
1. 「Create clinet」をクリックする
1. 1:General settings
   1. Client type: 「SAML」
   1. Client ID: 「urn:amazon:webservices」 （AWSの標準的なSAMLエンティティID）
   1. Name: 任意のわかりやすい名前（例: AWS-SAML-SSO）
   1. Description: 任意の説明（例: SAML client for AWS）
   1. 「Next」をクリックする
1. 2:Login settings
   1. Valid redirect URIs: https://signin.aws.amazon.com/saml <font color="red">TODO:リージョン付き？</font><!-- TODO: ログイン成功後にブラウザがリダイレクトするURI -->
   1. <font color="red">TODO:その他 URL 等は未決定</font>
   1. 「Save」をクリックする

登録した Client の詳細を開き、各オプションを設定します。なお、特に明記がないものはデフォルトとしますが、動作環境に合わせて変更してください。

1. Settings タブをクリックする
   1. SAML capabilities
      1. Name ID format: 「email」<!--email または username を選択します。（ユーザーの識別子として何を使うかによって変わります）-->
      1. Force Name ID Format: 「ON」 （選択したName ID形式を強制する）
      1. Force POST Binding: 「OFF」 （通常はSAML応答をPOSTで送信するため）
   1. Signature and Encryption
      1. Sign documents: 「ON」 （SAMLアサーションの署名に必要）
      1. Sign assertions: 「ON」 （SAMLアサーションそのものに署名する場合に推奨）
      1. Signature algorithm: 「RSA_SHA256」
   1. 「Save」をクリックする


## メタデータ XML のダウンロード

AWS 側で Keycloak を SAML IdP として認識させるために必要となる Keycloak のメタデータ XML ファイルをダウンロードします。

1. 前項で登録した Client 「urn:amazon:webservices」の詳細を開く
1. Keys タブをクリックする
   1. Actions をクリックし、「Download adaptor configs」 を選択する
   1. Format Option: 「Mod Auth Mellon files」(mod-auth-mellon) を選択する
   1. 「Download」をクリックする
1. ダウンロードファイルを展開したうちのメタデータ XML ファイル（例: idp-metadata.xml）を保存しておく

:::note
要件に応じて、SAML暗号化キーの設定を行ってください。Keys タブ - Encryption keys config
:::

