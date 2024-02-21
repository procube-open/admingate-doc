---
sidebar_position: 10
---
# 構成
`AdminGate`は`Webgate`,`AccessManager`,`IDManager`,の使用を前提としている。

### WebGate
ブラウザからアクセスする際のリバースプロキシを行う。

### AccessManager
ログイン/ログアウトを管理し、SAML認証でGuacamoleへのログインを行う。

### IDManager
作業の申請と承認、接続先の追加などを行う。

## 構成図

![構成図](/img/composition.png)
