---
marp: true
theme: default
paginate: true
---

# フロントエンド学習まとめ

HTML / CSS / JavaScript / Event / DOM / State / Data Flow / API・fetch

---

# 最終的に説明できるようにする流れ

```text
ユーザーが画面を操作する
↓
イベントが発生する
↓
JavaScriptの処理が動く
↓
Stateやデータが変わる
↓
DOMを通じて画面が更新される
↓
必要に応じてAPI・fetchでバックエンドと通信する
↓
取得したデータを画面に反映する
```

---

# Step 1: Webアプリ全体像

## 今日の目的

フロントエンド・バックエンド・DBが、それぞれ何を担当しているかを理解する。

## 到達目標

フロントエンドは、ユーザーが直接見る画面を作り、操作を受け取り、必要に応じてバックエンドと通信して画面を更新する部分である。

---

# Webアプリの構成図

```text
ユーザー
↓
ブラウザ
↓
フロントエンド
↓
API
↓
バックエンド
↓
DB
```

---

# フロントエンド・バックエンド・DB

| 用語 | 役割 | 自分の言葉で言うと |
|---|---|---|
| フロントエンド | 画面表示と操作の受付 | ユーザーが見る・触る場所 |
| バックエンド | データ処理や保存の判断 | 画面から見えない処理をする場所 |
| DB | データの保存 | アプリのデータをしまう場所 |
| API | やり取りの入口 | フロントエンドとバックエンドをつなぐ窓口 |

---

# 画面が表示されるまで

```text
ユーザーがWebアプリを開く
↓
ブラウザがHTML、CSS、JavaScriptを読み込む
↓
HTMLで画面の構造を作る
↓
CSSで見た目を整える
↓
JavaScriptで動きを準備する
↓
画面が表示される
```

---

# ユーザー操作後の流れ

```text
ユーザーが画面を操作する
↓
イベントが発生する
↓
JavaScriptの処理が動く
↓
必要に応じてAPIに通信する
↓
バックエンドが処理する
↓
必要に応じてDBからデータを取り出す
↓
結果がフロントエンドに返る
↓
画面が更新される
```

---

# Step 2: HTML

## HTMLとは

HTMLは、画面に必要な部品と構造を作るもの。

## 役割

- 見出しを置く
- 文章を置く
- 入力欄を置く
- ボタンを置く
- リストを置く

HTMLはWebページの骨組み。

---

# HTMLの主要タグ

| タグ・属性 | 役割 | 例 |
|---|---|---|
| `<h1>` | 一番重要な見出し | `<h1>タイトル</h1>` |
| `<h2>` | 小さめの見出し | `<h2>今日のテーマ</h2>` |
| `<p>` | 文章 | `<p>説明文</p>` |
| `<input>` | 入力欄 | `<input type="text">` |
| `<button>` | ボタン | `<button>追加する</button>` |
| `<ul>` | リスト全体 | `<ul>...</ul>` |
| `<li>` | リストの1項目 | `<li>HTML</li>` |

---

# HTMLの基本構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Practice</title>
</head>
<body>
  <h1>フロントエンド学習メモ</h1>
  <p>HTMLは画面の構造を作ります。</p>
</body>
</html>
```

---

# HTMLだけでできること・できないこと

## できること

- 見出しを表示する
- 文章を表示する
- 入力欄を置く
- ボタンを置く
- リストを表示する

## できないこと

- 見た目を細かく整える
- ボタンを押した後の処理を作る
- 入力内容に反応して画面を変える

---

# Step 3: CSS

## CSSとは

CSSは、HTMLで作った部品の見た目を整えるもの。

## 役割

- 色を変える
- 背景色を変える
- 余白を作る
- 幅や高さを決める
- 配置を整える

---

# HTMLとCSSのつながり

HTMLとCSSファイルは、HTMLの `link` タグでつながる。

```html
<link rel="stylesheet" href="style.css">
```

HTMLの部品とCSSの指定は、`class` や `id` で対応させる。

```html
<main class="page">
```

```css
.page {
  padding: 24px;
}
```

---

# CSSの基本

```css
セレクタ {
  プロパティ: 値;
}
```

例:

```css
h1 {
  color: #1f5f8b;
}
```

| 用語 | 意味 |
|---|---|
| セレクタ | どのHTML要素に当てるか |
| プロパティ | 何を変えるか |
| 値 | どのように変えるか |

---

# CSSの主要プロパティ

| プロパティ | 役割 | 例 |
|---|---|---|
| `color` | 文字色 | `color: #202124;` |
| `background-color` | 背景色 | `background-color: #ffffff;` |
| `font-family` | 文字の種類 | `font-family: Arial, sans-serif;` |
| `font-size` | 文字サイズ | `font-size: 32px;` |
| `font-weight` | 文字の太さ | `font-weight: bold;` |
| `width` | 横幅 | `width: 640px;` |
| `padding` | 内側の余白 | `padding: 24px;` |
| `margin` | 外側の余白 | `margin: 40px auto;` |

