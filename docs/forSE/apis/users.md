---
sidebar_position: 20
---

# ユーザー関連API

ユーザーに関するAPIのリファレンスです。

## ユーザー一覧

ユーザーの一覧を取得するAPIです。

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/users

#### ヘッダー

なし

#### パスパラメーター

- data_source (string, required) - データソース

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

**@TODO**

---

## ユーザー詳細

特定ユーザーの詳細を取得するAPIです。

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/users/{{username}}

#### ヘッダー

なし

#### パスパラメーター

- data_source (string, required) - データソース
- username (string, required) - ユーザー名

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

**@TODO**

---

## 自身の詳細

自分自身の詳細を取得するAPIです。

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/self

#### ヘッダー

なし

#### パスパラメーター

- data_source (string, required) - データソース

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

**@TODO**

---

## ユーザー権限の詳細

ユーザーの権限の詳細を取得するAPIです。

<!-- omit in toc -->
### GET /api/session/data/{{data_source}}/users/{{username}}/permissions

#### ヘッダー

なし

#### パスパラメーター

- data_source (string, required) - データソース
- username (string, required) - ユーザー名

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

**@TODO**

---

## ユーザーパスワード更新

ユーザーのパスワードを更新するAPIです。

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/users/{{username}}/password

#### ヘッダー

- Content-Type (string, required) - application/json

#### パスパラメーター

- data_source (string, required) - データソース
- username (string, required) - ユーザー名

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

- oldPassword (string, required) - 古いパスワード
- newPassword (string, required) - 新しいパスワード

```json
{
  "oldPassword": "{{oldPassword}}",
  "newPassword": "{{newPassword}}"
}
```

### レスポンス

#### ステータスコード

- 204 - No Content

#### レスポンスボディ

このリクエストにはレスポンスボディはありません。

---

## ユーザー更新

ユーザー情報を更新するAPIです。

<!-- omit in toc -->
### PUT /api/session/data/{{data_source}}/users/{{username}}

#### ヘッダー

- Content-Type (string, required) - application/json

#### パスパラメーター

- data_source (string, required) - データソース
- username (string, required) - ユーザー名

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

**@TODO**

```json
{
  "username": "{{username}}",
  "attributes": {
    "guac-email-address": null,
    "guac-organizational-role": null,
    "guac-full-name": null,
    "expired": "",
    "timezone": null,
    "access-window-start": "",
    "guac-organization": null,
    "access-window-end": "",
    "disabled": "",
    "valid-until": "",
    "valid-from": ""
  }
}
```

### レスポンス

#### ステータスコード

- 204 - No Content

#### レスポンスボディ

このリクエストにはレスポンスボディはありません。

---

##　新規ユーザー作成

新規ユーザーを作成するAPIです。

<!-- omit in toc -->
### POST /api/session/data/{{data_source}}/users

#### ヘッダー

- Content-Type (string, required) - application/json

#### パスパラメーター

- data_source (string, required) - データソース

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

**@TODO**

```json
{
  "username": "test",
  "password": "pass",
  "attributes": {
    "disabled": "",
    "expired": "",
    "access-window-start": "",
    "access-window-end": "",
    "valid-from": "",
    "valid-until": "",
    "timezone": null,
    "guac-full-name": "",
    "guac-organization": "",
    "guac-organizational-role": ""
  }
}
```

### レスポンス

#### ステータスコード

- 200 - OK

#### レスポンスボディ

**@TODO**

## ユーザー削除

ユーザーを削除するAPIです。

<!-- omit in toc -->
### DELETE /api/session/data/{{data_source}}/users/{{username}}

#### ヘッダー

なし

#### パスパラメーター

- data_source (string, required) - データソース
- username (integer, required) - ユーザー名

#### クエリパラメーター

- token (string, required) - 認証トークン

#### リクエストボディ

なし

### レスポンス

#### ステータスコード

- 204 - No Content

#### レスポンスボディ

このリクエストにはレスポンスボディはありません。

---
