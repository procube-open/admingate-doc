---
sidebar_position: 20
---

# IDManager の再構築

AWS アクセス制御機能を利用するためには、IDManager のサービスを再構築する必要があります。

## AWS アカウントID の設定

`secrets.yml` の aws_account_id 属性値を、実行環境の AWSアカウントID（AWSアカウントを一意に識別する12桁の数値）に修正します。

## 環境変数の設定

IDManager で利用する環境変数は以下のとおりです。ここでは、AWS アクセス制御機能に必要な変更可能な変数のみ示します。

prov-tools ロールの `files/playbooks/vars/aws.yml` ファイルの環境変数の値を実行環境に合わせて修正します。

| 環境変数名             | デフォルト値              | 内容                                                                              |
| --------------------- | -------------------------| --------------------------------------------------------------------------------- |
| aws_region            | ap-northeast-1           | AWS サービスに接続するエンドポイントのリージョンコードです。リージョンコード一覧は[こちら](https://docs.aws.amazon.com/ja_jp/general/latest/gr/rande.html#regional-endpoints)をご覧ください。 |
| aws_iam_role_prefix   | AGM_                     | AWS のロール名に付加するプレフィックス文字です。申請したワークフローが承認されると、作業申請の作業ID にこの値が付加されたロール名で AWS IAM のロールに登録されます。 |
| aws_role_switchonly   | AG_SwitchOnlyRole        | フェデレーティッドアイデンティティに結びつける切り替え専用ロールのロール名です。「AWS IAMコンソールでの設定」の章で作成する[切り替え専用ロール](aws.md#切り替え専用ロールの作成)で作成するロール名を指定します。 |
| aws_role_registration | AG_TemporarySecurityRole | 申請したワークフローが承認されると AWS IAM に作業ロールをプロビジョニングします。その作業ロールを登録する権限を持つロール登録専用のロール名です。これは「AWS IAMコンソールでの設定」の章で作成する[作業ロール登録用ロール](aws.md#作業ロール登録用ロールの作成)で作成するロール名を指定します。 |
| aws_saml_idp          | AGIDP                    | SAML ID プロバイダ のプロバイダ名です。「AWS IAMコンソールでの設定」の章で作成する[ID プロバイダ](aws.md#saml-id-プロバイダの作成)で作成するプロバイダ名を指定します。|


## roles の設定

IDManager で利用する roles について説明します。

設定する roles は以下のとおりです。

| role 名 | 実施タイミング | 内容 |
| --- | --- | --- |
| prov-tools | build-images | ID管理、およびワークフロー申請にともなうプロビジョニング実行処理をインストールします。 |


## イメージの作成およびデプロイ

```
hive deploy-services -l idm -D
hive build-images -l idm
hive deploy-services -l idm
```
