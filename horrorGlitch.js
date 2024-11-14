// ランダムな色を生成する関数
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// テキストの変更を行う関数
function changeText(element) {
    const randomText = ["ERROR", "HELP", "WARNING", "DANGER", "FATAL", "CORRUPTED", "LOADING..."];
    element.innerHTML = randomText[Math.floor(Math.random() * randomText.length)];
}

// 血液エフェクトを追加する関数
function createBloodEffect() {
    const blood = document.createElement("div");
    blood.style.position = "absolute";
    blood.style.top = "0px";
    blood.style.left = `${Math.random() * 100}%`; // 横のランダムな位置
    blood.style.width = "10px";
    blood.style.height = "30px";
    blood.style.backgroundColor = "red";
    blood.style.animation = "bloodFall 3s infinite";
    document.body.appendChild(blood);

    // 血液のアニメーション
    setTimeout(() => {
        blood.style.animation = "bloodFall 3s infinite"; // アニメーション開始
    }, 100);
}

// ボタンの位置やサイズの変更
function changeButtonProperties(button) {
    button.style.position = 'absolute';
    button.style.top = `${Math.random() * 80}%`; // 縦のランダムな位置
    button.style.left = `${Math.random() * 80}%`; // 横のランダムな位置
    button.style.fontSize = `${Math.random() * 24 + 12}px`; // ランダムな文字サイズ
    button.style.transform = `rotate(${Math.random() * 360}deg)`; // ランダムな回転
}

// ページの内容をランダムに変更
function applyHorrorEffects() {
    // 背景色を変更
    document.body.style.backgroundColor = getRandomColor();
    
    // テキストエレメントを変更
    const elements = document.querySelectorAll("h1, h2, p, button, textarea");
    elements.forEach(element => {
        changeText(element); // 文字をランダムに変更
        element.style.color = getRandomColor(); // 文字色をランダムに変更
    });
    
    // 血液エフェクトを生成
    createBloodEffect();
    
    // ボタンやテキストエレメントの位置やサイズを変更
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        changeButtonProperties(button);
    });
    
    // さらに怖い効果を追加
    setInterval(() => {
        applyHorrorEffects();
    }, 2000); // エフェクトを定期的に更新
}

// 血液のアニメーション用CSSスタイルを追加
const style = document.createElement('style');
style.innerHTML = `
    @keyframes bloodFall {
        0% { top: 0; opacity: 1; }
        100% { top: 100%; opacity: 0; }
    }
`;
document.head.appendChild(style);

// 初期実行
applyHorrorEffects();
