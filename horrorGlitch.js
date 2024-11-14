window.addEventListener('load', function() {
    // グリッチ効果の対象要素
    const buttons = document.querySelectorAll('button');
    const textareas = document.querySelectorAll('textarea');
    const elementsToChange = [...buttons, ...textareas];

    // エフェクトを適用する
    elementsToChange.forEach(element => {
        // 文字がランダムに変わる
        setInterval(() => {
            element.textContent = getRandomText();
        }, 500);

        // 位置がランダムに移動する
        setInterval(() => {
            let randomX = Math.random() * window.innerWidth;
            let randomY = Math.random() * window.innerHeight;
            element.style.position = 'absolute';
            element.style.left = `${randomX}px`;
            element.style.top = `${randomY}px`;
        }, 1000);

        // サイズが変わる
        setInterval(() => {
            let randomSize = Math.random() * 30 + 10; // 10px〜40px
            element.style.fontSize = `${randomSize}px`;
        }, 500);

        // 回転する
        setInterval(() => {
            let randomRotation = Math.random() * 360; // 0〜360度
            element.style.transform = `rotate(${randomRotation}deg)`;
        }, 1000);
    });

    // 背景に血が垂れてくるエフェクト
    let bloodEffect = document.createElement('div');
    bloodEffect.style.position = 'absolute';
    bloodEffect.style.top = '0';
    bloodEffect.style.left = '50%';
    bloodEffect.style.width = '10px';
    bloodEffect.style.height = '100px';
    bloodEffect.style.backgroundColor = 'red';
    document.body.appendChild(bloodEffect);

    // 血の位置をランダムに変更
    setInterval(() => {
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;
        bloodEffect.style.top = randomY + 'px';
        bloodEffect.style.left = randomX + 'px';
    }, 1000);

    // 文字をランダムに変更する関数
    function getRandomText() {
        const texts = ["ERROR", "BLOOD", "HELP ME", "I'M WATCHING", "DANGER", "SYSTEM FAILURE"];
        return texts[Math.floor(Math.random() * texts.length)];
    }
});
