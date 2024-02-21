---
sidebar_position: 10
---
# テーマ変更
AdminGateのWebUIを開発するにあたってロゴや色合いを変えたい場合の指針を記す。
WebUIは[React-Admin](https://marmelab.com/react-admin/Tutorial.html)の基本構成に則って記述されているので、その他細かい点についてはこちらのドキュメントを参照されたい。

## 色合い
背景色や、主となる色は`react-admin-frontend/src/App.tsx`を書き換えることで変更できる。

```
export const adminTheme = {
  ...defaultTheme,
  palette: {
    primary: colors.teal,
    secondary: colors.grey
  },
  sidebar: {
    width: 250, // The default value is 240
    closedWidth: 0, // The default value is 55
  },
};
export const workerTheme = {
  ...defaultTheme,
  palette: {
    primary: colors.blue,
    secondary: colors.grey
  },
  sidebar: {
    width: 250, // The default value is 240
    closedWidth: 0, // The default value is 55
  },
};
```
それぞれ`adminTheme`は管理者モードの時の色合いを指定でき、`workerTheme`の時は作業者モードの時の色合いを指定できる。

## ロゴ変更
ファビコンやAppbarのロゴを参照するパスを環境変数で指定できる。
