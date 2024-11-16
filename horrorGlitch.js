// 背景色をランダムに変更
function changeBackgroundColor() {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

// 文字色をランダムに変更
function changeTextColor() {
    const elements = document.querySelectorAll('h1, h2, p, button, textarea');
    elements.forEach(element => {
        element.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
}

// テキストサイズと位置をランダムに変更
function changeTextSizeAndPosition() {
    const elements = document.querySelectorAll('h1, h2, p, button, textarea, div, img');
    elements.forEach(element => {
        // ランダムなサイズ
        element.style.fontSize = `${Math.random() * 30 + 10}px`;
        // ランダムな位置（注意: 要素が画面からはみ出る可能性がある）
        element.style.position = 'absolute';
        element.style.left = `${Math.random() * window.innerWidth}px`;
        element.style.top = `${Math.random() * window.innerHeight}px`;
        // ランダムな回転
        element.style.transform = `rotate(${Math.random() * 360}deg)`;
    });
}

// divとimgのランダムな背景色とサイズを変更
function changeDivAndImgStyle() {
    const elements = document.querySelectorAll('div, img');
    elements.forEach(element => {
        // 背景色またはフィルターの適用
        if (element.tagName.toLowerCase() === 'div') {
            element.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        } else if (element.tagName.toLowerCase() === 'img') {
            element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }
        // ランダムなサイズ
        element.style.width = `${Math.random() * 300 + 50}px`;
        element.style.height = `${Math.random() * 300 + 50}px`;
    });
}

// 血液ドロップを作成する関数
function createBloodDrip() {
    for (let i = 0; i < 5; i++) {
        let bloodDrop = document.createElement('div');
        bloodDrop.style.position = 'absolute';
        bloodDrop.style.width = '5px';
        bloodDrop.style.height = '20px';
        bloodDrop.style.backgroundColor = '#8B0000'; // 血の色
        bloodDrop.style.left = Math.random() * window.innerWidth + 'px'; // 横にランダムに配置
        bloodDrop.style.top = '0px'; // 初期位置は画面上部
        bloodDrop.style.animation = 'drip 2s infinite linear'; // ドロップアニメーション
        document.body.appendChild(bloodDrop);
    }

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
    setInterval(function() {
        changeBackgroundColor(); // 背景色を変更
        changeTextColor(); // 文字色を変更
        changeTextSizeAndPosition(); // 文字サイズと位置を変更
        changeDivAndImgStyle(); // divとimgのスタイルを変更
        createBloodDrip(); // 血液エフェクトを作成
    }, 10);
};
