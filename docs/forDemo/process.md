---
sidebar_position: 1
---

# デモ手順

デモをする上での順序をまとめます。特定の機能にフォーカスしてデモする場合などは適宜順序の入れ替えや省略を行なって下さい。

## 機能紹介

AdminGate は何ができる製品なのかを紹介して下さい。機能一覧は[こちら](/docs/forDemo/feature.md)

## 作業者運用

実際に AdminGate の WebUI で機器に接続する流れを紹介して下さい。
「利用者」としてのユーザでログインし、事前に作業を用意しておき、以下の流れで WebUI を操作して下さい。

:::note
実際の製品運用の流れとしては IDM でユーザと接続仕様の登録を行うところからですが、
AdminGate の製品デモなので、最初から IDM の画面で接続仕様や作業の申請/承認を紹介するのは適切ではないと思われます。
:::

### 接続

Windows サーバなどに RDP で接続し、操作を行った後、履歴再生でその操作が確認できることを紹介して下さい。

### テキスト再生

Linux サーバなどに SSH で接続し、操作を行った後テキスト再生で履歴を再生して下さい。また、合わせて履歴ファイルの圧縮に繋がることを紹介して下さい。

### ファイルサーバ

ファイルサーバから SFTP 接続が可能なことを紹介して下さい。

#### アップロード

まずファイルマネージャでテキストファイルをアップロードし、SFTP 接続を行って下さい。
その後、ファイルマネージャから接続先側にファイルをドラッグ&ドロップして、ファイルをアップロードして下さい。
SSH 接続してテキストファイルが存在し、中身も適切に反映されていることが確認できます。

#### ダウンロード

アップロードの反対にダウンロードもできることを紹介して下さい。
SFTP 接続し、接続先側から適当なファイルをファイルマネージャ側にドラッグ&ドロップし、ファイルをダウンロードして下さい。
その後ファイルマネージャからファイルがダウンロードできることを確認できます。

### 管理者モード

管理者モードに切り替え、自信が管理している作業の確認ができることを紹介して下さい。
管理者モードでは全体接続履歴が確認できることを紹介して下さい。

:::note
強制切断機能の紹介を一人でするには以下の手順を踏む必要があります。

- 作業者モードにして接続
- 管理者モードにしてそれを強制切断
- 作業者モードにして接続が切断されていることを確認

紹介が難しいので必要であれば行う程度で問題ありません。
:::

### 接続先追加

ここから IDM の機能紹介となります。
接続仕様を用いて接続先の追加を行えることを紹介して下さい。
IDM の画面に移動して、接続仕様を選択して接続先の追加を行って下さい。また、ここで OU 単位で参照と編集が可能なユーザも設定できます。

#### socket-warp 紹介

接続先追加のタイミングで socket-warp を利用するかどうか決めることができます。SCEP の WebUI にアクセスし、クライアント一覧から適切なクライアント ID を選択することで利用することができることを紹介して下さい。
:::note
socket-warp の紹介をしない場合はスキップして下さい。
:::

### 作業申請

接続先と作業時間を設定して作業申請が行えることを紹介して下さい。また、作業それぞれに対して作業者と管理者を選択できることを紹介して下さい。

## 管理者運用

ユーザを管理者に切り替えて管理者運用の紹介をして下さい。

:::note
作業に対しての管理者とユーザの役割としての管理者を混同する可能性があるので、注意して下さい。
:::

### 接続仕様追加

機器管理者は接続仕様を追加できることを紹介して下さい。パスワード変更用 ID・パスワードと作業用 ID・パスワードをそれぞれ入力して接続仕様を作成して下さい。

### SWC追加

socket-warp-connectorを追加する場合は[こちら](/docs/forOp/socket-warp/howto.md)に従って追加までの手順を紹介して下さい。

### 作業承認

先ほど利用者ユーザで申請された作業を承認できることを紹介して下さい。承認が行われると AdminGate の WebUI で作業が追加されることを確認して下さい。