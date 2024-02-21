---
sidebar_position: 1
---

# 概要
[WebUI](/docs/category/webui-1)や作業ディレクトリ作成などの機能を提供するためのAPIサーバ。

## 認証

fastify自体には認証機能がないが、guacamoleと連携してAPIに対して認証を行っている。
APIリクエストには全て`Guacamole-Token`ヘッダと`Guacamole-Workid`ヘッダをつける必要があり、`Guacamole-Token`を用いて`Guacamole-Workid`の作業を単体取得する。
その結果、作業者、管理者のいずれとしても登録されていなかった場合リクエストを`401`で返す。

## 環境変数

| 環境変数                  | フォーマット | 詳細                                              | デフォルト値                |
|---------------------------|--------------|---------------------------------------------------|-----------------------------|
| `UPLOAD_SIZE_LIMIT`       | number       | アップロードされるファイルのサイズ上限            | 1099511627776               |
| `UPLOAD_SPEED`            | number       | ファイルがアップロードされる推定速度              | 33554432                    |
| `SCAN_SIZE_LIMIT`         | number       | スキャンされるファイルのサイズ上限                | 4294967296                  |
| `SCAN_SPEED`              | number       | ファイルがスキャンされる推定速度                  | 429916                      |
| `UPLOAD_TOTAL_SIZE_LIMIT` | number       | ファイルサーバの総合ファイルサイズ上限            | 21474836480                 |
| `FILESERVER_AV`           | boolean      | ウイルススキャンを実行するかどうかの判定          | false                       |
| `IDM_URL`                 | string       | ワークフロー申請ボタンを押したときに移動されるURL | "https://www.google.co.jp/" |
| `WS_URL`                  | string       | websocketを接続する際のURL                        | "ws://localhost:4200"       |
| `GUAC_URL`                | string       | guacamoleのURL                                    | "http://localhost:8080"     |
| `FAVICON_PATH`                | string       | ブラウザのファビコンを取得する参照先 | "frontend/favicon.ico"     |
| `APPBAR_LOGO_PATH`                | string       | ブラウザのヘッダーに表示されるロゴを取得する参照先 | "frontend/logo-appbar.gif"     |
| `LOGO192_PATH`                | string       | 192*192のロゴを取得する参照先 | "frontend/logo192.png"     |
| `LOGO512_PATH`                | string       | 512*512のロゴを取得する参照先 | "frontend/logo512.png"     |