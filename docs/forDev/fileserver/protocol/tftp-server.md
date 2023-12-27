---
sidebar_position: 40
---
# TFTP
ベースとなるパッケージとして[`node-tftp`](https://www.npmjs.com/package/tftp)を用いる。
`metadata.accessHistory`の`Protocol`は`tftp`で記録される。

## 認証機能
TFTPにはユーザー名やパスワードによる認証機能が存在しない。
よって、TFTPでは、publicディレクトリ配下とのみファイルの転送ができる。
