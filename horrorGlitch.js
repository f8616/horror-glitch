// 文字色をランダムに変更する関数
function changeTextColor() {
    let colors = ['#FF6347', '#00FFFF', '#FFFF00', '#8A2BE2', '#FF1493']; // 色を増やしてみる
    let elements = document.querySelectorAll("h1, h2, p, button, textarea"); // 変更する要素を指定

    elements.forEach(function (element) {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor; // 文字色を変更
    });
}

// 文字のサイズと位置をランダムに変更する関数
function changeTextSizeAndPosition() {
    let elements = document.querySelectorAll("h1, h2, p, button, textarea"); // 対象要素

    elements.forEach(function (element) {
        let randomSize = Math.floor(Math.random() * (30 - 10 + 1)) + 10; // ランダムな文字サイズ
        let randomLeft = Math.floor(Math.random() * window.innerWidth) + 'px'; // ランダムな横位置
        let randomTop = Math.floor(Math.random() * window.innerHeight) + 'px'; // ランダムな縦位置
        let randomRotate = Math.floor(Math.random() * 360) + 'deg'; // ランダムな回転角度

        element.style.fontSize = randomSize + 'px';
        element.style.position = 'absolute';
        element.style.left = randomLeft;
        element.style.top = randomTop;
        element.style.transform = 'rotate(' + randomRotate + ')';
    });
}

// 背景色をランダムに変更する関数
function changeBackgroundColor() {
    let colors = ['#ff0000', '#ff3333', '#ff6666', '#ff9999', '#ffcccc']; // 赤系の色
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// 血液ドロップを作成する関数
function createBloodDrip() {
    let bloodDrop = document.createElement('div');
    bloodDrop.style.position = 'absolute';
    bloodDrop.style.width = '5px';
    bloodDrop.style.height = '20px';
    bloodDrop.style.backgroundColor = '#8B0000'; // 血の色
    bloodDrop.style.left = Math.random() * window.innerWidth + 'px'; // 横にランダムに配置
    bloodDrop.style.top = '0px'; // 初期位置は画面上部
    bloodDrop.style.animation = 'drip 2s infinite linear'; // ドロップアニメーション
    document.body.appendChild(bloodDrop);

    // 血液が落ちるアニメーション
    let style = document.createElement('style');
    style.innerHTML = `
        @keyframes drip {
            0% { top: 0; }
            100% { top: 100%; }
        }
    `;
    document.head.appendChild(style);
}

// ページ読み込み時に実行する関数
window.onload = function() {
    // 1秒ごとに色やサイズ、位置をランダムに変更する
    setInterval(function() {
        changeBackgroundColor(); // 背景色を変更
        changeTextColor(); // 文字色を変更
        changeTextSizeAndPosition(); // 文字サイズと位置を変更
        createBloodDrip(); // 血液エフェクトを作成
    }, 1000); // 1秒ごとに実行
};
