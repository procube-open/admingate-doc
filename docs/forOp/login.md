---
sidebar_position: 20
---
# ログイン手順

hive mother サーバへアクセスできることを前提として記述する。

## レポジトリサーバへのログイン
以下を実行することで、hiveのレポジトリサーバにログインすることができる。
```
hive ssh
```

### ファイルサーバ

レポジトリサーバにログイン後以下を実行することでファイルサーバのmongodbにアクセスできる。
```
dsh mongo
mongosh mongodb://root:example@localhost:27017/files_db?authSource=admin
```

### guacamole_db

レポジトリサーバにログイン後以下を実行することでguacamoleのpostgres_dbにアクセスできる。
```
dsh postgres
psql -d guacamole_db -U guacamole_user
```

## コンテナ収容サーバへのログイン

以下を実行することで、hiveのコンテナ収容サーバにログインすることができる。
```
hive ssh -t s-hive0.admin-gate
```
s-hive0の部分をs-hive1,s-hive2に切り替えることでそれぞれログイン先も切り替えることができる。
