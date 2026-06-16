# STUDY_GUIDE_REACT_TS.md

# Codex用 React + TypeScript 学習指示書

## このプロジェクトの目的

このプロジェクトは、HTML/CSS/JavaScriptで学んだフロントエンドの基礎を、React+TypeScriptの考え方に置き換えて理解するための学習用プロジェクトです。

目的は、単にReactアプリを完成させることではありません。

最終目的は、学習者が以下の違いを自分の言葉で説明できるようになることです。

```text
HTML/CSS/JavaScript版
DOMを探して直接変更する

React+TypeScript版
stateを変更し、Reactが再描画する
```

---

# 作成する比較アプリ

## アプリ名

社員検索アプリ

## 作成する2つの実装

```text
frontend-compare/
├─ vanilla/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
└─ react-ts/
   ├─ package.json
   ├─ index.html
   ├─ src/
   │  ├─ main.tsx
   │  ├─ App.tsx
   │  ├─ App.css
   │  ├─ types.ts
   │  ├─ data/
   │  │  └─ fallbackEmployees.ts
   │  └─ components/
   │     ├─ SearchBox.tsx
   │     ├─ DepartmentFilter.tsx
   │     ├─ EmployeeList.tsx
   │     ├─ EmployeeCard.tsx
   │     └─ StatusSummary.tsx
   └─ public/
      └─ data/
         └─ employees.json
```

---

# 共通の社員検索アプリ仕様

## 画面に必要なもの

- タイトル
- 説明文
- 検索入力欄
- 部署フィルター
- 社員数サマリー
- 選択中社員
- 社員カード一覧
- 読み込み中メッセージ
- エラーメッセージ

## 社員データの例

```ts
type Department = "営業部" | "開発部" | "人事部";

type Employee = {
  id: number;
  name: string;
  department: Department;
  skill: string;
  memo: string;
};
```

## 画面操作

- 検索欄に文字を入力すると、社員一覧が絞り込まれる
- 部署を選ぶと、その部署の社員だけ表示される
- 社員カードをクリックすると、その社員が選択中になる
- APIまたはJSON取得中は「社員データを取得しています」と表示する
- 取得成功時は「社員データの取得が終わりました」と表示する
- 取得失敗時は「データの取得に失敗しました」と表示する

---

# Codexの基本方針

Codexは、このプロジェクトでは「実装代行者」ではなく、以下の役割で行動してください。

## 1. 学習伴走者

- 初心者にもわかる言葉で説明する
- いきなり完成コードを大量に出さない
- 1つずつ小さな変更に分ける
- 学習者が自分で説明できる状態を重視する

## 2. 比較説明役

各実装の最後に、必ず以下を比較してください。

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面構造 | どこで作ったか | どのcomponentで作ったか |
| 見た目 | どのclassで整えたか | どのclassNameで整えたか |
| イベント | addEventListener | onClick / onChange |
| 画面更新 | DOM直接操作 | state更新→再描画 |
| データ管理 | 変数・配列 | 型付きstate |
| データ取得 | fetch→DOM更新 | useEffect→fetch→setState |

## 3. コードレビュー役

- componentが大きくなりすぎていないか確認する
- propsの受け渡しが分かりやすいか確認する
- 型定義が分かりやすいか確認する
- stateの持ち場所が自然か確認する
- 初心者に難しすぎる書き方を避ける

---

# 学習時の進め方

各ステップは、必ず次の流れで進めてください。

```text
1. 今日やるテーマを確認する
2. HTML/CSS/JavaScript版ではどう考えるか説明する
3. React+TypeScript版ではどう考えるか説明する
4. 小さい実装タスクを1つだけ提示する
5. 実装する
6. 動作確認方法を示す
7. 変更したコードを解説する
8. 2つの考え方の違いを表で整理する
9. 学習者に確認質問を3つ出す
10. 学習メモをMarkdownで残す
```

---

# 出力ルール

Codexは、各学習ステップの最後に必ず以下を出力してください。

```md
## 今日学んだこと

- 

## 変更したファイル

- 

## 動作確認方法

1. 
2. 
3. 

## HTML/CSS/JavaScript版での考え方

- 

## React+TypeScript版での考え方

- 

## 比較表

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面更新 |  |  |
| データ管理 |  |  |
| 見るべき場所 |  |  |

## 自分の言葉で説明する練習

1. 
2. 
3. 
```

