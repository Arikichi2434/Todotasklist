# TASKS_REACT_TS.md

# React + TypeScript 理解のためのタスク一覧

## 全体の流れ

最終的に理解したい大きな流れは、以下の通りです。

```text
ユーザーが画面を操作する
↓
イベントが発生する
↓
event handler が動く
↓
state が変わる
↓
React が再描画する
↓
component に新しい props / state が反映される
↓
必要に応じて useEffect と fetch でデータを取得する
↓
取得したデータを state に保存する
↓
画面に反映される
```

---

# 0. 比較用アプリを作る

## 目的

HTML/CSS/JavaScript版とReact+TypeScript版で、同じ社員検索アプリを作り、考え方の違いを比較できるようにする。

## 作るアプリ

社員検索アプリ

## 共通機能

- 社員一覧を表示する
- 検索欄に文字を入力する
- 部署で絞り込む
- 条件に合う社員だけ表示する
- 件数を表示する
- 社員カードをクリックすると選択状態にする
- 選択中社員をサマリーに表示する
- APIまたはJSONファイルから社員データを取得する
- 読み込み中・成功・失敗の状態を表示する

## 比較する観点

| 観点 | HTML/CSS/JavaScript版 | React+TypeScript版 |
|---|---|---|
| 画面の作り方 | HTMLを直接書く | componentで分ける |
| 見た目 | CSS classを直接当てる | componentごとにclassNameを当てる |
| 画面更新 | DOMを探して直接変更する | stateを変えて再描画する |
| データ | 配列や変数で管理する | 型付きのstateで管理する |
| イベント | addEventListener | onClick / onChange |
| API取得 | fetchしてDOMに反映 | useEffect + fetch + setState |
| 安全性 | 型チェックは弱い | TypeScriptで型を確認する |

---

# 1. Reactアプリ全体像を理解する

## 目的

React+TypeScriptアプリが、HTML/CSS/JavaScript版と何が違うのかを説明できるようにする。

## タスク

- [ ] Reactとは何かを説明する
- [ ] TypeScriptとは何かを説明する
- [ ] Viteとは何かを説明する
- [ ] `src/main.tsx` が何をしているか確認する
- [ ] `src/App.tsx` が何をしているか確認する
- [ ] `index.html` とReactの関係を確認する
- [ ] Reactでは、どこから画面が描画されるかを図にする

## 説明できるようにすること

- Reactは何を担当するか
- TypeScriptは何を担当するか
- Viteは何を担当するか
- `main.tsx` と `App.tsx` の役割
- ReactがHTMLに画面を差し込む流れ

## 到達目標

> Reactは、画面をcomponentという部品に分け、stateやpropsの変化に応じて画面を再描画する仕組みである。

---

# 2. JSXとcomponentを理解する

## 目的

Reactでは、画面をHTMLファイルではなくcomponentで組み立てることを理解する。

## タスク

- [ ] `App.tsx` に見出しを表示する
- [ ] `Header` componentを作る
- [ ] `SearchPanel` componentを作る
- [ ] `EmployeeCard` componentを作る
- [ ] componentを組み合わせて画面を作る
- [ ] JSXとHTMLの違いを整理する
- [ ] `class` ではなく `className` を使う理由を確認する

## 説明できるようにすること

- componentとは何か
- JSXとは何か
- Reactではなぜ画面を部品に分けるのか
- `className` は何に使うのか
- componentを分けるメリット

## 到達目標

> Reactでは、画面をcomponentという部品に分け、それらを組み合わせて画面を作る。

---

# 3. CSSとclassNameを理解する

## 目的

ReactでもCSSで見た目を整えるが、HTMLのclassではなくJSXのclassNameで指定することを理解する。

## タスク

- [ ] `App.css` を作成する
- [ ] `className` を使って見た目を当てる
- [ ] 社員カードの見た目を整える
- [ ] 検索欄の見た目を整える
- [ ] 選択中社員のカードに別のclassNameを付ける
- [ ] 条件によってclassNameを切り替える

## 説明できるようにすること

- ReactでCSSを使う方法
- `className` とは何か
- 条件付きclassNameとは何か
- 見た目の変更とstateの関係

## 到達目標

> Reactでは、CSSで見た目を整え、JSXではclassNameを使ってCSSを適用する。

---

# 4. TypeScriptの型を理解する

## 目的

社員データやpropsの形をTypeScriptで明確にする。

## タスク

- [ ] `Employee` 型を作る
- [ ] `Department` 型を作る
- [ ] `EmployeeCardProps` 型を作る
- [ ] propsに型を付ける
- [ ] stateに型を付ける
- [ ] 型エラーが出る例を確認する
- [ ] 型があると何が安全になるかを説明する

## 例

```ts
export type Department = "営業部" | "開発部" | "人事部";

export type Employee = {
  id: number;
  name: string;
  department: Department;
  skill: string;
};
```

## 説明できるようにすること

- TypeScriptの型とは何か
- `type` とは何か
- propsに型を付ける理由
- stateに型を付ける理由
- 型があるとミスを早く見つけられる理由

## 到達目標

> TypeScriptは、データやpropsの形をあらかじめ決めることで、コードのミスを早く見つけやすくする。

---

# 5. イベントとevent handlerを理解する

## 目的

