---
sidebar_position: 70
---

# 制限
AWSアクセス制御機能の制限事項です。



## AWS IAM コンソール
---------
### ポリシー
AdminGateワークフローの作業申請に使用するポリシーは、以下の範囲で作成すること
- ポリシー名は、英数字と「=.@-_」で最大長 128
- ポリシーの説明は、英数字と「+=,.@-_」の文字、半角スペースのみで	最大長 1000



## 作業申請
---------
### 作業期間
- IAMポリシーを指定した場合、作業期間は1つのみ指定できる
- IAMポリシーを指定した場合、時間指定が設定されても無視され、常に00:00:00～23:59:59となる

### IAMポリシー
- IAMポリシーの選択一覧は、IAMポリシー管理に登録されているポリシーのうち、ログインユーザが所属するチームで参照可能なポリシーのみ表示される。そのため、申請者と承認者の所属チームが異なる場合、範囲外値として表示されることがある
- １つの申請で指定できるポリシーの最大数は10

### 作業者（単体選択）／作業者（チーム選択）
- 指定できる作業者数に制限がある

:::note
ロールの信頼ポリシーの長さには制限がある「2048文字（最大4096文字：引き上げ可能）」ため、指定できる作業者数に制限がある
:::



## 作業申請の承認（プロビジョニングタスクの失敗）
---------
作業申請の承認を実行した際に、プロビジョニングタスクで以下のエラーが発生することがあります。IDManager の ***プロビジョニング管理 > プロビジョニングタスク閲覧 *** で該当するタスクのログを確認し、対応してください。

### (1) 作業申請で指定した IAM ポリシーが AWS IAM ポリシーに存在しないとき
#### エラー：
```
コード	8214
レベル	ERROR
メッセージ	対象 'XXXXX' にタスク Creates a role and attaches policies. を実行しましたが失敗しました: Failed to attach policies. The registered role has been deleted (rolled back). Exception detail: An error occurred (NoSuchEntity) when calling the AttachRolePolicy operation: Policy ****** does not exist or is not attachable.
```
#### 対応１（AWS IAM ポリシー の作成・修正もれの場合）：
- AWS IAM コンソールで、IAM ポリシーを作成する
- プロビジョニングタスクを「再試行」する
#### 対応２（IDManager IAM ポリシー管理の修正もれの場合）：
- プロビジョニングタスクを「無視」する
- IAMポリシー管理で、AWS IAM ポリシーと一致するようにメンテナンスする
- 承認済み作業画面でエラーとなった作業申請の詳細画面を開き、「コピーして新規作成」し、メンテナンス後の正しい IAM ポリシーを指定した新しい作業申請を作成する
- 承認済み作業画面でエラーとなった作業申請の詳細画面を開き、「無効化」する（承認済み画面から消える）
- 「無効化」に対するプロビジョニングタスクは失敗することがある（最初のエラーでロールが作成できていないため、無効化の処理でロールが見つからない NoSuchEntity となる）。その場合はプロビジョニングタスクを「無視」する
- 上記で新しく作成した作業申請の申請・承認をやり直す


### (2) 作業者（単体選択）／作業者（チーム選択）が多いとき
#### エラー：
```
コード	8214
レベル	ERROR
メッセージ	対象 'XXXXX' にタスク Creates a role and attaches policies. を実行しましたが失敗しました: Failed to create a role. ClientError detail: An error occurred (LimitExceeded) when calling the CreateRole operation: Cannot exceed quota for ACLSizePerRole: 2048
```
#### 対応：
- プロビジョニングタスクを「無視」する
- 承認済み作業画面でエラーとなった作業申請の詳細画面を開き、「コピーして新規作成」し、作業者（単体選択）／作業者（チーム選択）を減らした新しい作業申請を作成する（作業申請を分割して作成する）
- 承認済み作業画面でエラーとなった作業申請の詳細画面を開き、「無効化」する（承認済み画面から消える）
- 「無効化」に対するプロビジョニングタスクは失敗することがある（最初のエラーでロールが作成できていないため、無効化の処理でロールが見つからない NoSuchEntity となる）。その場合はプロビジョニングタスクを「無視」する
- 上記で新しく作成した作業申請の申請・承認をやり直す


### (3) IAM ロールが既に存在するとき
#### エラー：
```
コード	8214
レベル	ERROR
メッセージ	対象 'XXXXX' にタスク Creates a role and attaches policies. を実行しましたが失敗しました: Failed to create a role. ClientError detail: An error occurred (EntityAlreadyExists) when calling the CreateRole operation: Role with name AGM_XXXXX already exists.
```
#### 対応：
- エラーメッセージをシステム管理者にご連絡ください

:::tip
- ロールの登録中にエラーが発生したためロールバックを行ったが、ネットワークエラー等でロールバックも失敗した後に、ロールが残ったままプロビジョニングタスクを「再試行」すると当現象が発生する可能性があります。ロールバックに失敗した場合は、プロビジョニングタスクにエラーが出力されていることがあります。``Failed to attach policies, and failed to rollback. [Caution] The role may remain. Exception detail(attachPolicy): {error}, Exception detail(rollback): {rollback_error}``
- AWS IAM コンソールで該当ロールを確認し、IDManager からの登録ロールか、その他での登録かでそのロールを削除するか保持するかを判断してください。
- 必要に応じて、新しい作業申請で再度申請しなおしてください。
- IDManager から登録するロール名は、「[環境変数の設定 - aws_iam_role_prefix](hive.md#環境変数の設定)」 で設定したプレフィックス文字を付加したロール名にし、他のロール名と重なりづらくしています。プレフィックス文字が妥当かもご確認ください。
:::

### (4) ネットワークエラーなどで再試行の上限を超えてもエラーが解決しなかったとき
#### エラー（例）：
```
Failed to create a role. Exception detail: Could not connect to the endpoint URL: \"https://iam.amazonaws.com/\"
```
#### 対応：
- プロビジョニングタスクを「再試行」する
