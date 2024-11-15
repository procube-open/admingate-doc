---
sidebar_position: 10
---

# 概要

Admin Gate 単体での利用の場合、接続先やワークフローを登録する機能はなく、これらを実施する場合は外部からAPIを呼ぶ必要があります。

## トークン取得API

APIを呼ぶためには、先にトークンを取得して、`Guacamole-Token` というヘッダに記載する必要があります。

トークン取得のAPIは以下の通りです。

<!-- omit in toc -->
### POST /api/tokens

#### ヘッダー

なし

#### パスパラメーター

なし

#### クエリパラメーター

なし

#### リクエストボディ

ボディには `x-www-form-urlencoded` が必要です。

- username (string, required) - ユーザー名
- password (string, required) - ユーザーのパスワード

#### リクエスト例

```
username: guacadmin
password: guacadmin
```

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

JSONオブジェクトで返します。

- authToken (string) - Auth token.
- username (string) - Username.
- dataSource (string) - Datasource.
- availableDatasources (array) - List of available data sources.

#### レスポンス例

```json
{
  "authToken": "0BDA2CED0580DEB052C34B596AB401993BFD66551FADEF06FC7144F1D6318EE8",
  "username": "guacadmin",
  "dataSource": "postgresql",
  "availableDataSources": ["postgresql", "postgresql-shared"]
}
```

## トークン削除

トークン削除のAPIは以下のとおりです。

<!-- omit in toc -->
### DELETE /api/tokens/{{token}}

#### ヘッダー

なし

#### パスパラメーター

- token (string, required) - 削除したいトークン

#### クエリパラメーター

なし

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 204 - No Content

#### レスポンスボディ

このリクエストにはレスポンスボディはありません。
