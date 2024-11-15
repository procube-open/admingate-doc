---
sidebar_position: 40
---

# postgres の構築

postgres のサービスを構築する際の設定パラメータについて説明します。

## 環境変数の設定

postgres で利用する環境変数は以下のとおりです。

| 変数名 | 内容 |
| --- | --- |
| PGDATA | データの保存先です。 |
| POSTGRES_DB | DB名です。 |
| POSTGRES_USER | ユーザー名です。 |
| POSTGRES_PASSWORD | 上記ユーザーのパスワードです。 |

## ボリュームの設定

postgres には以下のボリュームを設定します。

| パス | 説明 |
| --- | --- |
| /var/lib/postgresql/data | postgres のデータをボリューム化します。 |

## roles の設定

postgres で利用する roles について説明します。

設定する roles は以下のとおりです。

| role 名 | 実施タイミング | 内容 |
| --- | --- | --- |
| python-aptk | build-images | python をインストールする hive-builder の標準ロールです。 |
| guacamole-initdb | guacamole で生成される初期化 SQL ファイルに従って、テーブルの作成を行います。 |

### guacamole-initdb のタスクサンプル

```yml
- name: put initdb.sql
  copy:
    src: "{{ hive_temp_dir }}/initdb.sql"
    dest: /docker-entrypoint-initdb.d/
```

コピー元のファイルは guacamole サーバー内にて以下のコマンドを実施することで作成されます。

```
/opt/guacamole/bin/initdb.sh --postgres
```
