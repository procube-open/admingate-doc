---
sidebar_position: 30
---

# IDManagerでの設定

ワークフロー申請に必要なIAMポリシーの管理、およびワークフローの申請・承認を行ないます。


## IAMポリシー管理

全権管理者の権限を持つユーザで IDManager にログインし、 **ID管理 > IAM ポリシー管理** を開きます。 

![IDMPolicy](/img/IDMUI_IAMPolicy.png)

### IAMポリシーを登録する

IAMポリシー編集ガジェットの **追加** ボタンで新規登録画面を開き、以下の項目を入力して保存し、プロビジョニングを発効します。

![IDMPolicyNew](/img/IDMUI_IAMPolicy_detail.png)

|登録項目 | 内容| 
| --- | ---|
| ポリシー名 | IAMポリシー名。AWS IAM に登録したポリシー名と一致していなければならない。英数字と「=.@-_」の文字から成り、最大128文字とする |
| 説明 | AWS IAM に登録したポリシーの説明。英数字と「+=,.@-_」の文字、半角スペースから成り、最大長1000文字とする。[説明の記述ガイドライン（サンプル）](/docs/forSE/awsSupport/guideDescription)|

:::note
申請作業のIAMポリシー選択画面には、ポリシー名に加え説明が表示され、説明の列でソートも可能です。
しかしながら、AWS IAMのポリシー設定の説明文では日本語が使用できません。そのため、ポリシーの選択が容易になるように、説明の記述ガイドラインを決めておくことをお勧めします。
:::


### IAMポリシーをCSVファイルで一括登録する

以下の項目を持つCSVファイルを作成します。次に、IAMポリシー編集ガジェットの **CSVアップロード** ボタンで開いたアップロード画面でファイルを選択してアップロードします。その後、プロビジョニングを発効することで、IAMポリシーを一括で登録することが可能です。

なお、１列目の値を変更することで更新や削除も一括でできます。

|ヘッダ | 内容| 
| --- | ---|
| (空) | 「Create 」（新規作成）、「Update 」（更新）または「Delete 」（削除）を入力|
| name | IAMポリシー名。AWS IAM に登録したポリシー名と一致していなければならない。英数字と「=.@-_」の文字から成り、最大128文字とする |
| description | AWS IAM に登録したポリシーの説明。英数字と「+=,.@-_」の文字、半角スペースから成り、最大長1000文字とする。[説明の記述ガイドライン（サンプル）](/docs/forSE/awsSupport/guideDescription)|


#### CSVファイルの例：
```
,"name","description"
"Create","iam_policy001","CRUD__UserInfomation__Full access for Administrator"
"Create","iam_policy002","R__UserInfomation__Can only read IAM user information"
```


## ワークフローの申請を行なう

AWSコンソールへのアクセスを制御するワークフロー申請を行なう場合は、作業申請でIAMポリシーの項目を選択して登録する必要があります。

ワークフローの申請権限を持つユーザでログインし、申請作業を行ってください。

1. ***ワークフロー > 作業申請 > 新規作成*** で作業申請ガジェット（新規）を開く
![IDMUI](/img/IDMUI.png)

1. IAMポリシー項目の ***選択*** ボタンでポリシー選択画面を開く  
![IDMPolicyNew](/img/IDMUI_workflow_policy.png)

1. 申請で許可するポリシーをチェックボックスで選択し（最大10）、 ***決定*** ボタンで確定する  
![IDMPolicySelect](/img/IDMUI_workflow_selectPolicy.png)

1. 作業申請ガジェット（新規）で、その他の必要項目を入力して *** 保存 *** する。その他の項目や操作については、[申請と承認](/docs/forUser/work/workflow)を参照

