# CSSとclassName

## 今日の目的

ReactでもCSSで見た目を整えるが、JSXではHTMLの `class` ではなく `className` を使うことを理解する。

## 作ったもの

`Header` componentに対応するCSS。

## 作成したファイル

```text
Task3/frontend-compare/react-ts/src/App.css
```

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| CSS | 画面の見た目を整える言語 | 色、余白、文字サイズなどを決めるもの |
| `className` | JSXでCSS classを指定する属性 | React版の `class` |
| セレクタ | どの要素にCSSを当てるかを指定する部分 | `.appHeader` など |
| プロパティ | 何を変えるかを表す部分 | `color`、`padding` など |
| 値 | どのように変えるかを表す部分 | `#1f5f8b`、`24px` など |

## HTML/CSS/JavaScript版ではどう考えるか

HTMLでは `class` を使い、CSSでは `.class名` で見た目を指定する。

```html
<header class="appHeader">
  <h1>社員検索アプリ</h1>
</header>
```

```css
.appHeader {
  padding: 24px 0;
}
```

## React+TypeScript版ではどう考えるか

ReactのJSXでは `class` ではなく `className` を使う。

```tsx
<header className="appHeader">
  <h1>社員検索アプリ</h1>
</header>
```

CSS側の書き方は通常のCSSと同じ。

```css
.appHeader {
  padding: 24px 0;
}
```

## 今回の違い

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 見た目の指定 | `class` を使う | `className` を使う |
| CSSの書き方 | `.appHeader` | `.appHeader` |
| 見るべき場所 | `index.html` と `style.css` | `Header.tsx` と `App.css` |

## コードと画面の対応

| 画面上の要素 | 対応するコード | 役割 |
|---|---|---|
| ヘッダー全体 | `.appHeader` | 下線と余白を指定する |
| 見出し | `.appHeader h1` | 文字色、文字サイズ、余白を指定する |
| 説明文 | `.appHeader p` | 文字色、行間、余白を指定する |

## 動作確認方法

1. 今回はCSSファイルだけを作成した。
2. `Header.tsx` の `className="appHeader"` を確認する。
3. `App.css` の `.appHeader` が対応していることを確認する。

## HTML/CSS/JavaScript版での考え方

HTMLに `class="appHeader"` を書き、CSSの `.appHeader` で見た目を当てる。

## React+TypeScript版での考え方

JSXに `className="appHeader"` を書き、CSSの `.appHeader` で見た目を当てる。

## 比較表

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面更新 | 今回はまだなし | 今回はまだなし |
| データ管理 | 今回はまだなし | 今回はまだなし |
| 見るべき場所 | HTMLの `class` とCSS | JSXの `className` とCSS |

## 自分の言葉で説明する練習

1. Reactの `className` は何のために使いますか？
2. CSS側では `.appHeader` は何を表していますか？
3. HTMLの `class` とReactの `className` は、何が違いますか？

## 自分の回答メモ

### 1. Reactの `className` は何のために使いますか？

Reactで利用するJSXの `className` は、CSSを当てるための名前をHTML要素に付けるために使う。

注意点: 「画面を認識するため」というより、「CSSを当てる対象を指定するため」と考えると正確。

### 2. CSS側では `.appHeader` は何を表していますか？

`.appHeader` は、`className="appHeader"` が付いた要素にCSSを当てるためのセレクタ。

注意点: `.appHeader` は `Header` componentそのものを表すのではなく、`Header` componentの中にある `<header className="appHeader">` の要素を表している。

### 3. HTMLの `class` とReactの `className` は、何が違いますか？

役割はほぼ同じで、どちらもCSSを当てるための名前を付ける。

違いは書く場所と書き方。

* HTMLでは `class` と書く。
* ReactのJSXでは `className` と書く。
