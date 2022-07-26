# mk8_learn_typescript

https://qiita.com/irico/items/33744e15a4e0ca52d6bc
→これを順にやってる

2022/07/22
次ここから
https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103#%E6%9C%AC%E6%A0%BC%E7%9A%84%E3%81%AA%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AE%E6%A7%8B%E7%AF%89


# add script to typescript docker

```terminal
これで必要なファイルが作成される
$ npm init --y

必要なモジュールのインストール
これでモジュール管理もできるようになる
$ npm install typescript ts-loader webpack webpack-cli webpack-dev-server --save-dev
```

package.jsonに対してスクリプトを追加してコマンドを楽にする

```package.json
"scripts": {
    "build": "webpack --mode=development",
    "start": "webpack serve --mode=development"
  },
```


# add command for react container
```terminal
$ npx create-react-app like-button --template typescript
```

