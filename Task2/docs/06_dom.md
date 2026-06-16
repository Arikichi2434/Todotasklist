# DOM

## 今日の目的

DOMが、JavaScriptからHTML要素を取得したり変更したりするための仕組みであることを理解する。

## 作ったもの

ボタンを押すと、メッセージの文字と見た目が変わるページ。

## アプリケーションURL

http://localhost:5500/src/dom-practice/index.html

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| DOM | JavaScriptからHTMLを扱うための仕組み | JavaScriptが画面の部品を見つけたり変えたりするためのもの |
| `querySelector` | HTML要素を取得する命令 | 変更したい部品を探す |
| `textContent` | HTML要素の文字を変更する命令 | 画面の文字を書き換える |
| `classList.add()` | CSSクラスを追加する命令 | 見た目の指定を足す |
| `classList.remove()` | CSSクラスを削除する命令 | 見た目の指定を外す |

## DOMとは何か

DOMは、ブラウザがHTMLを読み込んだあとに作る「JavaScriptから操作できる画面の部品表」のようなもの。

HTMLファイルには文字としてタグが書かれている。ブラウザはそれを読み取り、JavaScriptから扱える形に変換する。その仕組みがDOM。

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

## DOM操作の代表例

| 操作 | 使うコード | 何をしているか |
|---|---|---|
| 要素を取得する | `document.querySelector("#statusMessage")` | HTMLから対象の要素を探す |
| 文字を変える | `statusMessage.textContent = "成功状態になりました。"` | 画面に表示される文字を変える |
| クラスを追加する | `statusMessage.classList.add("success")` | CSSの見た目を追加する |
| クラスを削除する | `statusMessage.classList.remove("success")` | CSSの見た目を外す |

## 処理の流れ

```text
ユーザーが「成功状態にする」ボタンを押す
↓
clickイベントが発生する
↓
showSuccess関数が実行される
↓
textContentでメッセージの文字を変更する
↓
classList.addでsuccessクラスを追加する
↓
画面の文字と見た目が変わる
```

## コードと画面の対応

| 画面上の要素 | コード上の場所 | 役割 |
|---|---|---|
| メッセージ欄 | `p id="statusMessage"` | JavaScriptで文字とCSSクラスを変更する |
| 成功ボタン | `button id="successButton"` | 成功状態にする操作を受け取る |
| リセットボタン | `button id="resetButton"` | 元の状態に戻す操作を受け取る |
| 要素取得 | `document.querySelector("#statusMessage")` | メッセージ欄をJavaScriptで取得する |
| 文字変更 | `statusMessage.textContent = ...` | メッセージ欄の文字を変える |
| クラス追加 | `statusMessage.classList.add("success")` | 成功状態の見た目を追加する |
| クラス削除 | `statusMessage.classList.remove("success")` | 成功状態の見た目を外す |

## 動作確認方法

1. ブラウザで http://localhost:5500/src/dom-practice/index.html を開く。
2. 「成功状態にする」ボタンを押し、文字と背景色が変わるか確認する。
3. 「元に戻す」ボタンを押し、文字と背景色が元に戻るか確認する。

## つまずいたこと

*

## 自分の言葉で説明

* DOMは、JavaScriptからHTML要素を取得したり変更したりするための仕組み。
* `textContent` は、HTML要素の文字を変更する。
* `classList.add()` と `classList.remove()` は、CSSクラスを追加・削除して見た目を変える。

## 自分の言葉で説明する練習

### 1. DOMとは何ですか？

JavaScriptからHTMLを操作するための仕組み。

### 2. `textContent` と `classList.add()` は、それぞれ何をしていますか？

`textContent` は、HTML要素の文字を読み取ったり、書き換えたりするためのもの。

`classList.add()` は、HTML要素にCSSクラスを追加するためのもの。CSSクラスを追加すると、そのクラスに書かれたCSSのルールが画面に反映される。

注意点: 入力欄に打ち込まれた文字を確認するときは、主に `input.value` を使う。`textContent` は、HTML要素の中に表示されている文字を扱う。

### 3. 「成功状態にする」ボタンを押してから画面が変わるまで、どんな順番で処理が進みますか？

ブラウザがクリックされたと判断する。

↓

登録されたクリック処理が動く。

↓

JavaScriptが対象のHTML要素を操作する。

↓

`textContent` でメッセージの文字列を変更する。

↓

`classList.add()` でCSSの `success` クラスを追加する。

↓

CSSのルールが反映され、画面の見た目が変わる。
