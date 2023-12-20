---
sidebar_position: 20
---
# 機器接続

guacamoleの接続ページを用いて機器接続が行われる。
`/client/`の後にパラメータをエンコードしたものを入れたパスに行くことで接続できる。
またAdminGateでは従来のguacamoleのパラメータに、新しく`GUAC_WORK_ID`を組み込んでエンコードしている。

## エンコード方式
以下の変数3つと、`"postgresql"`という文字列を`"\0"`で繋げたものを、base64エンコードする。

| 変数   | 内容      |
|--------|-----------|
| id     | 接続先ID  |
| type   | `"c"`固定 |
| workId | 作業の`"identifier"`    |

以下コード
```
export const getClientIdentifier = (id: number, type: string, workId: string) => {
  const base64urlEncode = function base64urlEncode(value: any) {
    return btoa(value).replace(/[+/=]/g,
      (str) => ({
        '+': '-',
        '/': '_',
        '=': ''
      })[str]
    );
  };
  return base64urlEncode([
    id,
    type,
    "postgresql",
    workId,
  ].join('\0'))
};

// const identifier = getClientIdentifier(id, type, workId)
// window.open( guacUrl + "/#/client/" + identifier, identifier)
```