---

# margin と padding

```text
margin
要素の外側の余白
他の要素との間隔

padding
要素の内側の余白
枠の中の余裕
```

---

# Step 4: JavaScript

## JavaScriptとは

JavaScriptは、ユーザー操作に反応して処理を動かすもの。

## 役割

- ボタンが押されたら処理を動かす
- 入力された文字を読む
- Stateやデータを変更する
- DOMを通じて画面を更新する

---

# HTMLとJavaScriptのつながり

HTMLからJavaScriptファイルを読み込む。

```html
<script src="script.js"></script>
```

通常は `body` の最後あたりに書く。

理由:

- HTML要素が読み込まれたあとにJavaScriptを動かしやすい
- `querySelector` で要素を取得しやすい

---

# JavaScriptの基本用語

| 用語 | 意味 | 例 |
|---|---|---|
| `const` | 値を入れ直さない変数 | `const message = ...;` |
| `let` | あとから値を変える変数 | `let count = 0;` |
| 関数 | 処理をまとめたもの | `function changeMessage() { ... }` |
| `document` | HTML全体を表す | `document.querySelector(...)` |
| `querySelector` | HTML要素を取得する | `querySelector("#message")` |
| `textContent` | 文字を読み書きする | `message.textContent = "...";` |

---

# JavaScriptで画面を変える流れ

```text
ユーザーがボタンを押す
↓
clickイベントが発生する
↓
JavaScriptがイベントを受け取る
↓
JavaScriptの処理が動く
↓
textContentでHTMLの文章が変わる
↓
画面に結果が反映される
```

---

# JavaScriptの例

```js
const message = document.querySelector("#message");
const changeButton = document.querySelector("#changeButton");

function changeMessage() {
  message.textContent = "ボタンが押されました。";
}

changeButton.addEventListener("click", changeMessage);
```

---

# Step 5: イベント

## イベントとは

イベントとは、ユーザー操作などをきっかけにブラウザが発生させる合図。

操作そのものではなく、

```text
クリックされた
入力された
選択が変わった
```

という知らせ。

---

# 主要なイベント

| イベント名 | いつ発生するか | よく使う場面 |
|---|---|---|
| `click` | クリックされたとき | ボタンを押して処理を実行 |
| `input` | 入力欄の内容が変わったとき | 入力中の文字を反映 |
| `change` | 入力や選択が確定して変わったとき | セレクトやチェックボックス |
| `submit` | フォームが送信されたとき | 入力フォームの送信 |
| `keydown` | キーが押されたとき | Enterキーなどに反応 |

---

# addEventListener

イベントが起きたときに動かす処理を登録する。

```js
要素.addEventListener("イベント名", 実行する関数);
```

例:

```js
memoInput.addEventListener("input", showInputText);
```

意味:

```text
memoInputの入力内容が変わったら、
showInputText関数を実行する
```

---

# inputイベントの流れ

```text
ユーザーが入力欄に文字を入れる
↓
入力欄の内容が変わる
↓
inputイベントが発生する
↓
JavaScriptの関数が動く
↓
memoInput.valueで入力欄の文字を読む
↓
previewText.textContentでHTMLの表示を書き換える
↓
画面に入力した文字が表示される
```

---

# Step 6: DOM

## DOMとは

DOMは、JavaScriptからHTML要素を取得したり変更したりするための仕組み。

ブラウザがHTMLを読み込んだあとに作る、

```text
JavaScriptから操作できる画面の部品表
```

のようなもの。

---

# DOMができるまで

```text
HTMLファイル
↓
ブラウザが読み込む
↓
DOMとして扱える形になる
↓
JavaScriptがquerySelectorなどで要素を取得する
↓
textContentやclassListで画面を変更する
```

---

# DOM操作の代表例

| 操作 | 使うコード | 何をしているか |
|---|---|---|
| 要素を取得する | `document.querySelector("#statusMessage")` | HTMLから対象の要素を探す |
| 文字を変える | `statusMessage.textContent = "成功状態になりました。"` | 画面の文字を変える |
| クラスを追加する | `statusMessage.classList.add("success")` | CSSの見た目を追加する |
| クラスを削除する | `statusMessage.classList.remove("success")` | CSSの見た目を外す |

---

# DOM操作の流れ

