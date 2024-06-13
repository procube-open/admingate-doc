---
sidebar_position: 20
---
# Socket Warp Connector
接続したい機器にTCPで接続可能な環境にSWC(実行可能バイナリファイル)を置き、それをIDMに登録する必要がある。
## クライアント証明書発行
IDMでSWCを登録した後、SWLとのQUIC接続に用いるクライアント証明書を発行する必要がある。手順は以下の通り。
1. curlコマンドなどでscepサーバからscepclient実行ファイルとルート証明書をダウンロード
2. IDMに登録したUIDとパスワードを指定してscepclientを実行(成功するとIDMにクライアント証明書が登録される)
3. 生成された証明書ファイル群のパスをsettings.jsonで指定
## ファイル実行
同階層にsettings.jsonファイルが存在する状態で、SWCを実行すると、SWLに接続できる。