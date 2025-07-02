// スクロール操作した時の処理を指定
$(window).on('scroll', function () {
  // クラス名【inview】が付与されている要素に対して処理を実行
  $('.inview').each(function() {
    // ブラウザの最上部から要素までの位置を取得
    const targetPosition = $(this).offset().top;
    // ブラウザの最上部からのスクロール量を取得
    const scroll = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();
    // ブラウザの最上部からのスクロール量 > 要素の位置 - ウィンドウの高さ の場合
    if (scroll > targetPosition - windowHeight) {
      // クラス名【show】を追加
      $(this).addClass('show');
    }
  });
});

// 画面を読み込んだ時の処理を指定
$(window).on('load', function () {
  // クラス名【show】を外す
  $('.inview').each(function() {
    $(this).removeClass('show');
  });
    // ページトップへ移動する
  $('html,body').animate({
    scrollTop: 0
  });
});

// ホバーした時の処理を指定
$('.content').hover(function() {
  // クラスを追加してテキストを移動させる
  $('.first').addClass('move');
  $('.last').addClass('move');
  // クラスを追加して画像サイズを縮小する
  $('.img_view').addClass('move');
  // クラスを追加して画像をズームする
  $('.img_item').addClass('move');
  // ホバーを外した時の処理を指定
},function(){
  // クラスを外してテキストを移動させる
  $('.first').removeClass('move');
  $('.last').removeClass('move');
  // クラスを外して画像サイズを1倍に戻す
  $('.img_view').removeClass('move');
  // クラスを外して画像のズームを解除する
  $('.img_item').removeClass('move');
});