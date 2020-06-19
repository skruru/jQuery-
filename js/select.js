// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // 未選択のセレクトボックス
  const $noneSelected = $('#none-selected-items');

  // 選択済みのセレクトボックス
  const $selected = $('#selected-items');

  // 右に移動
  $('.js-item-to-right').on('click', function () {
    // 選択されているoption(option:selected)を取得
    let $optionSelected = $('#none-selected-items option:selected');
    if($optionSelected.length === 0) {
      return; //もし選択されてない場合はキャンセル
    }
    // 選択を解除
    $optionSelected.prop('selected', false);
    // 選択済みのセレクトボックスに移動
    $optionSelected.appendTo($selected);

    showBtn();
  });

  // 右に全て移動
  $('.js-item-to-right-all').on('click', function () {
    // 全てのoptionを取得
    const $optionSelecteds = $('#none-selected-items > option');
    // 選択済みのセレクトボックスに移動
    $optionSelecteds.appendTo($selected);
    showBtn();
  });

  // 左に移動
  $('.js-item-to-left').on('click', function () {
    // 選択されているoption(option:selected)を取得
    let $optionSelected = $('#selected-items option:selected');
    if($optionSelected.length === 0) {
      return; //もし選択されてない場合はキャンセル
    }
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

  };

  showBtn();

});