Reactでは、`addEventListener` ではなく、JSXに `onClick` や `onChange` を書くことを理解する。

## タスク

- [ ] ボタンに `onClick` を設定する
- [ ] 入力欄に `onChange` を設定する
- [ ] `event.target.value` を取得する
- [ ] 入力内容をstateに保存する
- [ ] 社員カードをクリックしたら選択状態にする
- [ ] event handler関数を別に切り出す

## 説明できるようにすること

- Reactのevent handlerとは何か
- `onClick` は何をするか
- `onChange` は何をするか
- 入力値をstateに保存する流れ
- HTML/CSS/JavaScript版の `addEventListener` との違い

## 到達目標

> Reactでは、ユーザー操作に反応する処理をJSXのonClickやonChangeに書き、event handlerでstateを更新する。

---

# 6. stateを理解する

## 目的

Reactでは、画面を直接書き換えるのではなく、stateを変えることで画面が更新されることを理解する。

## タスク

- [ ] `useState` を使う
- [ ] `searchText` stateを作る
- [ ] `selectedDepartment` stateを作る
- [ ] `selectedEmployeeId` stateを作る
- [ ] `employees` stateを作る
- [ ] `loadingStatus` stateを作る
- [ ] stateが変わると画面が変わる例を確認する

## 例

```tsx
const [searchText, setSearchText] = useState("");
```

## 説明できるようにすること

- stateとは何か
- `useState` とは何か
- `setSearchText` のような更新関数は何をするか
- stateが変わるとなぜ画面が変わるのか
- DOM直接操作との違い

## 到達目標

> Reactでは、画面を直接変更するのではなく、stateを更新し、そのstateをもとにReactが画面を再描画する。

---

# 7. propsを理解する

## 目的

親componentから子componentへデータを渡す仕組みを理解する。

## タスク

- [ ] `EmployeeCard` に社員データをpropsで渡す
- [ ] `EmployeeList` に社員一覧をpropsで渡す
- [ ] `StatusSummary` に件数や選択中社員をpropsで渡す
- [ ] クリック時の関数をpropsで渡す
- [ ] propsは子component側で直接変更しないことを確認する
- [ ] propsとstateの違いを表にする

## 説明できるようにすること

- propsとは何か
- 親componentとは何か
- 子componentとは何か
- propsとstateの違い
- 関数をpropsで渡す理由

## 到達目標

> propsは、親componentから子componentへ渡す読み取り用のデータである。

---

# 8. データの流れを理解する

## 目的

Reactアプリで、データがどこにあり、どう加工され、どのcomponentに渡されるかを説明できるようにする。

## タスク

- [ ] 社員の元データを確認する
- [ ] `employees` stateを確認する
- [ ] `searchText` stateを確認する
- [ ] `selectedDepartment` stateを確認する
- [ ] `filter` を使って表示用社員一覧を作る
- [ ] 表示用社員一覧を `EmployeeList` に渡す
- [ ] `EmployeeList` が `EmployeeCard` を繰り返し表示する
- [ ] 「元データ → state → 加工 → props → 表示」の流れを図にする

## 説明できるようにすること

- 元データとは何か
- 表示用データとは何か
- `filter` は何をしているか
- stateとpropsを通じてデータが流れるとはどういうことか
- React版の入力・処理・出力

## 到達目標

> Reactでは、stateに保存したデータを加工し、propsでcomponentへ渡し、画面に表示する。

---

# 9. API / fetch / useEffectを理解する

## 目的

ReactでAPIやJSONファイルからデータを取得し、stateに保存して画面に反映する流れを理解する。

## タスク

- [ ] `public/data/employees.json` を用意する
- [ ] `useEffect` の中で `fetch` を使う
- [ ] 取得中は「読み込み中」と表示する
- [ ] 取得成功時は社員一覧を表示する
- [ ] 取得失敗時はエラーメッセージを表示する
- [ ] `response.json()` の意味を確認する
- [ ] 取得したデータを `setEmployees` でstateに保存する
- [ ] 「useEffect → fetch → response → setState → 再描画」の流れを図にする

## 説明できるようにすること

- APIとは何か
- fetchとは何か
- useEffectとは何か
- なぜuseEffectの中でfetchするのか
- 取得したデータをstateに保存する理由
- 通信失敗時にerror stateが必要な理由

## 到達目標

> Reactでは、useEffectの中でfetchを実行し、取得したデータをstateに保存することで、画面に反映する。

---

# 10. HTML/CSS/JavaScript版とReact+TypeScript版を比較する

## 目的

同じ社員検索アプリを2つの作り方で見比べ、考え方の違いを説明できるようにする。

## タスク

- [ ] 2つのアプリの画面を同じ見た目に近づける
- [ ] HTML/CSS/JavaScript版の処理の流れを書く
- [ ] React+TypeScript版の処理の流れを書く
- [ ] DOM直接操作とstate更新の違いを表にする
- [ ] addEventListenerとonChangeの違いを表にする
- [ ] 変数管理と型付きstate管理の違いを表にする
- [ ] fetch後の画面反映の違いを表にする
- [ ] 最後に自分の言葉で違いを説明する

## 到達目標

> HTML/CSS/JavaScript版は、必要なDOMを直接探して変更する考え方。React+TypeScript版は、stateとpropsと型を使って画面全体の変化を管理する考え方。
