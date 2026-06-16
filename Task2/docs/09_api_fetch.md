# API / fetch

## 今日の目的

APIがフロントエンドとバックエンドのやり取り口であり、fetchがJavaScriptからデータを取得する命令であることを理解する。

## 作ったもの

ボタンを押すと、JSONデータを取得して画面に表示するページ。

## アプリケーションURL

http://localhost:5500/src/api-practice/index.html

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| API | フロントエンドとバックエンドのやり取り口 | データをお願いする窓口 |
| fetch | JavaScriptからデータを取得する命令 | データを取りに行く命令 |
| JSON | データを表す形式 | JavaScriptで扱いやすいデータの形 |
| レスポンス | fetchの結果として返ってくるもの | 取りに行った結果 |
| `response.json()` | レスポンスをJavaScriptで扱えるデータに変換する処理 | 返ってきたJSONを使える形にする |
| `then` | 前の処理が終わったあとに次の処理をする書き方 | 取得できたら次に進むための書き方 |

## APIの簡単な説明

APIは、フロントエンドとサーバーがデータをやり取りするための入口。

フロントエンドは、サーバーの中身やDBを直接触るのではなく、APIに対して「このデータをください」「このデータを保存してください」とお願いする。

```text
フロントエンド
↓
APIにリクエストする
↓
バックエンドが処理する
↓
必要に応じてDBを使う
↓
JSONなどのデータを返す
↓
フロントエンドが画面に表示する
```

## fetchとは何か

`fetch` は、JavaScriptから指定したURLにデータを取りに行く命令。

`fetch` の役割は「データを取得すること」。取得したデータを画面に表示するには、取得後にJavaScriptでデータを処理し、DOMを通じてHTMLを更新する必要がある。

```js
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    showLessons(data.lessons);
  });
```

この流れは、「JSONを取りに行く → JavaScriptで使える形に変える → 画面表示用の関数に渡す」という意味。

## API / fetch の流れ

```text
ユーザーがボタンを押す
↓
clickイベントが発生する
↓
JavaScriptがfetchを実行する
↓
APIまたはJSONファイルにデータを要求する
↓
レスポンスが返ってくる
↓
response.json()でJavaScriptのデータに変換する
↓
取得したデータをHTMLの形にする
↓
DOMを通じて画面に表示する
```

## 処理の流れ

```text
ユーザーが「データを取得する」ボタンを押す
↓
clickイベントが発生する
↓
loadLessons関数が実行される
↓
fetch("data.json") でデータを取りに行く
↓
response.json() でJSONをJavaScriptのデータに変換する
↓
showLessons関数に取得データを渡す
↓
取得したデータをliタグにする
↓
lessonList.innerHTMLで画面に表示する
```

## 元データ・処理・表示結果

| 種類 | コード上の場所 | 内容 |
|---|---|---|
| 取得先 | `data.json` | 学習項目のデータ |
| 通信処理 | `fetch("data.json")` | JSONデータを取りに行く |
| 変換処理 | `response.json()` | JSONをJavaScriptのデータに変える |
| 表示処理 | `showLessons(data.lessons)` | 取得したデータを画面に表示する |
| 表示結果 | `ul id="lessonList"` | 取得した学習項目のリスト |

## コードと画面の対応

| 画面上の要素 | コード上の場所 | 役割 |
|---|---|---|
| データ取得ボタン | `button id="loadButton"` | fetchを始める操作を受け取る |
| 状態表示 | `p id="statusText"` | 取得前、取得中、取得後の状態を表示する |
| 学習項目リスト | `ul id="lessonList"` | 取得したデータを表示する場所 |
| 取得先データ | `data.json` | 外部データの練習用ファイル |
| fetch処理 | `fetch("data.json")` | JSONデータを取得する |
| 画面更新 | `lessonList.innerHTML = ...` | 取得したデータをリスト表示する |

## 動作確認方法

1. ブラウザで http://localhost:5500/src/api-practice/index.html を開く。
2. 最初に「まだデータを取得していません。」と表示されるか確認する。
3. 「データを取得する」ボタンを押し、学習項目がリスト表示されるか確認する。

## つまずいたこと

*

## 自分の言葉で説明

* APIは、フロントエンドがデータをやり取りするための入口。
* fetchは、JavaScriptからデータを取りに行く命令。
* 取得したデータは、JavaScriptで処理してからDOMを通じて画面に表示する。

## 自分の言葉で説明する練習

### 1. APIとは何ですか？

APIは、サーバーなどと情報をやり取りするための入口の役割を果たすもの。

### 2. fetchは何をしていますか？

`fetch` は、指定した場所にデータを取りに行く命令。

注意点: `fetch` 自体はデータを取得する役割。取得した結果を画面に表示するのは、その後のJavaScript処理とDOM操作の役割。

### 3. ボタンを押してから取得データが画面に表示されるまで、どんな順番で処理が進みますか？

実際のAPIでは、次のような流れになる。

```text
ユーザーがボタンを押す
↓
JavaScriptがfetchでAPIにデータを要求する
↓
サーバーが必要に応じてDBからデータを取得する
↓
サーバーがJSONをレスポンスとして返す
↓
JavaScriptがJSONを使える形に変換する
↓
JavaScriptがDOMを通じてHTMLを操作する
↓
取得したデータが画面に表示される
```

今回の練習では、本物のサーバーやDBの代わりに、同じフォルダ内の `data.json` を取得している。

```text
ユーザーがボタンを押す
↓
fetch("data.json")でJSONファイルを取得する
↓
response.json()でJavaScriptのデータに変換する
↓
showLessons関数でliタグを作る
↓
lessonList.innerHTMLで画面に表示する
```
