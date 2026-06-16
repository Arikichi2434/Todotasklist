# JSXとcomponent

## 今日の目的

Reactでは、画面をcomponentという部品に分け、JSXで表示内容を書くことを理解する。

## 作ったもの

社員検索アプリのタイトルと説明文を表示する `Header` component。

## 作成したファイル

```text
Task3/frontend-compare/react-ts/src/components/Header.tsx
```

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| component | 画面の一部を切り出した部品 | 見出しや検索欄などを部品にしたもの |
| JSX | TypeScriptの中にHTMLのように画面を書く記法 | componentの見た目を書く書き方 |
| `return` | componentが画面に表示する内容を返す | このcomponentが何を表示するか決める |
| `className` | JSXでCSS classを指定する属性 | React版の`class` |
| `export default` | 他のファイルからcomponentを使えるようにする書き方 | 作った部品を外に渡すための出口 |

## HTML/CSS/JavaScript版ではどう考えるか

HTML/CSS/JavaScript版では、タイトルや説明文を `index.html` に直接書く。

```html
<header class="appHeader">
  <h1>社員検索アプリ</h1>
  <p>社員一覧の表示・検索・部署フィルターを学びます。</p>
</header>
```

## React+TypeScript版ではどう考えるか

React+TypeScript版では、タイトルや説明文を `Header` componentとして切り出す。

```tsx
function Header() {
  return (
    <header className="appHeader">
      <h1>社員検索アプリ</h1>
      <p>React + TypeScriptで、社員一覧の表示・検索・部署フィルターを学びます。</p>
    </header>
  );
}
```

## 今回の違い

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面構造 | `index.html`に直接書く | `Header.tsx`のcomponentに分ける |
| 見た目の指定 | `class`を使う | `className`を使う |
| 再利用 | 同じHTMLをもう一度書く | componentとして呼び出して使える |

## コードと画面の対応

| 画面上の要素 | 対応するコード | 役割 |
|---|---|---|
| アプリの見出し | `<h1>社員検索アプリ</h1>` | アプリ名を表示する |
| 説明文 | `<p>...</p>` | 学習内容を説明する |
| ヘッダー全体 | `<header className="appHeader">` | タイトル部分のまとまりを作る |

## 動作確認方法

1. 今回は `Header` componentだけを作成した。
2. まだReactアプリ本体には接続していないため、ブラウザ表示は次のStep以降で確認する。
3. `Header.tsx` を開き、`h1` と `p` がJSXで書かれているか確認する。

## 自分の言葉で説明する練習

1. componentとは何ですか？
2. JSXとは何ですか？
3. HTMLの `class` とReactの `className` は、何が対応していますか？

## 自分の回答メモ

### 1. componentとは何ですか？

componentとは、ブラウザ画面の構成部品のこと。componentを集めることでブラウザ画面を作成する。

### 2. JSXとは何ですか？

JSXは、TypeScriptの中にHTMLのように画面を書く記法。

### 3. HTMLの `class` とReactの `className` は、何が対応していますか？

HTMLの `class` は、HTML要素にグループ名を付けて、CSSなどからまとめて扱いやすくするためのもの。

ReactのJSXでは、同じ役割を `className` で書く。

注意点: Reactでも `className` は主にCSSを当てるために使う。JavaScriptでDOMを直接探すためではなく、Reactではstateやpropsをもとに表示を変える。
