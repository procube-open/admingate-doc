---
author: Procube Co.,Ltd.
---

# パスワード忘れ受付サーブレット

パスワード忘れ受付サーブレットは、エンドユーザのパスワード忘れ対応（メール送信型）のための画面を提供します。

## 処理フロー

パスワード忘れ受付サーブレットは以下のフローを想定しています。

1.  ユーザがログイン画面から「パスワードを忘れた場合」のリンクをクリック
2.  ユーザがパスワード忘れ画面でユーザIDを入力
3.  パスワード忘れ受付サーブレットがアクセスキー乱数を発行し、データベースに登録（有効期限をN時間に設定）
4.  パスワード忘れ受付サーブレットが、パスワード忘れリダイレクタのURLを埋め込んだメールをユーザ向けに発信（URLにはアクセスキーを付与）
5.  ユーザがメールに埋め込まれているURLをクリック
6.  パスワード忘れリダイレクタでアクセスキーをデータベースに照合して、有効であれば、[パスワード変更サーブレット](changePassword.md)にシステム連携モードでリダイレクト
7.  ユーザが[パスワード変更サーブレット](changePassword.md)で新しいパスワードを入力（旧パスワード入力なし）
8.  [パスワード変更サーブレット](changePassword.md)がユーザのパスワードを変更

## 呼び出し

パスワード忘れ受付サーブレットの呼び出し URL は "/changePassword/initializePassword" です。パスワード忘れ受付サーブレットは、HTTP GET メソッドで呼び出します。

パスワード忘れリダイレクタの呼び出し URL は "/changePassword/doInitializePassword" です。 HTTP GET メソッドの URL のクエリ文字列でパラメータを指定します。

|パラメータ名 / 項目名|説明|データ型|制限など|
|------------|---|----|----|
|accessKey / アクセスキー|パスワード忘れ受付サーブレットが発行したアクセスキー|string|必須|
|id / ID|パスワード忘れ受付記録の ID|string|必須|

## インタフェースへのアクセス

パスワード忘れ受付サーブレットを利用する場合、 IDM2 のデータベースで連携システムインタフェースとパスワード変更インタフェースの二つのインタフェースを設定しておく必要があります。 パスワード忘れ受付サーブレットは、これらのインタフェースにアクセスしながら動作します。 パスワード忘れ受付サーブレットはシステム管理者としてアクセスするため、アクセス制御リストは空でもかまいません。

## 連携システムインタフェース

パスワード忘れ受付サーブレットは、[パスワード変更サーブレット](changePassword.md)を連携モードで呼び出すため、連携システムインタフェースを必ず設定する必要があります。 また、システムID \(systemId\) が「idm2initializePassword」（予約システムID）、鍵 \(key\) は任意の値の連携システムオブジェクトが登録されていなければなりません。

