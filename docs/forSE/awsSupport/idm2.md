---
sidebar_position: 50
---

# IDManager での設定

ワークフロー申請に必要なIAMポリシーの管理、およびワークフローの申請・承認を行ないます。


## IAMポリシー管理

全権管理者、または管理者の権限を持つユーザで IDManager にログインし、 **ID管理 > IAM ポリシー管理** を開きます。 

![IDMPolicy](/img/IDMUI_IAMPolicy.png)

### IAMポリシーを登録する

IAMポリシー編集ガジェットの **追加** ボタンで新規登録画面を開き、以下の項目を入力して保存し、プロビジョニングを発効します。

![IDMPolicyNew](/img/IDMUI_IAMPolicy_detail.png)

|登録項目 | 内容| 
| --- | ---|
| ポリシー名 | IAMポリシー名。AWS IAM に登録したポリシー名と一致していなければならない。英数字と「=.@-_」の文字から成り、最大128文字とする |
| 説明 | AWS IAM に登録したポリシーの説明。英数字と「+=,.@-_」の文字、半角スペースから成り、最大長1000文字とする。[説明の記述ガイドライン（サンプル）](/docs/forSE/awsSupport/guideDescription)|
| 参照可能チーム | 参照可能なチームのリスト。このリストにあるチームに所属するユーザのみ、作業申請時に IAM ポリシーを参照することができる |

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
| viewTeam | 参照可能なチームのリスト |


#### CSVファイルの例：
```
,"name","description","viewTeam"
"Create","iam_policy001","CRUD__UserInfomation__Full access for Administrator","[""hyperAdmin""]"
"Create","iam_policy002","R__UserInfomation__Can only read IAM user information","[""hyperAdmin"",""TeamA""]"
```

## IAM ロール切り替えリンクの通知設定を行う

ワークフロー申請の承認が完了すると、承認された IAM ロールに切り替えるための情報を利用者に提供する必要があります。

ここでは、IDManager の自動更新バッチの設定を行うことで、IAM ロールに切り替えるためのリンクを利用者にメールで通知する方法を示します。

### 自動更新バッチの設定

