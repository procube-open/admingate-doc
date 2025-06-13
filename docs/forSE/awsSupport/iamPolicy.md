---
sidebar_position: 40
---

# IAM ポリシーの作成

ワークフローの申請作業で使用する IAM ポリシーを作成します。
ここでは、IAM コンソールからの作成の一例を示しますが、AWS CLI や AWS API から作成することも可能です。

1. AWS Management Console にサインインして、IAM(Identity and Access Management) コンソールを開く
1. IAM コンソールの *** アクセス管理 > ポリシー > ポリシーの作成 *** でポリシーを作成する

ポリシーの作成方法の詳細については、AWS の公式ドキュメントをご覧ください。

[AWS 公式ドキュメント - IAM ポリシーを管理する](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/access_policies_manage.html)

[AWS 公式ドキュメント - IAM ポリシーを作成する (コンソール)](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/access_policies_create-console.html)

:::note
ポリシー名および説明は IDManager でも管理します。そのため、使用できる文字や文字数に制限があります。制限については[こちら](restriction.md#ポリシー)を参照してください。
:::

:::tip
ワークフローの申請作業で使用する IAM ポリシー名には接頭語を付与するなど、AdminGate で使用しないポリシーと区別しやすくするとよいでしょう。
また、説明は「[説明の記述ガイドライン](guideDescription.md)」に沿った形式で記述することを推奨しています。
:::
