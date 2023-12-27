---
sidebar_position: 1
---

# 概要

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