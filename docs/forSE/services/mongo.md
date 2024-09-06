---
sidebar_position: 70
---

# mongo の構築

mongo のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

mongo で利用する環境変数は以下のとおりです。

| 変数名 | 内容 |
| --- | --- |
| MONGO_INITDB_DATABASE | mongo のデータベース名 |
| MONGO_INITDB_ROOT_USERNAME | mongo のユーザー名 |
| MONGO_INITDB_ROOT_PASSWORD | mongo パスワード |

## ボリュームの設定

mongo には以下のボリュームを設定します。

| パス | 説明 |
| --- | --- |
| /data/db | DB 内のデータをボリューム化します。 |
| /data/configdb | DB の設定をボリューム化します。 |

## roles の設定

mongo で利用する roles について説明します。

設定する roles は以下のとおりです。

| role 名 | 実施タイミング | 内容 |
| --- | --- | --- |
| python-aptk | build-images | python をインストールする hive-builder の標準ロールです。 |
| mongo-initdb | テーブルの作成を行います。 |

### mongo-initdb のタスクサンプル

mongo-initdb のタスクサンプルとしては以下の通りです。

```yml
---
- name: put init.js
  copy:
    src: init.js
    dest: /docker-entrypoint-initdb.d/
```

また、コピー元の設定ファイルとして init.js を用意する必要があります。

```
db.fs.dirs.insertOne({
  "dirname": "public",
  "uploadDate": new Date(),
  "parent_id": "root",
  "fullpath": [
    "root",
    "public"
  ],
  "unique": "/root/public",
})
```
