// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // 未選択のセレクトボックス
  const $noneSelected = $('#none-selected-items');

  // 選択済みのセレクトボックス
  const $selected = $('#selected-items');

  // 一つの関数でまとめる
  const move = function($from, $to, $optionKey) {
    const $options = $from.children('optionKey');
    $options.prop('selected', false); //値を入れる時は基本prop
    $to.appendTo($options);
  };
  // 関数を使うと。。。
//    // 右に移動
//    $('.js-item-to-right').on('click', function () {
//     move($noneSelected, $selected, 'option:selected');
//   });
// ​
//   // 右に全て移動
//   $('.js-item-to-right-all').on('click', function () {
//     move($noneSelected, $selected, 'option');
//   });
// ​
//   // 左に移動
//   $('.js-item-to-left').on('click', function () {
//     move($selected, $noneSelected, 'option:selected');
//   });
// ​
//   // 左に全て移動
//   $('.js-item-to-left-all').on('click', function () {
//     move($selected, $noneSelected, 'option');
//   });

  // 右に移動
  $('.js-item-to-right').on('click', function () {
    // 選択されているoption(option:selected)を取得
    // let $optionSelected = $('#none-selected-items option:selected');
    const $options = $noneSelected.children('option:selected');
    // 選択を解除
    // $optionSelected.prop('selected', false);
    $options.prop('selected', false); //値を入れる時は基本prop
    // 選択済みのセレクトボックスに移動
    // $optionSelected.appendTo($selected);
    $selected.appendTo($options);
    showBtn();
  });

  // 右に全て移動
  $('.js-item-to-right-all').on('click', function () {
    // 全てのoptionを取得
    // const $optionSelecteds = $('#none-selected-items > option');
    const $options = $noneSelected.children('option');
    // 選択済みのセレクトボックスに移動
    // $optionSelecteds.appendTo($selected);
    $selected.append($options);
    showBtn();
  });

  // 左に移動
  $('.js-item-to-left').on('click', function () {
    // 選択されているoption(option:selected)を取得
    let $optionSelected = $('#selected-items option:selected');
    // 選択を解除
    $optionSelected.prop('selected', false);
    // 未選択のセレクトボックスに移動
    $optionSelected.appendTo($noneSelected);
    showBtn();
  });

  // 左に全て移動
  $('.js-item-to-left-all').on('click', function () {
    // 全てのoptionを取得
    const $optionSelecteds = $('#selected-items > option');
    // 未選択のセレクトボックスに移動
    $optionSelecteds.appendTo($noneSelected);
    showBtn();
  });

  //ボタンの関数
  function showBtn() {
    if ($('#selected-items > option').length === 0){
      $('.js-item-to-left').prop('disabled', true);
      $('.js-item-to-left-all').prop('disabled', true);
    } else {
      $('.js-item-to-left').prop('disabled', false);
      $('.js-item-to-left-all').prop('disabled', false);
    }

    if ($('#none-selected-items > option').length === 0){
      $('.js-item-to-right').prop('disabled', true);
      $('.js-item-to-right-all').prop('disabled', true);
    } else {
      $('.js-item-to-right').prop('disabled', false);
      $('.js-item-to-right-all').prop('disabled', false);
    }

    // $items = $('#selected-items > option').length;

    // switch ($items) {
    //   case 0:
    //     $('.js-item-to-left, .js-item-to-left-all').prop('disabled', true);
    //     break;
    //   case 9:
    //     $('.js-item-to-right, .js-item-to-right-all').prop('disabled', true);
    //     break;
    //   default:
    //     $('.js-item-to-left, .js-item-to-left-all, .js-item-to-right, .js-item-to-right-all').prop('disabled', false);
    // }

    // console.log($items);

  };

  showBtn();

});
