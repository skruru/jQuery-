// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // トップへ戻るボタンのエレメントを取得
  // const $scrollTop = $('.scroll-top');
  const $scrollTop = $('.scroll-top').first(); //最初のやつだけ取得
  // ボタンをクリックしたらページトップまで戻るを実装
  $scrollTop.on('click', function () {
    // スクロールの速度(ミリ秒)
    const speed = 500;
    // スムーススクロールを実行
    $('html, body').animate({scrollTop: 0}, speed, 'swing');
  });

  // windowのスクロール位置でボタンの表示・非表示
  $(window).on('scroll', function () {
    // 表示の速度(ミリ秒)
    const speed = 500;
    // 現在のスクロール位置を取得(windowのscrollTopを取得)
    const currentScroll = $(window).scrollTop();
    // もし現在のスクロール位置が30を超えていたらトップへ戻るボタンのエレメントをfadeInで表示
    // 30を超えていない場合はfadeOutで非表示
    // if (currentScroll > 30){
    //   $scrollTop.fadeIn(speed);
    // } else {
    //   $scrollTop.fadeOut(speed);
    // }
    //　同じ
    if (currentScroll > 30){
      $scrollTop.fadeIn(speed);
      return; //return false;　は最終手段
    }
    $scrollTop.fadeOut(speed);
  });
});