```text
ユーザーがボタンを押す
↓
clickイベントが発生する
↓
JavaScriptの関数が実行される
↓
textContentで文字を変更する
↓
classList.addでCSSクラスを追加する
↓
画面の文字と見た目が変わる
```

---

# Step 7: State

## Stateとは

Stateは、画面の現在の状態を表すデータ。

画面に表示されている内容そのものではなく、

```text
表示のもとになるデータ
```

として考える。

---

# Stateの例

| アプリの例 | Stateの例 | 画面への影響 |
|---|---|---|
| カウントアプリ | 現在のカウント数 | 表示される数字が変わる |
| ToDoアプリ | タスク一覧、入力中の文字、完了状態 | 一覧やチェック状態が変わる |
| クイズアプリ | 現在の問題番号、選んだ答え、正解かどうか | 問題文や結果表示が変わる |
| 検索アプリ | 検索文字、表示中のデータ | 表示される一覧が絞り込まれる |

---

# Stateのコード例

```js
let count = 0;

function showCount() {
  countText.textContent = count;
}

function increaseCount() {
  count = count + 1;
  showCount();
}
```

`count` がState。

---

# Stateが画面に反映される流れ

```text
ユーザーがボタンを押す
↓
イベントが起きる
↓
JavaScriptの処理が動く
↓
countというStateが変わる
↓
showCount関数が動く
↓
DOMを通じてHTMLを書き換える
↓
画面の数字が変わる
```

---

# Step 8: データの流れ

## データフローとは

データがどこから来て、どの処理を通って、どう画面に表示されるかの流れ。

大事な考え方:

```text
元データと画面表示は同じものではない
```

画面表示は、JavaScriptが元データをHTMLの形に変換し、DOMに反映した結果。

---

# データフローの図

```text
元データ
tasks配列
↓
処理
showTasks関数
↓
繰り返し
tasks.forEach
↓
HTML化
"<li>" + task + "</li>"
↓
DOM更新
taskList.innerHTML
↓
画面表示
タスク一覧のリスト
```

---

# 入力・処理・出力

| 区分 | 今回のコード | 役割 |
|---|---|---|
| 入力 | `tasks` 配列 | 表示したい元データ |
| 処理 | `showTasks()` | データを画面表示用に変換する |
| 加工 | `tasks.forEach(...)` | 配列の中身を1つずつ取り出す |
| 出力 | `taskList.innerHTML` | 画面にリストとして表示する |

---

# 配列データを表示する例

```js
const tasks = [
  "HTMLの役割を説明する",
  "CSSの役割を説明する",
  "JavaScriptの役割を説明する"
];

function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task) {
    taskList.innerHTML = taskList.innerHTML + "<li>" + task + "</li>";
  });
}
```

---

# Step 9: API / fetch

## APIとは

APIは、フロントエンドとサーバーがデータをやり取りするための入口。

フロントエンドはサーバーやDBを直接触らない。

APIに対して、

```text
このデータをください
このデータを保存してください
```

とお願いする。

---

# APIの流れ

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

---

# fetchとは

`fetch` は、JavaScriptから指定したURLにデータを取りに行く命令。

`fetch` の役割:

```text
データを取得すること
```

取得したデータを画面に表示するには、その後にJavaScriptで処理し、DOMを通じてHTMLを更新する。

---

# fetchのコード例

```js
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    showLessons(data.lessons);
  });
```

意味:

```text
JSONを取りに行く
↓
JavaScriptで使える形に変える
↓
画面表示用の関数に渡す
```

---

# API / fetch の流れ

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

---

# 全体のまとめ

```text
HTML
画面の構造を作る
↓
CSS
見た目を整える
↓
JavaScript
操作に反応して処理を動かす
↓
Event
ユーザー操作をきっかけに発生する合図
↓
State / Data
画面の状態や表示するデータ
↓
DOM
HTMLを取得・変更して画面を更新する仕組み
↓
API / fetch
外部やサーバーからデータを取得する仕組み
```

---

# 自分の言葉で説明する最終練習

1. HTML、CSS、JavaScriptはそれぞれ何を担当していますか？
2. ユーザーがボタンを押してから画面が変わるまで、何が起きますか？
3. Stateが変わると、なぜ画面も変わるのですか？
4. DOMは何のためにありますか？
5. fetchで取得したデータは、どうやって画面に表示されますか？

---

# 最終説明文

フロントエンドでは、HTMLで画面構造を作り、CSSで見た目を整え、JavaScriptでユーザー操作に反応する。

ユーザーがクリックや入力をするとイベントが発生し、JavaScriptの処理によってStateやデータが変わる。

その結果、DOMを通じて画面が更新される。

必要に応じてAPIを使い、fetchでバックエンドと通信し、取得したデータを画面に反映する。
