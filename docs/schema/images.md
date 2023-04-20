---
sidebar_position: 60
---

# 画像

定義では以下の形式で画像データを扱えます。

```json
{
    ContentType: MIMEタイプ
    Body: バイナリデータを保持する Buffer() オブジェクト
}
```

バイナリデータは JSON 表現では base64 でエンコードされた文字列になり、BSON表現では Bynary() オブジェクトになります。
