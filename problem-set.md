# Todo Task List 問題集

この問題集は、`index.html`、`style.css`、`script.js` の重要な部分を穴埋めしながら、Todoアプリの仕組みを理解するためのものです。

## HTML編

### 問題1

CSSファイルを読み込んでいるタグを完成させてください。

```html
<link rel="stylesheet" href="__________" />
```

答え: `style.css`

解説:  
`link` タグは外部CSSファイルをHTMLに読み込むために使います。`href="style.css"` と書くことで、同じフォルダにある `style.css` のデザインが画面に反映されます。

### 問題2

JavaScriptファイルを読み込んでいるタグを完成させてください。

```html
<script src="__________"></script>
```

答え: `script.js`

解説:  
`script` タグの `src` 属性には、読み込みたいJavaScriptファイルのパスを書きます。このアプリでは `script.js` にタスク追加や削除などの処理を書いています。

### 問題3

タスクを入力するフォームの `id` を答えてください。

```html
<form class="todo-form" id="__________">
```

答え: `todo-form`

解説:  
JavaScriptでは `document.querySelector("#todo-form")` を使って、このフォームを取得しています。`id` はページ内で特定の要素を見つけるための目印です。

### 問題4

JavaScriptからタスク一覧を表示するために使っている `ul` の `id` を答えてください。

```html
<ul class="todo-list" id="__________" aria-live="polite"></ul>
```

答え: `todo-list`

解説:  
`ul` はリストを表すHTMLタグです。JavaScriptでこの要素を取得し、`li` 要素を追加することでTodo一覧を画面に表示しています。

## CSS編

### 問題5

画面中央にTodoアプリを配置しているプロパティを埋めてください。

```css
.app {
  display: grid;
  min-height: 100vh;
  __________: center;
}
```

答え: `place-items`

解説:  
`place-items: center;` は、CSS Gridの中で要素を縦方向・横方向の両方で中央に配置する書き方です。`min-height: 100vh;` と組み合わせることで、画面全体の中央にパネルが置かれます。

### 問題6

スマホ幅のとき、入力欄と追加ボタンを縦並びにしている部分を完成させてください。

```css
@media (max-width: 560px) {
  .todo-form {
    grid-template-columns: __________;
  }
}
```

答え: `1fr`

解説:  
通常は `grid-template-columns: 1fr auto;` で入力欄とボタンを横並びにしています。画面幅が狭いときに `1fr` だけにすると、1列レイアウトになり、入力欄とボタンが縦に並びます。

### 問題7

完了済みタスクに取り消し線を付けているCSSを完成させてください。

```css
.todo-item.completed .todo-text {
  color: var(--muted);
  text-decoration: __________;
}
```

答え: `line-through`

解説:  
`text-decoration: line-through;` は文字に取り消し線を付けます。Todoが完了済みになったことを見た目で分かりやすくするために使っています。

## JavaScript編

### 問題8

HTMLからフォームを取得しているコードを完成させてください。

```js
const todoForm = document.querySelector("__________");
```

答え: `#todo-form`

解説:  
`document.querySelector()` は、CSSセレクタを使ってHTML要素を1つ取得します。`#todo-form` は `id="todo-form"` の要素を探す指定です。

### 問題9

ブラウザにTodoを保存するときのキー名を答えてください。

```js
const STORAGE_KEY = "__________";
```

答え: `todo-task-list`

解説:  
`localStorage` はキーと値の組み合わせでデータを保存します。`STORAGE_KEY` にキー名をまとめておくと、保存時と読み込み時で同じ名前を使いやすくなります。

### 問題10

フォーム送信時にページがリロードされないようにしているコードを完成させてください。

```js
todoForm.addEventListener("submit", (event) => {
  event.__________();

  const text = todoInput.value.trim();
});
```

答え: `preventDefault`

解説:  
HTMLフォームは送信すると通常ページを再読み込みします。`event.preventDefault()` を使うとその標準動作を止められるため、JavaScriptだけでTodoを追加できます。

### 問題11

入力欄が空だった場合、処理を止めるために使っているキーワードを答えてください。

```js
if (text === "") {
  todoInput.focus();
  __________;
}
```

答え: `return`

解説:  
`return` は関数の処理をそこで終了します。空文字のTodoを追加しないために、入力が空なら後続の追加処理へ進まないようにしています。

### 問題12

新しいTodoを配列に追加しているメソッドを答えてください。

```js
todos.__________({
  id: createTodoId(),
  text,
  completed: false,
});
```

答え: `push`

解説:  
`push()` は配列の末尾に新しい要素を追加するメソッドです。このアプリではTodoをオブジェクトとして作り、`todos` 配列に追加しています。

### 問題13

Todoを画面に再表示するために呼び出している関数名を答えてください。

```js
saveTodos();
__________();
```

答え: `renderTodos`

解説:  
`renderTodos()` は、現在の `todos` 配列をもとに画面のリストを作り直す関数です。データを変更した後に呼ぶことで、画面表示も最新の状態になります。

### 問題14

クリックされた要素に一番近い `.todo-item` を探すコードを完成させてください。

```js
const item = event.target.__________(".todo-item");
```

答え: `closest`

解説:  
`closest()` は、クリックされた要素自身または親要素をたどって、指定したセレクタに一致する一番近い要素を探します。チェックボックスや削除ボタンから、そのTodo全体の `li` を見つけるために使っています。

### 問題15

Todoの完了状態を反転させている部分を完成させてください。

```js
completed: !todo.__________,
```

答え: `completed`

解説:  
`!` は真偽値を反転する演算子です。`true` なら `false`、`false` なら `true` になります。これにより、未完了と完了を切り替えています。

### 問題16

指定したTodoだけを削除するために使っている配列メソッドを答えてください。

```js
todos = todos.__________((todo) => todo.id !== todoId);
```

答え: `filter`

解説:  
`filter()` は条件に合う要素だけを残して新しい配列を作るメソッドです。`todo.id !== todoId` とすることで、削除したいTodo以外を残しています。

### 問題17

未完了タスクだけを表示する条件を完成させてください。

```js
if (currentFilter === "active") {
  return todos.filter((todo) => !todo.__________);
}
```

答え: `completed`

解説:  
`completed` が `false` のTodoが未完了です。`!todo.completed` と書くことで、完了していないTodoだけを取り出しています。

### 問題18

localStorageに保存しているコードを完成させてください。

```js
localStorage.setItem(STORAGE_KEY, JSON.__________(todos));
```

答え: `stringify`

解説:  
`localStorage` には文字列として保存する必要があります。`JSON.stringify()` を使うと、配列やオブジェクトをJSON形式の文字列に変換できます。

### 問題19

localStorageから読み込んだ文字列を配列に戻しているコードを完成させてください。

```js
return JSON.__________(savedTodos);
```

答え: `parse`

解説:  
`JSON.parse()` はJSON形式の文字列をJavaScriptの値に戻します。保存時に文字列へ変換したTodo配列を、読み込み時に配列として使える形へ戻しています。

### 問題20

完了済みタスクの数を計算しているコードを完成させてください。

```js
const completedCount = todos.length - __________;
```

答え: `activeCount`

解説:  
`todos.length` は全タスク数、`activeCount` は未完了タスク数です。全体から未完了数を引くことで、完了済みタスク数を計算しています。

## 復習のすすめ

1. まず答えを見ずに穴埋めする
2. 分からない問題は元のファイルを確認する
3. 解説を読んだあと、実際にコードを少し変更して動きを見る
4. `script.js` の関数ごとに「何をしているか」を自分の言葉で説明してみる
