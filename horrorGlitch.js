// ランダムなテキストを取得
function getRandomText() {
    const texts = ["ERROR", "BLOOD", "HELP ME", "I'M WATCHING", "DANGER", "SYSTEM FAILURE"];
    return texts[Math.floor(Math.random() * texts.length)];
}

// ボタンの文字をランダムに変更
function changeButtonText() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.textContent = getRandomText();
    });
}

// 背景色をランダムに変更
function changeBackgroundColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// <h2>出力結果</h2>のテキストをランダムに変更
function changeHeadingText() {
    const headingTexts = ["Output", "Results", "Logs", "ERRORS", "SYSTEM ALERT"];
    const randomHeading = headingTexts[Math.floor(Math.random() * headingTexts.length)];
    document.querySelector("h2").textContent = randomHeading;
}

// 要素の位置やサイズをランダムに変更
function randomizeElementPositionAndSize() {
    const elements = document.querySelectorAll("button, textarea, h1, h2");
    elements.forEach(element => {
        const randomTop = Math.floor(Math.random() * window.innerHeight) + 'px';
        const randomLeft = Math.floor(Math.random() * window.innerWidth) + 'px';
        const randomSize = Math.floor(Math.random() * 30) + 10 + 'px';
        const randomRotate = Math.floor(Math.random() * 360) + 'deg';

        element.style.position = 'absolute';
        element.style.top = randomTop;
        element.style.left = randomLeft;
        element.style.fontSize = randomSize;
        element.style.transform = `rotate(${randomRotate})`;
    });
}

// 血のエフェクトを追加
function createBloodEffect() {
    const blood = document.createElement('div');
    blood.style.position = 'absolute';
    blood.style.top = '0';
    blood.style.left = `${Math.random() * window.innerWidth}px`;
    blood.style.width = '5px';
    blood.style.height = '20px';
    blood.style.backgroundColor = 'red';
    blood.style.animation = 'bloodDrip 1s infinite';
    document.body.appendChild(blood);
}

// 血滴のアニメーション
const style = document.createElement('style');
style.innerHTML = `
@keyframes bloodDrip {
    0% { top: 0; opacity: 1; }
    100% { top: 100%; opacity: 0; }
}
`;
document.head.appendChild(style);

// 1秒ごとに血滴を生成
setInterval(createBloodEffect, 1000);

// 定期的にエフェクトを更新
setInterval(() => {
    changeButtonText();
    changeBackgroundColor();
    changeHeadingText();
    randomizeElementPositionAndSize();
}, 2000);  // 2秒ごとにエフェクトを更新
