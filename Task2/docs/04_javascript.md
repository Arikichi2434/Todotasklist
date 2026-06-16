# JavaScript

## 今日の目的

JavaScriptが画面に動きをつける役割を持っていることを理解する。

## 作ったもの

ボタンを押すと、画面のメッセージが変わるページ。

## アプリケーションURL

http://localhost:5500/src/js-practice/index.html

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| JavaScript | 画面に動きや処理を追加する言語 | 操作に反応して画面を変えるもの |
| `script` | HTMLにJavaScriptファイルを読み込ませるタグ | HTMLとJavaScriptをつなぐもの |
| `const` | 値に名前をつける書き方 | 後で使うものに名前をつける |
| `function` | 処理をまとめる書き方 | やりたい処理に名前をつける |
| `querySelector` | HTML要素をJavaScriptから取得する命令 | 画面の部品を探して取ってくる |
| `textContent` | HTML要素の文字を変更する命令 | 画面の文字を書き換える |
| `addEventListener` | イベントが起きたときの処理を登録する命令 | ボタンが押されたら何をするか決める |

## JavaScript用語集

| コード・用語 | 役割 | 例 |
|---|---|---|
| JavaScript | ユーザー操作に反応して処理を動かす言語 | `script.js` |
| `<script src="script.js">` | HTMLにJavaScriptファイルを読み込ませる | `<script src="script.js"></script>` |
| `const` | あとから別の値を入れ直さない変数を作る | `const message = ...;` |
| `let` | あとから値を変える変数を作る | `let count = 0;` |
| 変数 | 値に名前をつけて使うもの | `const message` |
| 関数 | 処理をまとめて名前をつけたもの | `function changeMessage() { ... }` |
| `document` | ブラウザに読み込まれたHTML全体を表す | `document.querySelector(...)` |
| `querySelector` | CSSセレクタを使ってHTML要素を1つ取得する | `document.querySelector("#message")` |
| `#message` | `id="message"` の要素を探す指定 | `querySelector("#message")` |
| `.page` | `class="page"` の要素を探す指定 | `querySelector(".page")` |
| `textContent` | HTML要素の文字を読み書きする | `message.textContent = "..."` |
| `addEventListener` | イベントが起きたときに実行する関数を登録する | `button.addEventListener("click", changeMessage)` |
| `"click"` | クリックされたときのイベント名 | `addEventListener("click", ...)` |
| `"input"` | 入力欄の内容が変わったときのイベント名 | `addEventListener("input", ...)` |
| `value` | 入力欄に入っている現在の文字 | `memoInput.value` |
| `classList.add()` | HTML要素にCSSクラスを追加する | `statusMessage.classList.add("success")` |
| `classList.remove()` | HTML要素からCSSクラスを削除する | `statusMessage.classList.remove("success")` |
| 配列 | 複数のデータを順番にまとめる形 | `const tasks = ["HTML", "CSS"];` |
| `forEach` | 配列の中身を1つずつ取り出して処理する | `tasks.forEach(function(task) { ... })` |
| `innerHTML` | HTML要素の中身をHTML文字列として変更する | `taskList.innerHTML = "<li>HTML</li>";` |
| `fetch` | 指定した場所にデータを取りに行く | `fetch("data.json")` |
| `then` | 前の処理が終わったあとに次の処理をする | `.then(function(data) { ... })` |

## 処理の流れ

```text
ユーザーがボタンを押す
↓
clickイベントが発生する
↓
changeMessage関数が実行される
↓
textContentでメッセージを書き換える
↓
画面の文章が変わる
```

## コードと画面の対応

| 画面上の要素 | コード上の場所 | 役割 |
|---|---|---|
| メッセージ | `p id="message"` | JavaScriptで書き換える文章 |
| ボタン | `button id="changeButton"` | ユーザーが押す部品 |
| JavaScript読み込み | `script src="script.js"` | HTMLとJavaScriptをつなぐ |
| メッセージ取得 | `document.querySelector("#message")` | JavaScriptからメッセージ要素を取得する |
| ボタン取得 | `document.querySelector("#changeButton")` | JavaScriptからボタン要素を取得する |
| 文字変更 | `message.textContent = ...` | 画面の文章を書き換える |

## 動作確認方法

1. ブラウザで http://localhost:5500/src/js-practice/index.html を開く。
2. 最初に「まだボタンは押されていません。」と表示されるか確認する。
3. ボタンを押すと「ボタンが押されました。」に変わるか確認する。

## つまずいたこと

*

## 自分の言葉で説明

* JavaScriptは、ユーザー操作に反応して処理を動かすもの。
* 今回は、ボタンのクリックに反応してメッセージを変更した。
* 画面の文字は、`textContent` で変更した。

## 自分の言葉で説明する練習

### 1. JavaScriptはWebページの中で何を担当していますか？

JavaScriptはページの内部で、イベントが発生した際の処理と、その結果をHTMLやCSSに反映させる役割を持っている。

### 2. `querySelector` は何をしていますか？

`querySelector` は、HTMLの要素をJavaScriptで取得する役割を持っている。

### 3. ボタンを押してから文章が変わるまで、どんな順番で処理が進みますか？

ユーザーがボタンを押す。

↓

クリックイベントが発生する。

↓

JavaScriptがイベントを受け取る。

↓

JavaScriptの処理が動く。

↓

`textContent` によってHTMLの文章が書き換わる。

↓

画面に結果が反映される。

注意点: イベントはJavaScriptの中から自然に発生するのではなく、ユーザー操作などをきっかけに発生する。JavaScriptは、そのイベントを受け取って処理を動かす。
