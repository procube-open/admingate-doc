---
sidebar_position: 20
---

# AWS IAMコンソールでの設定

AWS Management Console にサインインして、IAM(Identity and Access Management) コンソールを開きます。 アクセス管理で切り替え専用ロール、作業ロール登録用ロール、およびIAMポリシーを作成します。

## 切り替え専用ロールの作成

AdminGateは、Access Managerで認証を行い、結果のSAML アサーションを AWS に送り、フェデレーティッドアイデンティティとしてログインします。
また、フェデレーティッドアイデンティティには「切り替え専用ロール」を結び付けておき、ロールの切り替え以外は何にもアクセスできない状態で始めるようにします。

ここでは、そのための「切り替え専用ロール」の作成を行ないます。

1. SAML プロバイダーを作成する
1. SAML 2.0 認証ユーザーが引き受けるロールのポリシーを準備する
1. SAML ベースのフェデレーション用のロールを作成する

詳細については、AWS の公式ドキュメントをご覧ください。

[AWS 公式ドキュメント - SAML 2.0 フェデレーション用のロールを作成する (コンソール)](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html)


### SAML プロバイダーを作成
***TODO: （未執筆）***

SAML プロバイダーの作成方法の詳細については、AWS の公式ドキュメントをご覧ください。

[AWS 公式ドキュメント - IAM で SAML ID プロバイダーを作成する](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_providers_create_saml.html)

### SAML 2.0 認証ユーザーが引き受けるロールのポリシーを準備

ロール信頼ポリシーの例：
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456789012:saml-provider/GoogleIDP"
            },
            "Action": "sts:AssumeRoleWithSAML",
            "Condition": {
                "StringEquals": {
                    "SAML:aud": [
                        "https://signin.aws.amazon.com/saml",
                        "https://ap-northeast-1.signin.aws.amazon.com/saml"
                    ]
                }
            }
        }
    ]
}
```
:::note
- PrincipalのARNは、IAMで作成したSAMLプロバイダー用の実際のARNに置き換える
- SAML:aud のリージョンコードは必要に応じて変更。また追加も可能
:::

### SAML ベースのフェデレーション用のロールを作成

IAMコンソールの *** アクセス管理 > ロール > ロールを作成 *** でロールを作成します。作成後の「許可」および「信頼関係」のポリシー内容（例）は以下のとおりです。

SAML 用のロールの作成の詳細については、AWS の公式ドキュメントをご覧ください。[AWS 公式ドキュメント - SAML 用のロールの作成](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html#idp_saml_Create)

***TODO: （未執筆）コンソールからの作成方法は色々あるため。単純な作成パターンを１例として挙げるか？ ***

#### 許可（例）
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::123456789012:role/*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/ManagedBy": "AdminGate"
                }
            }
        }
    ]
}
```
:::note
- ``aws:ResourceTag/ManagedBy`` の Coditionは必須
- ``123456789012`` は個別の AWS アカウントIDに変更
:::

#### 信頼関係（例）
[SAML 2.0 認証ユーザーが引き受けるロールのポリシーを準備](#saml-20-認証ユーザーが引き受けるロールのポリシーを準備) で準備したロール信頼ポリシー
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456789012:saml-provider/GoogleIDP"
            },
            "Action": "sts:AssumeRoleWithSAML",
            "Condition": {
                "StringEquals": {
                    "SAML:aud": [
                        "https://signin.aws.amazon.com/saml",
                        "https://ap-northeast-1.signin.aws.amazon.com/saml"
                    ]
                }
            }
        }
    ]
}
```
:::note
- PrincipalのARNは、IAMで作成したSAMLプロバイダー用の実際のARNに置き換える
- SAML:aud のリージョンコードは必要に応じて変更。また追加も可能
:::


## 作業ロール登録用ロールの作成

IDManager では作業申請が承認されると、IAM に作業ロールを登録します。そのため、ロールの登録を許可するポリシーを持つロールを準備する必要があります。

***TODO:未定***


## IAMポリシーの作成

申請作業で使用するIAMポリシーを作成します。

IAMコンソールの *** アクセス管理 > ポリシー > ポリシーの作成 *** でポリシーを作成します。ポリシーの作成方法の詳細については、AWS の公式ドキュメントをご覧ください。

[AWS 公式ドキュメント - IAM ポリシーを管理する](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/access_policies_manage.html)

[AWS 公式ドキュメント - IAM ポリシーを作成する (コンソール)](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/access_policies_create-console.html)

[AWS 公式ドキュメント - IAM ロールの作成](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_create.html)

:::note
申請作業で使用するIAMポリシー名には接頭語を付与するなど、AdminGateで使用しないポリシーと区別しやすくするとよいかもしれません。
:::