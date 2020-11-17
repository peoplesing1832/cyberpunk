const fs = require('fs')
const path = require('path')
const color = ['#ffee00', '#c0147c', '#00aaff', '#00ff80'];
let keyframes = ``;

const random = (max) => {
  return parseInt(Math.random() * max);
}

for (let i = 0; i <= 100; i++) {
  keyframes +=
`
${i}% {
  left: ${random(12) - 6}px;
  text-shadow: ${random(50) - 25}px 0px 0px ${color[random(4)]};
}
`
}

fs.writeFileSync(path.resolve(__dirname,`${Date.now()}.css`), keyframes);