1. ***システム設定 > 自動更新バッチ編集*** メニューで自動更新バッチ編集画面を開く
1. 「追加」ボタンを押して新規登録画面を開き、自動更新バッチを作成する

   ここでは例として自動更新バッチ「sendApproveCompletionMail」を作成する。表に記載していない項目の値はデフォルト、または実行環境に合わせることを意味する
   
  | 属性名            | 値             |
  | ---              | ---            |
  | 名前              | sendApproveCompletionMail |
  | 表示名            | 承認完了メール送信 |
  | 説明文            | 作業申請の承認完了のお知らせ用のメール送信自動更新バッチ |
  | インタフェース名   | メール未送信承認完了IF　(approvalCompletionMailIF)  |
  | メールサーバ       | SMTP_test_server |
  | SMTP認証ID        |  SMTP_test_id |
  | SMTP認証パスワード | SMTP_test_password |
  | メールTo          |  <%= applicationMailList  %> |
  | メールFrom        |  sample@sample.com |
  | メールタイトル     | 承認完了のお知らせ |
  | メール本文         | 申請していた作業「<%= name %>」が承認されました。 <br/>  <br/> <% if (iamPolicies && iamPolicies.length > 0) { %> <br/> AWSのスイッチロール用URLは以下のとおりです。 <br/> なお、color値のカラーコードは必要に応じて変更しても構いません。 <br/> <br/> https://signin.aws.amazon.com/switchrole?account=<YOUR\_ACCOUNT\_ID>&roleName=<YOUR\_ROLE\_PREFIX><%= id %>&displayName=<%= encodeURIComponent(name) %>&color=ea7158 <br/> <% } %> | |
  | メール集約フラグ   | false | |
  | 自動更新          | 属性名 : 計算式 <br/> approveCompletionDate : Date() | | 

1. 「インタフェース名」を設定する

   IDManager が提供するインタフェース「メール未送信承認完了IF」(approvalCompletionMailIF) を使用する。
   「メール未送信承認完了IF」でアクセスできる属性は以下のとおり。 これらの属性の値は、以降のメールの設定に埋め込むことができる。各属性の説明については、作業(work)クラスを参照のこと

   | 属性名 | 読み出しのみ |
   | ---   | ---         |
   | id | ○ |
   | name | ○ |
   | Periods | ○ |
   | iamPolicies | ○ |
   | applicationMailList  | ○ |
   | approveCompletionDate |  |

1. 「メールTo」を設定する

   メールの宛先を記述するテンプレートを指定する。テンプレート内では、 <%= 属性名 %> の形式が記述されるとインタフェースから取得されたオブジェクトの属性の値で置き換えらえる。 ここでは、インタフェース「メール未送信承認完了IF」の属性「申請者メールリスト(applicationMailList )」 を使用する

1. 「メール本文」を設定する

   ```
   申請していた作業「<%= name %>」が承認されました。
   
   <% if (iamPolicies && iamPolicies.length > 0) { %>
   AWSのスイッチロール用URLは以下のとおりです。
   なお、color値のカラーコードは必要に応じて変更しても構いません。
   
   https://signin.aws.amazon.com/switchrole?account=<YOUR_ACCOUNT_ID>&roleName=<YOUR_ROLE_PREFIX><%= id %>&displayName=<%= encodeURIComponent(name) %>&color=ea7158
   <% } %>
   ```
   :::note
   - URL account パラメータの値 `<YOUR_ACCOUNT_ID>` は個別の AWS アカウントIDに変更する。[こちら](hive.md#aws-アカウントid-の設定) で指定した値と同じ
   - URL roleName パラメータの値 `<YOUR_ROLE_PREFIX>` は AWS のロール名に付加するプレフィックス文字に変更する。[こちら](hive.md#環境変数の設定) の`aws_iam_role_prefix` で指定した値と同じ。値によっては、encodeURIComponent でエンコードが必要
   - if 文によって、IAMポリシー(iamPolicies) が指定された作業申請のときのみ AWS のスイッチロール用 URL を通知する
   :::

1. 「自動更新」の追加ボタンを押して、自動更新する属性を追加する

   承認完了日時 (approveCompletionDate) を追加する。この属性に実行日時が設定されることで、次回のメール送信自動更新バッチ処理ではメール送信対象から外れる

   | 属性名 | 計算式 |
   | ---   | ---         |
   | approveCompletionDate | Date() |

1. 「保存」ボタンを押す
1. プロビジョニング発効画面が表示されるので「発効」ボタンを押す
1. プロビジョニング発効確認で「OK」ボタンを押し、プロビジョニングを発効する


### クロックデーモンの設定

1. ***システム設定 > システム設定編集*** メニューでシステム設定編集画面を開く
1. システム設定編集画面で「更新」ボタンを押して更新画面を開き、属性の設定を行う
1. 「クロックデーモン」の追加ボタンを押して、属性を追加する。表に記載していない項目の値はデフォルトのままにすることを意味する
   ここでは例としてクロックデーモン「approveCompletionDaemon」を作成する

  | 属性名            | 値             |
  | ---              | ---            |
  | 名前 | approveCompletionDaemon |
  | 表示名 | 作業申請の承認完了メール送信 |
  | 説明文 | 作業申請の承認完了メール送信のクロックデーモン |
  | 起動周期タイプ | interval |
  | 起動間隔 | 60 |
  | 自動更新バッチ | 承認完了メール送信 (sendApproveCompletionMail) |

1. 「保存」ボタンを押します。
1. プロビジョニング発効確認画面で「発効」ボタンを押す
1. プロビジョニング発効確認で「OK」ボタンを押し、プロビジョニングを発効する


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

