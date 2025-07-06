// グローバル変数をboolean型で定義
const scrollFlag = true;

// スクロール操作した時の処理を指定
$(window).on('scroll', function () {
  // scrollFlagがtrueであれば処理を実行
  if (scrollFlag) {
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
  }else{
    // scrollFlagがfalseであればアーリーリターン
    return false;
  }
});

// 画面を読み込んだ時の処理を指定
$(window).on('load', function () {
  // if判定で処理を分岐する
  if (scrollFlag) {
    // ページトップへ移動する
    $('html,body').animate({
      scrollTop: 0
      // アニメーション完了後に実行する処理
    },function() {
      // クラス名【show】を外す
      $('.inview').each(function() {
        $(this).removeClass('show');
      });
      scrollFlag = true;
    });
  }else{
    // スクロールイベント内の処理を実行しないようにする
    $(window).off('scroll');
  }
});

// ホバーした時の処理を指定
$('.content').hover(function() {
  // クラスを追加してテキストを移動させる
  $(this).find('.first').addClass('move');
  $(this).find('.last').addClass('move');
  // クラスを追加して画像サイズを縮小する
  $(this).find('.img_view').addClass('move');
  // クラスを追加して画像をズームする
  $(this).find('.img_item').addClass('move');
  // ホバーを外した時の処理を指定
},function(){
  // クラスを外してテキストを移動させる
  $(this).find('.first').removeClass('move');
  $(this).find('.last').removeClass('move');
  // クラスを外して画像サイズを1倍に戻す
  $(this).find('.img_view').removeClass('move');
  // クラスを外して画像のズームを解除する
  $(this).find('.img_item').removeClass('move');
});