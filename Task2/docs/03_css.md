# CSS

## 今日の目的

CSSが画面の見た目と配置を整える役割を持っていることを理解する。

## 作ったもの

HTMLで作った部品に、CSSで色、余白、幅、背景色を指定したページ。

## アプリケーションURL

http://localhost:5500/src/css-practice/index.html

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| CSS | HTMLの見た目を整える言語 | 部品の色や余白を決めるもの |
| `link` | HTMLにCSSファイルを読み込ませるタグ | HTMLとCSSをつなぐもの |
| `color` | 文字色を指定するプロパティ | 文字の色を変える指定 |
| `background-color` | 背景色を指定するプロパティ | 背景の色を変える指定 |
| `margin` | 要素の外側の余白 | 他の部品との間隔 |
| `padding` | 要素の内側の余白 | 枠の中の余裕 |
| `width` | 要素の幅 | 部品の横幅 |

## CSS用語集

| コード・用語 | 役割 | 例 |
|---|---|---|
| CSS | HTMLの見た目を整える言語 | `style.css` |
| セレクタ | どのHTML要素にCSSを当てるかを指定する部分 | `body`、`.page`、`h1` |
| プロパティ | 何を変えるかを表す部分 | `color`、`margin` |
| 値 | どのように変えるかを表す部分 | `#ffffff`、`24px` |
| `body` | ページ全体にCSSを当てるセレクタ | `body { margin: 0; }` |
| `.page` | `class="page"` の要素にCSSを当てる | `.page { padding: 24px; }` |
| `h1` | `h1` タグにCSSを当てる | `h1 { color: #1f5f8b; }` |
| `color` | 文字色を指定する | `color: #202124;` |
| `background-color` | 背景色を指定する | `background-color: #ffffff;` |
| `font-family` | 文字の種類を指定する | `font-family: Arial, sans-serif;` |
| `margin` | 要素の外側の余白を指定する | `margin: 40px auto;` |
| `margin-top` | 要素の上側の外側余白を指定する | `margin-top: 24px;` |
| `padding` | 要素の内側の余白を指定する | `padding: 24px;` |
| `width` | 要素の横幅を指定する | `width: 640px;` |
| `display: block` | 要素を1行分のまとまりとして表示する | `display: block;` |
| `box-sizing: border-box` | `width` にpaddingやborderを含める | `box-sizing: border-box;` |
| `font-size` | 文字サイズを指定する | `font-size: 32px;` |
| `font-weight` | 文字の太さを指定する | `font-weight: bold;` |

## 処理の流れ

```text
HTMLを書く
↓
linkタグでCSSを読み込む
↓
ブラウザがHTMLとCSSを読み込む
↓
CSSの指定に合わせて見た目が変わる
```

## コードと画面の対応

| 画面上の要素 | コード上の場所 | 役割 |
|---|---|---|
| ページ全体 | `body` | 背景色、文字色、フォントを指定する |
| 白い表示エリア | `.page` | 幅、外側の余白、内側の余白、背景色を指定する |
| 大きな見出し | `h1` | 見出しの文字色を指定する |
| 説明文 | `.lead-text` | 説明文の文字色を指定する |
| ポイント欄 | `.memo-box` | 上の余白、内側の余白、背景色を指定する |

## 動作確認方法

1. ブラウザで http://localhost:5500/src/css-practice/index.html を開く。
2. ページ全体の背景が薄い青色になっているか確認する。
3. 白い表示エリア、青い見出し、薄い緑色のポイント欄が表示されるか確認する。

## つまずいたこと

*

## 自分の言葉で説明

* CSSは、HTMLで作った部品の見た目を整えるもの。
* `margin` は部品の外側の余白、`padding` は部品の内側の余白。
* HTMLとCSSは、HTMLの `link` タグでつながっている。

## 自分の言葉で説明する練習

### 1. CSSはWebページの中で何を担当していますか？

見た目を担当している。

### 2. `margin` と `padding` は何が違いますか？

`margin` は要素の外側の余白を作成し、`padding` は要素の内側の余白を作成する。

### 3. HTMLとCSSは、どのコードでつながっていますか？

HTMLとCSSファイルは、HTMLの `link` タグでつながっている。

```html
<link rel="stylesheet" href="style.css">
```

また、HTML内の `class` とCSS内の `.class名` によって、どのHTML要素にどの見た目を当てるかを決めている。

```html
<main class="page">
```

```css
.page {
  width: 640px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
}
```
