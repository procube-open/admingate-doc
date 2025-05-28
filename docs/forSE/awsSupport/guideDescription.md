---
sidebar_position: 60
---

# 説明の記述ガイドライン

AdminGate では、ワークフローの申請で使用するIAMポリシーの説明を、ガイドラインに沿った形式で記述することを推奨しています。
ここでは、説明の記述ガイドライン（サンプル）を示します。

使用できる文字は、英数字と「+=,.@-_」の文字、半角スペースから成り、最大長1000文字です。

:::note
IDManager 申請作業のIAMポリシー選択画面には、ポリシー名に加え説明が表示され、説明の列でソートも可能です。
しかしながら、AWS IAMのポリシー設定の説明文では日本語が使用できません。そのため、ポリシーの選択が容易になるように、説明の記述ガイドラインを決めておくことをお勧めします。
:::

## ガイドライン（サンプル）

<!-- 
TODO: どの案にするか要検討。実際にはポリシーをどの単位で作成するのか分からないため、提示案を決めかねている

１つのIAMポリシーに、複数サービス、複数アクセスレベルを混在して指定できる。
複数混在する場合に、案２や案３のように全て羅列させると、説明文としては読みづらくなる。
案１はソートしてもターゲットとアクセスタイプが逆の方がよいかもしれない。
-->


### 形式
（提示案１）
```
アクセスタイプ__ターゲット__自由記述
```

（提示案２）
```
サービス__アクセスレベル__自由記述
```

（提示案３）
```
アクション__自由記述
```

（提示案４）
```
機能__権限__自由記述
```
※区切りは__（アンダーバー2つ）


### アクセスタイプ<!--（案１用）-->
ポリシーでアクセス可能なタイプ値をC/R/U/Dの順で複数記述します。 

| 値 | 内容 |
| --- | ---|
| C | 新規作成可能 | 
| R | 閲覧可能 | 
| U | 更新可能 | 
| D | 削除可能 | 

### ターゲット<!--（案１用）-->
ポリシーでアクセスを許可するターゲットを記述します。プロジェクト内で一意に決めた任意の値です。（例：ユーザ情報はUserInfomation、ロールは RoleInfo など）


### サービス<!--（案２用）-->
IAM コンソールでポリシーを作成したときに選択したAWS サービスを記述します。（例： IAM, EC2, S3, Lambda など）


### アクセスレベル<!--（案２用）-->
IAM コンソールでポリシーを作成したときに選択したアクセスレベルを,(カンマ)区切りで記述します。（例： CreateUser, GetUser など）


### アクション<!--（案３用）-->
IAM コンソールでポリシーを作成したときのアクション,(カンマ)区切りで記述します。（例： iam.CreateUser, iam.GetUser, s3.GetAccessPoint など）

:::note
アクションは、サービスとアクセスレベルを:（コロン）区切りにしたものですが、説明文にコロンが使用できないため、ピリオド区切りにします。

IAMアクション： iam:CreateUser, iam:GetUser, s3:GetAccessPoint  
説明文内： iam.CreateUser, iam.GetUser, s3.GetAccessPoint
:::

### 機能<!--（案４用）-->
機能名を記述します。プロジェクト内で一意に決めた任意の値です。（例：ユーザ管理はUser、IAMポリシー管理 Policy など）


### 権限<!--（案４用）-->
機能を操作できる権限名を記述します。プロジェクト内で一意に決めた任意の値です。（例：全権管理者 IDM_ADMIN, 一般ユーザ IDM_User など）


### 自由記述
ポリシーに対する説明を自由に記述します。


## 記述例（提示案１）
```
CRUD__UserInfomation__Full access for Administrator
```
```
R__UserInfomation__Can only read IAM user information
```

## 記述例（提示案２）
```
IAM__CreateUser,GetUser,UpdateUser,DeleteUser__Full access for Administrator
```
```
IAM__GetUser__Can only read IAM user information
```

## 記述例（提示案３）
```
iam.CreateUser,iam.GetUser,iam.UpdateUser,iam.DeleteUser__Full access for Administrator
```
```
iam.GetUser__Can only read IAM user information
```

## 記述例（提示案４）
```
User__IDM_ADMIN__Full access for Administrator
```
```
User__IDM_User__Can only read IAM user information
```
```
Role__IDM_ADMIN__Set IAM Policies
```