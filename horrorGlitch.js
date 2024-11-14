// 背景を赤くフラッシュさせる
function flashBackground() {
  const body = document.body;
  body.style.transition = "background-color 0.1s";
  body.style.backgroundColor = "red";

  setTimeout(() => {
    body.style.backgroundColor = "black";
  }, 100);
}

// テキストを不規則に変化させる
function glitchText() {
  const texts = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  texts.forEach((text) => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * text.innerText.length);
      let newText = text.innerText.split("");
      newText[randomIndex] = getRandomCharacter();
      text.innerText = newText.join("");
    }, 100);
  });
}

// 不気味な音声を追加
function playHorrorSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.loop = true;
  audio.play();
}

// 不安定に文字を動かす
function unstableText() {
  const texts = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  texts.forEach((text) => {
    setInterval(() => {
      text.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    }, 50);
  });
}

// ボタンのランダムな動き
function glitchButton() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    setInterval(() => {
      // ランダムな位置にボタンを移動
      button.style.position = "absolute";
      button.style.left = `${Math.random() * window.innerWidth}px`;
      button.style.top = `${Math.random() * window.innerHeight}px`;

      // ランダムなサイズに変更
      button.style.fontSize = `${Math.random() * 30 + 10}px`; // 10pxから40pxの間でサイズ変更

      // ランダムにボタンを揺らす
      button.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    }, 100);
  });
}

// 文字をランダムな文字に置き換える
function getRandomCharacter() {
  const characters = ["A", "B", "C", "1", "!", "$", "%", "&", "#", "@", "*"];
  return characters[Math.floor(Math.random() * characters.length)];
}

// 実行する
function horrorGlitch() {
  flashBackground();
  glitchText();
  playHorrorSound();
  unstableText();
  glitchButton();
}

// ページ読み込み時にエフェクトを開始
window.onload = () => {
  horrorGlitch();
};
