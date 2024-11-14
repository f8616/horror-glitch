// ランダムな文字列（英語）
function getRandomText() {
  const texts = [
    "It's watching...",
    "Get out now...",
    "You're trapped...",
    "Don't look behind...",
    "It's too late...",
    "Run before it's too late...",
    "It's already here...",
    "You can't escape...",
    "You will regret this...",
    "It knows you're here..."
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

// ランダムな色
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ランダムなサイズ
function getRandomSize() {
  const sizes = ['12px', '16px', '20px', '24px', '32px', '48px', '64px'];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

// ランダムな位置（ピクセル）
function getRandomPosition() {
  const x = Math.floor(Math.random() * window.innerWidth) + "px";
  const y = Math.floor(Math.random() * window.innerHeight) + "px";
  return { x, y };
}

// ランダムな角度（回転）
function getRandomRotation() {
  return Math.floor(Math.random() * 360) + "deg";
}

// ランダムな動き（位置、色、サイズ、回転などを変更する関数）
function glitchElements() {
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, button, input, checkbox');
  elements.forEach((el) => {
    // ランダムな文字変更
    el.innerText = getRandomText();

    // ランダムな色変更
    el.style.color = getRandomColor();

    // ランダムなサイズ変更
    el.style.fontSize = getRandomSize();

    // ランダムな位置変更
    const position = getRandomPosition();
    el.style.position = 'absolute';
    el.style.left = position.x;
    el.style.top = position.y;

    // ランダムな回転変更
    el.style.transform = `rotate(${getRandomRotation()})`;
  });
}

// 血の滴るエフェクトをページに追加
function addBloodDrip() {
  const bloodDrip = document.createElement('div');
  bloodDrip.style.position = 'absolute';
  bloodDrip.style.top = '0';
  bloodDrip.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  bloodDrip.style.width = '10px';
  bloodDrip.style.height = '10px';
  bloodDrip.style.backgroundColor = 'red';
  bloodDrip.style.opacity = '0.8';
  bloodDrip.style.borderRadius = '50%';
  bloodDrip.style.animation = 'drip 3s infinite linear';

  // アニメーションのCSS
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes drip {
      0% {
        top: 0;
        opacity: 0.8;
      }
      100% {
        top: 100%;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ドリップ要素をボディに追加
  document.body.appendChild(bloodDrip);
}

// 血滴がランダムに落ちてくる
function createRandomBloodDrips() {
  setInterval(() => {
    addBloodDrip();
  }, 1000); // 1秒ごとに血の滴りを追加
}

// 1秒ごとにエレメントをグリッチさせる
setInterval(glitchElements, 1000);

// ページ読み込み時に実行
window.onload = () => {
  glitchElements(); // 初回実行
  createRandomBloodDrips(); // 血滴を生成
};
