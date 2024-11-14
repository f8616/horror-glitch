// horrorGlitch.js
document.addEventListener('DOMContentLoaded', function() {
    let body = document.body;

    // グリッチエフェクトをランダムで発生させる間隔
    const glitchInterval = 200; // 200msごとにエフェクトを発生
    const glitchDuration = 1000; // 1秒間、グリッチエフェクトが続く

    // 背景色とテキストをランダムに変更する関数
    function applyGlitchEffect() {
        // 背景色をランダムに変更
        body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

        // ランダムなテキストを選ぶ
        let glitchText = ['404 ERROR', 'SYSTEM FAILURE', 'ACCESS DENIED', 'GLITCH DETECTED', 'FILE CORRUPTED'];
        let randomText = glitchText[Math.floor(Math.random() * glitchText.length)];

        // テキストのランダム変更
        let allTextElements = document.querySelectorAll('h1, h2, h3, p, span');
        allTextElements.forEach(element => {
            let randomDelay = Math.random() * 300 + 100;  // ランダムな遅延を加える
            setTimeout(() => {
                element.textContent = randomText;
                element.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;  // 色をランダムに変更
            }, randomDelay);
        });
    }

    // グリッチを発生させるアニメーション
    function shakeBody() {
        // 体を揺らす（グリッチ感を出す）
        let shakeAmount = Math.floor(Math.random() * 10) + 2;
        let shakeDirection = Math.random() > 0.5 ? 1 : -1;

        body.style.transition = 'transform 0.1s ease';
        body.style.transform = `translateX(${shakeAmount * shakeDirection}px)`;

        // 少し時間が経ったら元に戻す
        setTimeout(() => {
            body.style.transform = 'translateX(0)';
        }, 100);
    }

    // グリッチを発生させるタイマー
    setInterval(function() {
        // 背景色変更と文字のランダム変更を同時に実行
        applyGlitchEffect();
        shakeBody();
    }, glitchInterval);

    // 長期間のグリッチを実行
    setTimeout(() => {
        // 1秒間だけ、グリッチを続ける
        body.style.transition = 'all 0.5s ease-in-out';
        body.style.transform = 'rotate(2deg)';
    }, glitchDuration);
});
