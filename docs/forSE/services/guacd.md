---
sidebar_position: 30
---

# guacd の構築

guacd のサービスを構築する際の設定パラメータについて説明します。

## ボリュームの設定

admingate-api には以下のボリュームを設定します。

| パス | 説明 |
| --- | --- |
| /var/lib/guacamole/recordings | 接続履歴を保存するディレクトリをボリューム化します。別途記載の admingate-api のボリュームと一致するようにしてください。 |

## その他

その他設定項目について説明します。

### placement の設定

guacd は guacamole サーバーと同一の hive サーバーに立ち上げる必要があります。そのために、placement を以下のように設定してください。

```
placement:
  constraints:
    - node.labels.admingate-api == true
```