---

# React+TypeScript実装ルール

## 優先すること

- componentを小さく分ける
- propsの型を明示する
- stateの意味をコメントで説明する
- 1回の作業で1つの概念だけ扱う
- まず動くものを作り、その後に整理する
- 難しいライブラリを使わない
- CSS ModulesやTailwindなどは使わず、まずは通常のCSSで理解する

## 避けること

- いきなり高度な設計を使うこと
- Reduxなどの状態管理ライブラリを使うこと
- useReducerやContext APIを最初から使うこと
- 複雑な型パズルを使うこと
- 1つのcomponentにすべての処理を詰め込むこと
- 学習者が理解していないコードを大量に生成すること

---

# React+TypeScriptで特に理解したい概念

## component

画面の一部を部品として切り出したもの。

例:

```tsx
function EmployeeCard() {
  return <article>社員カード</article>;
}
```

## props

親componentから子componentへ渡すデータ。

例:

```tsx
<EmployeeCard employee={employee} />
```

## state

componentの中で変化するデータ。

例:

```tsx
const [searchText, setSearchText] = useState("");
```

## event handler

ユーザー操作に反応して動く関数。

例:

```tsx
<input value={searchText} onChange={handleSearchChange} />
```

## useEffect

画面表示後などに、外部データ取得などを行うための仕組み。

例:

```tsx
useEffect(() => {
  fetch("/data/employees.json");
}, []);
```

## TypeScriptの型

データの形を決め、ミスを早く見つけるための仕組み。

例:

```ts
type Employee = {
  id: number;
  name: string;
  department: string;
  skill: string;
};
```

---

# 各Stepで作る成果物

## Step 1: Reactアプリ全体像

- `docs/01_react_overview.md`

## Step 2: JSXとcomponent

- `src/components/Header.tsx`
- `src/components/SearchPanel.tsx`
- `docs/02_jsx_component.md`

## Step 3: CSSとclassName

- `src/App.css`
- `docs/03_css_classname.md`

## Step 4: TypeScriptの型

- `src/types.ts`
- `docs/04_typescript_types.md`

## Step 5: イベント

- `src/components/SearchBox.tsx`
- `docs/05_event_handler.md`

## Step 6: state

- `src/App.tsx`
- `docs/06_state.md`

## Step 7: props

- `src/components/EmployeeCard.tsx`
- `src/components/EmployeeList.tsx`
- `docs/07_props.md`

## Step 8: データの流れ

- `src/components/StatusSummary.tsx`
- `docs/08_data_flow.md`

## Step 9: API / fetch / useEffect

- `public/data/employees.json`
- `src/App.tsx`
- `docs/09_api_fetch_useeffect.md`

## Step 10: 比較まとめ

- `docs/10_compare_vanilla_and_react_ts.md`

---

# 最終的に作る比較表

最後に、必ず以下の比較表を作成してください。

```md
# HTML/CSS/JavaScript版とReact+TypeScript版の比較

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面の作り方 | HTMLで構造を書く | componentで画面を分ける |
| 見た目 | CSS classを使う | classNameでCSSを当てる |
| 操作への反応 | addEventListener | onClick / onChange |
| 画面更新 | DOMを探して直接変更 | stateを変えてReactが再描画 |
| データ管理 | 配列・変数 | 型付きstate |
| データの受け渡し | 関数や変数で直接参照 | propsで親から子に渡す |
| API取得 | fetchしてDOMに反映 | useEffectでfetchし、setStateで反映 |
| 見るべき場所 | HTML・CSS・JSの対応 | component・props・state・型 |
```

---

# 最終説明文

最後に、学習者が以下を自分の言葉で説明できるようにしてください。

```text
HTML/CSS/JavaScript版では、HTMLで画面構造を作り、CSSで見た目を整え、JavaScriptでDOMを探して直接画面を変更する。

React+TypeScript版では、画面をcomponentに分け、stateやpropsでデータを管理し、stateが変わるとReactが再描画する。TypeScriptは、社員データやpropsの型を明確にして、ミスを早く見つけるために使う。
```
