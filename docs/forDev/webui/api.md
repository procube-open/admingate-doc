# API一覧

### ファイルサーバー

### 静的コンテンツ
静的コンテンツを返すAPI一覧。
レスポンスは全てファイルが`application/octet-stream` で返される

| パス                  | Method | レスポンス内容                  |
|-----------------------|--------|---------------------------------|
| `/`                   | GET    | `frontend/index.html` を返す    |
| `/manifest.json`      | GET    | `frontend/manifest.json` を返す |
| `favicon.ico`         | GET    | `frontend/favicon.ico` を返す   |
| `logo192.png`         | GET    | `frontend/logo192.png` を返す   |
| `logo512.png`         | GET    | `frontend/logo512.png` を返す   |
| `static/:type/:chunk` | GET    | `frontend/{type}/{chunk}`を返す |

### ファイルサーバー

| パス                       | Method | クエリ     |body| レスポンス内容  |
|----------------------------|--------|-----------|-----------|---------|
| `/api/getenv`              | GET    |  | | fastifyに設定された環境変数の一覧を返す 。 |
| `/api/files/:dir`          | GET    | `includerDir:boolean` | |{dir}配下のファイル一覧を返す。`includeDir`が`true`の場合は{dir}配下のディレクトリも一緒に返される。 |
| `/api/files/:id/getfile`      | GET    |  | | `_id`が{id}のファイルのメタデータを単体取得できる。 |
| `/api/files/:work/getdirs` | GET    |  || 作業IDが{work}の[ルートディレクトリ](/docs/forDev/fileserver/directory#ルートディレクトリ)配下の情報を取得できる。それぞれのディレクトリのメタデータに新しく`children`というパラメータが追加されている。 |
| `/api/files/:id/getdir`    | GET    |  | | `_id`が{dir}のディレクトリのメタデータを単体取得できる。  |
| `/api/files/:id/download`  | GET    |  | | ファイルのうち、`_id`が{id}のものをダウンロードできる。 |
| `/api/files/:dir/check`     | POST   |  | `filename:string` | アップロード可能かどうか精査するための情報を返す。 |
| `/api/files/:dir/:id`      | POST   |  | `ReadableStream` |`_id`が{id}のファイルを上書きアップロードする。ただし、{id}が`"new"`だった場合は{dir}配下に新規アップロードする。|
| `/api/files/:dir/mkdir`    | POST   | | `dirname:string` | `_id`が{dir}のディレクトリの配下にディレクトリを作成する。|
| `/api/files/cancel`   | POST   |   |```filename:string``` ```uuid:string``` ```dirId:string``` | `uuid`でアップロード中のものをキャンセルする。 |
| `/api/files/:id`      | PUT    |   |`filename:string` `matadata.parent_id`| `_id`が{id}のファイルの名前を変更する。|
| `/api/files/:dir/rndir`     | PUT    |   | `dirname:string`|`_id`が{dir}のディレクトリの名前を変更する。 |
| `/api/files/:id`           | DELETE |  |  | `_id`が{id}のファイルを削除する。|
| `/api/files`               | DELETE | | `Array<string>`| bodyの配列に格納された文字列の`_id`のファイルを全て削除する。|
| `/api/files/:dir/rmdir`     | DELETE |  | | `_id`が{dir}のディレクトリを削除する。|

