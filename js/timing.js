// 画像、動画などの関連データの全ての読み込みが完了したら実行 ==========================================================
// jQuery load =================================================================
$(window).on('load', function () {
  console.log('jq_on_load1');
});

$(window).on('load', function () {
  console.log('jq_on_load2');
});

window.onload = function () {
  console.log('js_onload1');
}

window.onload = function () {
  console.log('js_onload2');
}

// DOMツリーの構築が完了したら実行 =====================================================================================
// jQuery ready ================================================================
$(function () {
  console.log('jq_ready1');
});

$(function () {
  console.log('jq_ready2');
});

jQuery(function () {
  console.log('jq_ready3');
});

$(document).ready(function () {
  console.log('jq_ready4');
});

// Javascript ==================================================================
document.addEventListener('DOMContentLoaded', function () {
  console.log('js_ready1');
}, false);

document.addEventListener('DOMContentLoaded', function () {
  console.log('js_ready2');
}, false);
