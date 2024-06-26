---
sidebar_position: 30
---
# ウイルススキャン

ファイルサーバーにアップロードされたファイルに対してウイルススキャンを実行する。
MongoDBのChange Stream という機能を用いることでアップロードを検知できる。
アップロードを検知したタイミングで、アップロードされたファイルを流すことでウイルススキャンが実行される。

また、この機能はアップロードされたプロトコル毎に有効/無効を環境変数で切り替えることができる。

## 履歴記録
ウイルススキャン実行完了後、`metadata.accessHistory`には`Type`が`"scan"`として記録される。
また、ウイルスが検出された場合は`"Info"`にウイルスの検出内容が記録される。

## ステータス

ファイルの`metadata.status`でスキャン状況を確認できる。値とその意味に関しては以下の表の通り。

| 値                     | 説明                                       |
| ---------------------- | ------------------------------------------ |
| `"WAITFOR_AVSCAN"`     | ウイルススキャン実行中を表す。             |
| `"COMPLETE"`           | ファイルが安全であることを表す。           |
| `"MALICIOUS"`          | ファイルにウイルスが検出されたことを表す。 |
| `"CLAMAV_UNAVAILABLE"` | AVスキャンサーバーが使用できなかったことを表す。   |

また、ウイルススキャンが環境変数で無効化されている場合は、全てのファイルが`"COMPLETE"`の状態でアップロードされる。