連携システムインタフェースについては、パスワード変更サーブレットの[連携システムインタフェース](changePassword.md#systemInterface)を参照してください。

## パスワード変更インタフェース

パスワード変更インタフェースについては、パスワード変更サーブレットの[パスワード変更インタフェース](changePassword.md#changePasswordInterface)を参照してください。

## 画面の構成要素

パスワード忘れ受付サーブレットのパスワード再設定申請画面では以下の要素が表示されます。

|項目|説明|表示条件等|
|---|---|-----|
|ユーザID|パスワードの設定対象となるユーザID を入力するフィールド。|必須|
|エラーメッセージ|パスワード再設定申請でエラーが発生した場合に、エラーメッセージを表示する。|エラーが発生したときのみ表示される|
|セッション情報|セッション情報を保持するフィールド。hidden 項目で表示はしない。|必須|
|申請ボタン|パスワード再設定申請ボタン。|必須|

## 仕組みとカスタマイズ

パスワード忘れ受付サーブレットのパスワード再設定申請画面は HTML で作成することにより、フルにカスタマイズできます。 カスタマイズした HTML 内にパラメータや設定値に従った情報を onload 時の java スクリプトで埋め込みます。 HTML 内の対応する要素に以下の id を付与してください。 また、申請ボタンの POST 時のフォームデータのコントロール名 \(name属性\) には id と同じ名前を付与してください。

|項目|id|置き換え|
|---|---|----|
|ユーザID|uid| |
|エラーメッセージ|errorMessage|エラーメッセージの <p\> 要素を子ノードに追加。エラーがないときは、 style.display=none を設定|
|セッション情報|sessionInfo|セッション情報を value に設定|
|申請ボタン|apply| |

パスワード忘れ受付サーブレットとカスタマイズした HTML を連携させるために HTML ファイルには、以下の設定が必要です。

-   script タグで /changePassword/setInitializeParameter.js を読み込む
-   body タグの onload で呼ばれる関数の中で replaceElements\(\) 関数を呼び出す （body タグ配下のトップレベルの要素に style.display=none を指定しておき、replaceElements\(\) 呼び出し後に、 style.display=block に変更することで、画面の切り替わり内容がエンドユーザに 見えてしまうのを防ぐことができます）
-   フォームの POST 先は /changePassword/initializePassword、フォーム名は initializePasswordForm とする
-   scriptで、バリデート用の関数を呼び出すことで、入力値のチェックを行うことができる。バリデート用の関数については、後述

カスタマイズ可能なファイルは以下のとおりです。

|項目|格納場所 \(/opt/tomcat7/webapps/changePassword 配下\)|説明|
|---|-----------------------------------------------|---|
|パスワード再設定申請画面|html/initializePassword.html|パスワード忘れ受付サーブレットの再設定申請画面。この HTML はフルにカスタマイズできる。カスタマイズについては、上記「仕組みとカスタマイズ」を参照|
|パスワード再設定申請（完了）|html/initializePasswordDone.html|パスワード忘れ受付サーブレットの再設定申請（完了）画面。この HTML はフルにカスタマイズできる|
|パスワード再設定（完了）|doInitializePasswordDone.html|パスワード再設定申請で発信されたメールに埋め込まれた URL を実行し、パスワード変更を完了した後に表示されるパスワード再設定（完了）画面。この HTML はフルにカスタマイズできる|
|スタイルシート|css/changePassword.css 他|パスワード変更サーブレットの表示画面で使用しているスタイルシートファイル。カスタマイズした HTML でインクルードしたオリジナルの css を同フォルダに配置することも可能|
|スクリプトファイル|script/initializePassword.js|HTML で実行される関数を含むスクリプトファイル。カスタマイズした HTML でインクルードしたオリジナルの js を同フォルダに配置することも可能|
|メッセージファイル|script/message.json|画面に表示されるメッセージ文。属性の表示名を変更したい場合などにカスタマイズする。ファイルは json 形式で、value 値以外は変更不可。また、value 値の中の <span id='id名'\>\{数値\}</span\> の変更も不可|

以下に HTML の例を示します。

```

<html>
    <head>
        <title>パスワード再設定申請</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta name="description" content="" />
        <meta name="author" content="" />
        <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        
        <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="./bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" />
        <link href="./css/ns.css" rel="stylesheet" />
        <link href="./css/changePasswordBusy.css" rel="stylesheet" />
        <script src="/changePassword/setInitializeParameter.js" type="text/javascript"></script>
        <script src="./script/initializePassword.js" type="text/javascript"></script>
        <script src="./script/jquery-1.11.0.min.js" type="text/javascript"></script>
        <!--[if lte IE 7]>
        <script src="./script/json2.js" type="text/javascript"></script>
        <![endif]-->
        <script type="text/javascript">
        <!--
            var messageLang = "ja";
            var runInitializePassword = false;

            $(window).resize(function() {
                resetOverlay();
            });
            $(window).scroll(function() {
                resetOverlay();
            });
            $(document).ready(function() {
                $('#loginform').submit(function() {
                    if (!applyInitializePassword()) return false;
                });
            });
        //-->
        </script>
    </head>
    <body id="all" style="display:none" onload="setInitialData();">
        <script src="./bootstrap/js/bootstrap.min.js"></script>
        <div class="container">
            <div id="loginbox" style="margin-top:50px;"
                class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <div class="panel-title">パスワード再設定申請</div>
                    </div>

                    <div style="padding-top:30px" class="panel-body">

                        <div style="display:none" id="errorMessage"
                            class="alert alert-danger col-sm-12"></div>

                        <form id="loginform" class="form-horizontal" role="form"
                            method="post" action="/changePassword/initializePassword" name="initializePasswordForm">

<p>以下のユーザのパスワードの再設定を申請します。「申請」ボタンを押すと、メールが発信されますので、そのメールに埋め込まれているURLをクリックしてください。</p>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon">
                                    <i class="glyphicon glyphicon-user"></i>
                                </span>
                                <input name="uid" id="uid" type="text" class="form-control" value="" placeholder="ユーザID" />
                            </div>

                            <div style="margin-top:10px" class="form-group">
                                
                                <div class="col-sm-12 controls">
                                    <input type="submit" class="btn btn-success" name="apply" id="apply" value="申請"/>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12 control">
                                    <div align="right" style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
                                        <a href="http://www.procube.info/">NetSoarer ID Manager</a>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="sessionInfo" name="sessionInfo" value=""/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 実行中アイコン -->
        <div id="busy"><img src="./image/busy.gif" width="50" height="50" alt="Sending..." /></div>
        <div id="fade"></div>
    </body>
</html>
   
```

## パスワード忘れ受付記録の閲覧

パスワード忘れ受付サーブレットは、パスワード忘れを受け付けたことを履歴として記録します。その履歴は、パスワード忘れ受付記録閲覧ガジェットで閲覧することができます。 IDM2 では閲覧するためのインタフェース、ガジェットを提供します。ガジェットは以下のような目的での利用が可能です。

-   アカウントが乗っ取られたなどのセキュティインシデント発生時に監査ログとして検索する
-   ユーザから問い合わせがあった時に操作履歴として検索する

インタフェース、ガジェットについては、未執筆。

## 申請回数の制限について

他人のユーザID を何度も入力してメールを沢山送りつけるイタズラにより、同一ユーザID に短時間に何度もパスワード再設定申請の受付メールを送信するのを避けるため、申請回数の制限を行います。 [システム設定オブジェクト](systemSetting)の「PW忘れ申請制限期間」（デフォルトは 180 分）内に「PW忘れ申請制限回数」（デフォルトは 5 回）を超える申請があった場合に、 エラーが出力され、該当ユーザID の新たな申請が行えなくなります。

この制限により申請ができなくなった場合でも、「PW忘れ申請制限期間」に指定されている時間を経過すれば、制限は解除され、再び申請を行えるようになります。

## JavaScriptバリデート関数

カスタマイズした HTML の script から JavaScriptバリデート関数を呼び出すことで、入力値のエラーチェックを行うことができます。標準でサポートされている関数は次のとおりです。

|関数名|パラメータ|戻り値|チェック概要|
|---|-----|---|------|
|checkUid|なし|エラーID \(id\) とエラーメッセージ \(message\) を持つオブジェクトの配列。配列名.length == 0のとき、エラーなし|ユーザID のチェック-   必須項目チェック|

## エラーメッセージ

ここでは、パスワード忘れ受付サーブレットのエラーメッセージを示します。表中の斜体の部分はメッセージに具体的な情報が含まれることを示します。

|エラー番号|メッセージ|補足説明|
|-----|-----|----|
|7014|システム設定オブジェクトの「PW変更インタフェース」が設定されていません。| |
|7015|システム設定オブジェクトの「連携システムリスト」が設定されていません。| |
|7500|パスワード忘れ受付サーブレットの呼び出し\(GET\)中にエラーが発生しました。エラー：*詳細エラー*|連携システムオブジェクト「idm2initializePassword」が登録されていない等、主に設定エラー|
|7501|セッション情報がないため、パスワード忘れ受付処理ができませんでした。セッションタイムアウト、または予期しないボタンからパスワード忘れ受付処理が実行された可能性があります。| |
|7502|セッションIDとクッキー値が異なるため、パスワード忘れ受付サーブレットの実行を中止しました。\(ユーザID:*ユーザID*\)|POST 時にセッション情報が一致しなかった。|
|7503|必要なクッキー値がクライアントから送信されていないため、パスワード忘れ受付サーブレットの実行を中止しました。\(ユーザID:*ユーザID*\)|POST 時にクッキー値がクライアントから送信されなかった。|
|7507|パスワード忘れ受付サーブレットの呼び出し\(POST\)中にエラーが発生しました。エラー：*詳細エラー*| |
|7508|パスワード忘れ受付サーブレットのリダイレクタURLに指定されたアクセスキーが見つかりませんでした。\(id:*パスワード忘れ受付記録オブジェクトID*, accessKey:*アクセスキー*\)|実行されたリダイレクタURL に対応するパスワード忘れ受付記録オブジェクトが存在しない。 -   ユーザ操作のリダイレクタURL 実行時にパラメータが切れ、存在しない id やアクセスキーで実行された。パスワード忘れ受付記録から削除済みのオブジェクトに対するリダイレクタURL が実行された|
|7510|有効期限の形式が異なるため、有効期限までの日数処理ができませんでした。「*日付形式*」形式で指定してください。|パスワード忘れ受付記録の有効期限の日付形式が誤っている|
|7511|パスワード忘れ受付サーブレットのリダイレクタURLのクエリパラメータが誤っているため、パスワード再設定処理を中止しました。|リダイレクタURL のクエリパラメータが誤っている。次の原因が考えられる。 -   ユーザ操作でリダイレクタURL 実行時にパラメータが切れた。自動更新バッチのメール本文でリダイレクタURL が正しく生成できていない\(必須パラメータ：id, accessKey\)|
|7513|パスワード再設定申請が既定時間内の限界回数を超えたため、パスワード再設定申請を中止しました。\(ユーザID:*ユーザID*\)|申請回数の制限を超えた。システム設定オブジェクトの「PW忘れ申請制限期間」（デフォルトは 180 分）内に「PW忘れ申請制限回数」（デフォルトは 5 回）を超える申請があったため、該当ユーザID の新たな申請を中止した。

 この制限により申請ができなくなった場合でも、「PW忘れ申請制限期間」に指定されている時間を経過すれば、制限は解除され、再び申請を行えるようになる。|
|7514|パスワード忘れ受付サーブレットにおいて、連携システム（*システムID*）のキーが空のため実行できませんでした。連携システムのキーを設定してください。|パスワード忘れ受付サーブレットの実行に必要な連携システムのシステムID「idm2initializePassword」がない|
|7515|パスワード忘れ受付サーブレットにおいて、パスワード変更サーブレットの連携モード呼び出しに失敗しました（署名の生成）。| |
|7418|テナントID（*テナントID*）に対する設定ファイルが取得できませんでした。|マルチテナント機能を使って実行されたが、テナントID に対する設定ファイルが見つからなかったため、システム設定オブジェクトの値で処理が続行された。|

|エラー番号|メッセージ|補足説明|
|-----|-----|----|
| |入力していただいたユーザIDが見つかりません。ユーザIDをご確認の上、もう一度お試しください。|パスワード再設定申請画面に入力されたユーザID が見つからなかった。|
| |申し訳ありませんが、あなたのユーザIDではパスワード再設定申請ができません。|パスワード再設定申請画面に入力されたユーザID にメールアドレスが設定されていない。|
| |実行していただいたURLの有効期限が過ぎているためパスワード再設定ができません。申請からやりなおしてください。|リダイレクタ URL に指定されているアクセスキーの有効期限が過ぎている。|
|7850|システムが一時的に使用できないか、障害が発生している可能性があります。またはリクエストを処理するために必要な情報が失われたため、処理できません。お手数ですが、次のことをご確認ください。 最後のページを表示後、長時間経過してから操作された場合は、タイムアウトにより必要な情報が破棄されていますので、最初からやり直してください。 毎回このページが表示される場合は、Cookieの設定を見直してください。Cookieを受け入れる設定である必要があります。\(No.7850\)|/changePassword/setInitializeParameter.js の読み込みに失敗した。 window.alert で表示される。 システムが一時的に使用できない、またはシステム設定オブジェクト、パスワード忘れ受付設定が出来ていないなどの設定ミスがある。 クライアント側が Cookie を受け入れていない場合にも表示される。|
|7851|システムが一時的に使用できないか、障害が発生している可能性があります。\(No.7851\)|エラーメッセージの表示に失敗した。HTML ファイルにエラーメッセージ \(errorMessage\) が指定されていない。 window.alert で表示される。|
|7852|システムが一時的に使用できないか、障害が発生している可能性があります。\(No.7852:*ターゲットID*\)|対象ターゲットID のエラーメッセージの埋め込み文字の数が合っていない。 window.alert で表示される。（メッセージファイル:script/message.json）|
|7853|システムが一時的に使用できないか、障害が発生している可能性があります。\(No.7853:*ターゲットID*\)|対象ターゲットID のエラーメッセージの埋め込み文字の情報がない。 window.alert で表示される。（メッセージファイル:script/message.json）|
|7854|システムが一時的に使用できないか、障害が発生している可能性があります。\(No.7854:*ID名*\)|必須項目チェックを行おうとしたが、HTML ファイルにチェック対象となる id 名が指定されていない。|
|7855|NotFound message\(No.7855:*ターゲットID*, *言語タイプ*\)|対象ターゲットID のエラーメッセージを表示しようとしたが、対象言語タイプのエラーメッセージが見つからなかった。（メッセージファイル:script/message.json）|
