# TypeScriptの型

## 今日の目的

社員データの形をTypeScriptで定義し、データの項目や値の種類を明確にする。

## 作ったもの

社員検索アプリで使う `Department` 型と `Employee` 型。

## 作成したファイル

```text
Task3/frontend-compare/react-ts/src/types.ts
```

## 重要な用語

| 用語 | 意味 | 自分の言葉で言うと |
|---|---|---|
| TypeScript | JavaScriptに型を追加した言語 | データの形を先に決められるJavaScript |
| `type` | データの形に名前を付ける書き方 | 社員データの設計図を作るもの |
| `string` | 文字列の型 | 名前やスキルなどの文字 |
| `number` | 数値の型 | IDなどの数字 |
| union type | 複数の決まった値だけを許す型 | `"営業部"`か`"開発部"`か`"人事部"`だけ許す |

## 今回作った型

```ts
export type Department = "営業部" | "開発部" | "人事部";

export type Employee = {
  id: number;
  name: string;
  department: Department;
  skill: string;
  memo: string;
};
```

## HTML/CSS/JavaScript版ではどう考えるか

HTML/CSS/JavaScript版では、社員データを配列やオブジェクトとして持つ。

ただし、データの形が間違っていても、コードを書く時点では気づきにくい。

```js
const employee = {
  id: 1,
  name: "山田太郎",
  department: "営業部",
  skill: "提案"
};
```

## React+TypeScript版ではどう考えるか

React+TypeScript版では、社員データの形を `Employee` 型として先に決める。

```ts
export type Employee = {
  id: number;
  name: string;
  department: Department;
  skill: string;
  memo: string;
};
```

これにより、`name` を書き忘れたり、`department` に存在しない部署名を書いたりしたときに、TypeScriptが気づきやすくなる。

## 今回の違い

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| データの形 | オブジェクトとして自由に作る | `type` で形を決める |
| 部署名 | どんな文字列でも入る | `Department` 型で候補を限定する |
| ミスの見つけ方 | 実行してから気づくことが多い | 書いている段階で型エラーに気づきやすい |

## コードとデータの対応

| データ項目 | 型 | 役割 |
|---|---|---|
| `id` | `number` | 社員を識別する番号 |
| `name` | `string` | 社員名 |
| `department` | `Department` | 所属部署 |
| `skill` | `string` | 得意なこと |
| `memo` | `string` | 補足説明 |

## 動作確認方法

1. `Task3/frontend-compare/react-ts/src/types.ts` を開く。
2. `Department` 型が `"営業部" | "開発部" | "人事部"` になっているか確認する。
3. `Employee` 型に `id`、`name`、`department`、`skill`、`memo` があるか確認する。

## HTML/CSS/JavaScript版での考え方

社員データはオブジェクトや配列で管理するが、データの形はコード上で強く確認されない。

## React+TypeScript版での考え方

社員データの形を `type` で定義し、その型をcomponentやstateやpropsで使う。

## 比較表

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面更新 | 今回はまだなし | 今回はまだなし |
| データ管理 | 配列やオブジェクトで管理 | `Employee` 型を使って管理 |
| 見るべき場所 | データが書かれているJS | `types.ts` |

## 自分の言葉で説明する練習

1. TypeScriptの型は何のためにありますか？
2. `Employee` 型は何を表していますか？
3. `Department` 型で部署名を限定すると、何がよくなりますか？
