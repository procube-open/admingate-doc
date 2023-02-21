---
sidebar_position: 20
---

# CI/CD
CI/CD には原則としてパブリックリポジトリを使用する。


## github
CI は github 上のソースコードから github action を使用して行う。

* github のリポジトリは https://github.com/teigi-devel を使用する。
* dependabot を利用して脆弱性を排除する
* [GITHUB-FLOW](GITHUB-FLOW-ja)に従って管理する

## dockerhub

2023/2/19 時点で teigi は空いていない。必要になった時点で取得する。

## npmjs

teigi organization を使用する。

## pypi

pypi は組織はないので、パッケージ名に _teigi を付与する。

## domain

teigi.dev を取得済み。