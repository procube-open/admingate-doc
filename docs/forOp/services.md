---
sidebar_position: 30
---
# サービス起動停止

hive mother 環境にて、以下を実行することでサービスの停止ができる。
```
hive deploy-services -l {サービス名} -D
```
また、`-D`を外すことでサービスの起動ができる。