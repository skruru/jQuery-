# jQuery

jQueryはブラウザ間の違いを吸収してくれるJavascriptのライブラリのことです。  
Javascriptよりも簡単に動きなどを付けることができたり短く記述することができます。  
JavaScriptをいきなり始めると挫折してしまうことが多いので、JSを勉強する時はjQueryからスタートするといいですよ。

- [jQuery公式サイト](https://jquery.com/)
- [jQuery入門](http://www.jquerystudy.info/index.html)

## jQueryのバージョン

### 1系

IE8以前に対応させたい場合など古いブラウザに対応させたい場合に使用する。  
1.9で大きく仕様が変更されたので、古いものを修正するときは気をつける必要があります。

### 2系

IE9以降に対応させたものだが3系ができているので使用することはない。

### 3系

内部設計が見直されて処理速度などが改善さている。  
独自実装だったものからVanilaJSをラップしたものへの変更が行われている。

#### 3系スリムバージョン

近年jQueryが担ってきた役割がJavascriptの標準化された機能やCSSでまかなえるようになってきたため、ajaxやeffects(アニメーション等)を除いたバージョンとしてスリムバージョンが提供されています。  
ajaxは[axios](https://github.com/axios/axios)というライブラリや[Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)に置き換えることができます。  
アニメーションについてもjQueryのものは内部処理的に遅くなってしまうものを使用しているのでアニメーション専用のライブラリ([2019年注目のJavaScriptアニメーションライブラリ11選](https://qiita.com/baby-degu/items/2516bb55e97de612118b))などに置き換えることができます。

## jQuery の読込

### 読込場所

`head`、`body`の両方に書くことができますが、`body`の最後に書いた方が良いです。
`script`タグの内容は読み込んだ時点で実行されます。
これは`script`を読み込んだ順に実行することを担保するためです(例外あり)。
`script`タグに`src`属性が入っているとJavascriptファイルのダウンロードが終わるまでは`script`タグ以降の読込処理が止まります。
そうすると画面の構成要素が読み込まれないために画面の描画が始まらずページの読込が遅く感じてしまうので一番最後に読み込ませます。

### 読込方法

#### ローカルにダウンロードしたものを読み込む

[jQueryダウンロード](https://jquery.com/download/)からダウンロードしたものを読み込ませます。

```html
<!-- ローカルからの読込 -->
<script src="js/jquery-3.5.1.js"></script>
```

#### CDN(Content Delivery Network)のものを読み込む

Googleなどのサーバに設置されているものを使用させてもらいます。
自身の作成したサイト以外でキャッシュされているものが使用される場合があるので速度が有利になる場合があります。
CDNからjQueryを読み込むことができない場合に備えて、自サーバに配置したjQueryを読み込むように設定しておく必要があります。このように、代替手段を用意しておくことを「フォールバック」と言います。

```html
<!-- Google CDNからの読込 -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/jquery-3.5.1.min.js"><\/script>');</script>
```

## jQueryでできること

jQueryでやりたいことはエレメントの操作が主になります。  
ですので基本的に選択したエレメントに対して操作を行ったり、イベントを設定したりします。  
他にも生のJavascriptでは不便だった処理を簡単に実装できるユーティリティを備えています。

### リファレンスを分類してみる

- [リファレンス](http://www.jquerystudy.info/reference/index.html)

1. コアとなる仕組み(Core)
2. セレクタ(Selectors)・対象の変更(Traversing)
3. スタイルシート(CSS)・属性(Attributes)
4. 操作(Manipulation)
5. イベント(Events)
6. 演出効果(Effects)
7. ユーティリティ(Utilities)
8. 諸々(Miscellaneous)
9. xml等との連携(Ajax)
10. データ(Data)
11. 処理管理(Deferred)・コールバック(Callbacks)・内部処理(Internals)

#### コアとなる仕組み(Core)

jQueryは関数です。
引数にマッチしたjQueryオブジェクトを生成します。

```Javascript
// 下記はどちらも同じ
jQuery();
$();
```

#### セレクタ(Selectors)・対象の変更(Traversing)

セレクタは要素の選択の仕方です。  
対象の変更は選択した要素からさらに絞り込みをかけたり、隣の要素を選択するときに使用します。

セレクタの書き方はCSS3のセレクタプラスアルファです。  
これはCSS3が策定されるときにjQueryのものを取り入れたためです。

##### エレメントを選択してみよう

```Javascript
const $items = $('.js-nav-items1');

console.log($items);
```

##### 選択したエレメントの親要素を選択してみよう

```Javascript
const $items = $('.js-nav-items1');

const $ul = $items.parent();

console.log($ul);
```

##### 選択したエレメントの子要素を選択してみよう

```Javascript
const $items = $('.js-nav-items1');

const $a = $items.children('a');

console.log($a);
```

#### スタイルシート(CSS)・属性(Attributes)

スタイルシートでは要素のスタイルを変更したり、取得したりします。  
属性では要素の属性値を変更したり、取得したりします。

##### エレメントのスタイルを変更してみよう

```Javascript
const $items = $('.js-nav-items1');

$items.css('background-color', 'red');
```

##### クラスをつけてみよう

```Javascript
const $links = $('.js-nav-items1').children('a');

$links.addClass('active');
```

##### 属性を変更してみよう

```Javascript
const $items = $('.js-nav-items1');

const $a = $items.children('a');

$a.attr('href', '#1');
```

#### 操作(Manipulation)

操作では要素を追加したり削除したりします。

##### エレメントを追加してみよう

```Javascript
$('.nav').append('<li class="js-nav-items1 nav-item"><a class="nav-link" href="#">追加アイテム</a></li>');
```

##### 追加したアイテムはjQueryのオブジェクトには追加されない

```Javascript
const $items = $('.js-nav-items1');

$('.nav').append('<li class="js-nav-items1 nav-item"><a class="nav-link" href="#">追加アイテム</a></li>');

console.log($items);
```

##### テキストを書き換えてみよう

```javascript
const $btn = $('.js-btn');

$btn.text('ボタンを押してくれ～');
```

#### イベント(Events)

イベントはいろいろと種類がありますが、`on()`, `off()`, `trigger()`くらいです。  
なぜならば他のイベントのメソッドはすべてこれらのショートハンドだからです。

##### イベントを設定してみよう

```Javascript
const $links = $('.js-nav-items1').children('a');

$('.js-btn').click(function () {
  $links.toggleClass('active');
});
```

```Javascript
const $links = $('.js-nav-items1').children('a');

$('.js-btn').on('click', function () {
  $links.toggleClass('active');
});
```

#### 演出効果(Effects)

アニメーションなどを設定します。

##### エレメントに演出効果をつけよう

```Javascript
$('.js-btn').on('click', function () {
  $('.js-nav-items1').fadeToggle(1000);
});
```

#### ユーティリティ(Utilities)

Javascriptだけで書くと面倒なものなどのユーティリティを提供します。

##### ユーティリティをつかってみよう

```Javascript
const arr = ['リンゴ', 'みかん', 'パイナップル', 'バナナ'];

$.each(arr, function (index) {
  console.log(index + '番目は' + this);
});
```

```javascript
$('.js-btn').on('click', function () {
  $('.js-nav-items1').each(function () {
    console.log($(this).children('a').attr('href'));
  });
});
```

#### 諸々(Miscellaneous)

その他のメソッドやプロパティです。

##### コンテンツの数を取得しよう

```Javascript
$('.js-btn').on('click', function () {
  console.log($('.js-nav-items1').length);
});
```

#### xml等との連携(Ajax)

非同期でサーバからデータを取得するのに使います。  
APIの授業がありますので、その時に合わせて説明します。

- [はじめてajaxを使うときに知りたかったこと](https://qiita.com/nekoneko-wanwan/items/bedc0e826c0842ca0b11)
- [$.ajax();の覚え書き](https://qiita.com/hrdaya/items/e074b9816ab2da078bdd)

#### データ(Data)

データ属性の値を変更したり、取得したりします

- [いまさら聞けない、HTML5カスタムデータ属性の基本と使いどころ](https://www.webprofessional.jp/how-why-use-html5-custom-data-attributes/)

##### カスタムデータ属性を扱ってみよう

```Javascript
$('.js-btn').on('click', function () {
  $('.js-nav-items1').each(function () {
    console.log($(this).data('id'));
  });
});
```

#### 処理管理(Deferred)・コールバック(Callbacks)・内部処理(Internals)

処理管理についてはajaxで使用するコールバックの設定の部分のみどういう風に使うということが分かっていれば後は使用する機会はほとんどないです。  
また、コールバックについても使用する機会は無いでしょう。  
内部処理については主にプラグインなどの開発者向けになるので割愛します。

## jQuery実行のタイミング

jQueryだけとは限らずJavascriptは実行するタイミングの違いで思ったように動かないときが多々あります。
主な順番としては

1. 読み込んですぐ
2. DOMツリーが構築されたとき
3. すべてのコンテンツの読込が完了したとき

に分かれます。

`timing.js`を読み込むようにセットして順番を確認してみましょう。

基本的には「2. DOMツリーが構築されたとき」に実行すると思ったような結果が得られると思います。
`body`の閉じタグの直前に書いた場合は「DOMツリーが構築」後になるのでイベント等をセットする必要はないです。

## ホームページでよく見るスクロールをつくってみよう

### ページ内リンクにスムーズスクロールを実装

`smooth_scroll.js`を完成させてみよう

### トップに戻るの実装

`scroll_top.js`を完成させてみよう

## セレクトボックス間のアイテムを移動してみよう

`select.js`を完成させてみよう

## おまけ

- [「もうjQueryは必要ない」に関するみんなの反応](https://togetter.com/li/962240)
- [jQueryはオワコンなのか - ウェブアプリ開発者とウェブサイト制作者の大きな溝](https://togetter.com/li/1240562)
