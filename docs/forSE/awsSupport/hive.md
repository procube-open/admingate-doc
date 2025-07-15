---
sidebar_position: 30
---

# IDManager の再構築

AWS アクセス制御機能を利用するためには、IDManager のサービスを再構築する必要があります。

## AWS アカウントID の設定

`secrets.yml` の aws_account_id 属性値を、実行環境の AWSアカウントID（AWSアカウントを一意に識別する12桁の数値）に修正します。

## AWS IAM ユーザのアクセスキーIDおよびシークレットアクセスキーの設定

「SAML 連携の設定 > パート２: AWS IAM コンソールでの設定」の章の[ユーザーを作成する](./setupSaml/part2_aws.md#ユーザーを作成する) で保存した作業ロール登録用ユーザのアクセスキーおよびシークレットアクセスキーを設定します。

`secrets.yml` の aws_access_key_id 属性値にアクセスキーID、aws_secret_access_key 属性値にシークレットアクセスキーを指定してください。

## 環境変数の設定

prov-tools ロールで利用する環境変数は以下のとおりです。ここでは、AWS アクセス制御機能に必要な変更可能な変数のみ示します。

`inventory/group_vars/all.yml` ファイルの環境変数の値を実行環境に合わせて修正します。

| 環境変数名             | デフォルト値              | 内容                                                                              |
| --------------------- | -------------------------| --------------------------------------------------------------------------------- |
| aws_role_switchonly   | AG_SwitchOnlyRole        | フェデレーティッドアイデンティティに結びつける切り替え専用ロールのロール名です。「SAML 連携の設定 > パート２: AWS IAM コンソールでの設定」の章で作成する[切り替え専用ロール](./setupSaml/part2_aws.md#切り替え専用ロールを作成する)で作成するロール名を指定します。 |
| aws_iam_role_prefix   | AGM_                     | AWS のロール名に付加するプレフィックス文字です。申請したワークフローが承認されると、作業申請の作業ID にこの値が付加されたロール名で AWS IAM のロールに登録されます。指定する値はロール名の規則に従っていなければなりません。 |
| aws_iam_role_resourcetag_key            | ManagedBy         | ロールに付与するタグのキー名を指定します。 |
| aws_iam_role_resourcetag_value          | AdminGate         | ロールに付与するタグの値を指定します。aws_iam_role_resourcetag_key で指定したキーに対応する値です。 |
| aws_iam_role_resourcetag_value_disabled | AdminGateDisabled | 無効化するロールに付与するタグの値を指定します。aws_iam_role_resourcetag_key で指定したキーに対応する値です。（注意）aws_iam_role_resourcetag_value と同じ値を指定しないでください。 |
| aws_region            | ap-northeast-1           | AWS サービスに接続するエンドポイントのリージョンコードです。リージョンコード一覧は[こちら](https://docs.aws.amazon.com/ja_jp/general/latest/gr/rande.html#regional-endpoints)をご覧ください。 |
| boto3_retry_mode   | legacy                   | AWS SDK for Python(Boto3)による再試行モードを指定します。[値](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/retries.html#configuring-a-retry-mode)は、legacy (default), standard, and adaptive |
| boto3_max_attempts   | 5                   | AWS SDK for Python(Boto3)による最大試行回数を指定します。 |

例：
```
#
# AdminGate で AWS コンソールへのアクセス制御に用いる
#
# AWS 切り替え専用ロール名
aws_role_switchonly: AG_SwitchOnlyRole   # TODO: Change to your SwitchOnlyRole
# AWS 作業ロール名のプレフィックス（ロール名は [aws_iam_role_prefix]+作業申請の業務ID となる）
aws_iam_role_prefix: AGM_                # TODO: Change to the prefix for working roles 
aws_iam_role_resourcetag_key: ManagedBy
aws_iam_role_resourcetag_value: AdminGate
aws_iam_role_resourcetag_value_disabled: AdminGateDisabled # （注意）aws_iam_role_resourcetag_value と同じであってはならない

# AWS SDK for Python (boto3) で用いるパラメータ群
# AWS リージョン
aws_region: ap-northeast-1
# リトライ処理モードおよび最大試行回数
boto3_max_attempts: 5
boto3_retry_mode: standard
```

:::note
AWSのロール名やタグのキー名・値は、AWS の規則に従っていなければなりません。
詳細については、AWS の公式ドキュメントをご覧ください。[IAM と AWS STSクォータ](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/reference_iam-quotas.html)
:::

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
