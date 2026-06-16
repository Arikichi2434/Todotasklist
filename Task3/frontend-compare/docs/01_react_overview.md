# Reactアプリ全体像

## 今日の目的

HTML/CSS/JavaScript版とReact+TypeScript版で、画面の作り方と更新方法がどう違うかを理解する。

## 作ったもの

React+TypeScript学習を始めるための全体像メモ。

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| React | 画面をcomponentに分け、stateの変化に応じて再描画する仕組み | 部品と状態で画面を作るためのもの |
| TypeScript | JavaScriptに型を追加した言語 | データの形を先に決めてミスを見つけやすくするもの |
| Vite | 開発サーバーやビルドを用意するツール | Reactアプリを動かすための開発環境 |
| component | 画面の一部を切り出した部品 | 見出し、検索欄、社員カードなどの画面部品 |
| JSX | TypeScriptの中にHTMLのように画面を書く記法 | componentの見た目を書くための書き方 |
| state | 画面の現在の状態を表すデータ | 検索文字、選択部署、社員一覧など |
| props | 親componentから子componentへ渡すデータ | 社員カードに渡す社員情報など |

## HTML/CSS/JavaScript版の考え方

```text
HTMLで画面構造を書く
↓
CSS classで見た目を整える
↓
JavaScriptでDOMを探す
↓
イベントが起きたら処理を動かす
↓
DOMを直接書き換えて画面を更新する
```

例:

```js
const countText = document.querySelector("#countText");
countText.textContent = count;
```

## React+TypeScript版の考え方

```text
componentで画面を分ける
↓
stateで画面の状態を持つ
↓
ユーザー操作でevent handlerが動く
↓
setStateでstateを変更する
↓
Reactがstateをもとに再描画する
```

例:

```tsx
const [count, setCount] = useState(0);

return <p>{count}</p>;
```

## index.html / main.tsx / App.tsx の役割

| ファイル | 役割 |
|---|---|
| `index.html` | Reactアプリを差し込む土台になるHTML |
| `src/main.tsx` | ReactアプリをHTMLの中に表示し始める入口 |
| `src/App.tsx` | アプリ全体の画面を作る中心component |

## Reactが画面を表示する流れ

```text
ブラウザがindex.htmlを読む
↓
index.htmlの中にあるroot要素を見つける
↓
main.tsxがApp componentをrootに差し込む
↓
App.tsxが画面をcomponentとして返す
↓
Reactがブラウザに画面を表示する
```

## HTML/CSS/JavaScript版とReact+TypeScript版の比較

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面構造 | HTMLを直接書く | componentで画面を分ける |
| 見た目 | CSSの`class`を使う | JSXの`className`を使う |
| イベント | `addEventListener`を使う | `onClick`や`onChange`を使う |
| 画面更新 | DOMを探して直接変更する | stateを変えてReactが再描画する |
| データ管理 | 変数や配列で管理する | 型付きstateで管理する |
| 見るべき場所 | HTML、CSS、JavaScriptの対応 | component、props、state、型の関係 |

## 今日学んだこと

* Reactは、画面をcomponentに分けて作る。
* Reactでは、画面を直接書き換えるのではなく、stateを変更して再描画する。
* TypeScriptは、社員データやpropsの形を型で確認するために使う。

## 動作確認方法

1. 今回は画面実装はまだ作っていない。
2. `Task3/frontend-compare/docs/01_react_overview.md` を開く。
3. 「HTML/CSS/JavaScript版」と「React+TypeScript版」の違いを声に出して説明する。

## 自分の言葉で説明する練習

1. Reactは何を担当するものですか？
2. HTML/CSS/JavaScript版では、画面をどう更新していましたか？
3. React+TypeScript版では、画面をどう更新しますか？

## 自分の回答メモ

### 1. Reactは何を担当するものですか？

画面をcomponentに分けて、stateの変化に応じて再描画する仕組み。

### 2. HTML/CSS/JavaScript版では、画面をどう更新していましたか？

JavaScriptでDOMを探して、直接書き換えて画面を更新する。

### 3. React+TypeScript版では、画面をどう更新しますか？

`main.tsx` がcomponentを `root` に差し込み、`App.tsx` が画面をcomponentとして返す。

その後、ユーザー操作などでstateが変わると、Reactがstateの変化をもとに画面を再描画する。

注意点: 「Reactが反応する」だけでなく、「stateの変化をきっかけにReactが再描画する」と説明するとより正確。
