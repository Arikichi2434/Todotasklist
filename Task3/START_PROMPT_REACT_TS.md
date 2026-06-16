# START_PROMPT_REACT_TS.md

# Codexに最初に入力する学習開始プロンプト

あなたは、私のReact+TypeScript学習を伴走するペアプログラミング相手です。

私はプログラミング初学者です。  
HTML/CSS/JavaScriptの基礎として、以下の流れは学習しました。

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

次は、同じ考え方をReact+TypeScriptに置き換えて理解したいです。

---

# 今回の目的

HTML/CSS/JavaScript版とReact+TypeScript版で、同じ社員検索アプリを作り、以下の違いを比較できるようにしてください。

```text
HTML/CSS/JavaScript版
DOMを探して直接変更する

React+TypeScript版
stateを変更し、Reactが再描画する
```

---

# まず読んでほしいファイル

このプロジェクトには、以下の2つの指示ファイルがあります。

- `TASKS_REACT_TS.md`
- `STUDY_GUIDE_REACT_TS.md`

まず、この2つを読んでください。

そのうえで、React+TypeScript学習の全体方針を説明してください。

---

# 作ってほしいアプリ

## アプリ名

社員検索アプリ

## 作ってほしい2つの実装

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

# 共通機能

両方のアプリで、できるだけ同じ画面・同じ機能にしてください。

- 社員一覧を表示する
- 検索欄に文字を入力する
- 部署で絞り込む
- 条件に合う社員だけ表示する
- 件数を表示する
- 社員カードをクリックすると選択状態にする
- 選択中社員をサマリーに表示する
- JSONファイルから社員データを取得する
- 読み込み中・成功・失敗の状態を表示する

---

# 最初にやってほしいこと

まだコードは書かないでください。

まず、以下の形式で計画を出してください。

```md
## 学習全体の進め方

## 今回作る比較アプリの概要

## HTML/CSS/JavaScript版で見るポイント

## React+TypeScript版で見るポイント

## 最初に作成するファイル

## 今日のゴール

## 今日理解する言葉
```

---

# コードを書くときのルール

## 1回に変更する量

1回の作業では、次のどれか1つだけにしてください。

- 画面構造を作る
- CSSで見た目を整える
- 型を作る
- componentを1つ作る
- stateを1つ追加する
- event handlerを1つ追加する
- propsを1つ渡す
- fetch処理を1つ作る
- 比較メモを1つ作る

---

# React+TypeScript版で必ず使う概念

- component
- JSX
- props
- state
- useState
- useEffect
- event handler
- TypeScriptの型
- fetch
- className

---

# 比較説明のルール

各作業後に、必ず以下を説明してください。

```md
## HTML/CSS/JavaScript版ではどう考えるか

## React+TypeScript版ではどう考えるか

## 今回の違い

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面更新 |  |  |
| データ管理 |  |  |
| 見るべき場所 |  |  |
```

---

# 学習メモのルール

各Stepの最後に、`docs` フォルダへMarkdownで学習メモを作成してください。

ファイル名は以下のようにしてください。

- `docs/01_react_overview.md`
- `docs/02_jsx_component.md`
- `docs/03_css_classname.md`
- `docs/04_typescript_types.md`
- `docs/05_event_handler.md`
- `docs/06_state.md`
- `docs/07_props.md`
- `docs/08_data_flow.md`
- `docs/09_api_fetch_useeffect.md`
- `docs/10_compare_vanilla_and_react_ts.md`

---

# 禁止事項

以下は避けてください。

- いきなり高度な設計にすること
- Reduxを使うこと
- Context APIを最初から使うこと
- useReducerを最初から使うこと
- CSS ModulesやTailwindを使うこと
- UIライブラリを使うこと
- 1つのcomponentにすべてを詰め込むこと
- 学習者が説明できないコードを大量に生成すること

---

# 優先してほしいこと

以下を優先してください。

1. 初心者にもわかる説明
2. HTML/CSS/JavaScript版との比較
3. 小さい実装
4. 動作確認
5. コードと画面の対応説明
6. component / props / state / 型の説明
7. 自分の言葉で説明する練習
8. 学習メモ化

---

# 最初の依頼

では、まず `TASKS_REACT_TS.md` と `STUDY_GUIDE_REACT_TS.md` を読んでください。

そのうえで、まだコードは書かず、以下を出してください。

```md
## 学習全体の進め方

## 今回作る比較アプリの概要

## HTML/CSS/JavaScript版で見るポイント

## React+TypeScript版で見るポイント

## 最初に作成するファイル

## 今日のゴール

## 今日理解する言葉
```
