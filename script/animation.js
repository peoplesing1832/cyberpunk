const fs = require('fs')
const path = require('path')
const color = ['rgb(192, 20, 124)', 'rgb(0, 170, 255)', 'rgb(255, 238, 0)', 'rgb(0, 255, 128)'];
let keyframes = ``;

const random = (max) => {
  return parseInt(Math.random() * max);
}

for (let i = 0; i <= 100; i++) {
  keyframes +=
`
${i}% {
  transform: translate(${random(12) - 6}px, 0px);
  text-shadow: ${random(50) - 25}px 0px 0px ${color[i % 4]};
}
`
}

fs.writeFileSync(path.resolve(__dirname,`${Date.now()}.css`), keyframes);
