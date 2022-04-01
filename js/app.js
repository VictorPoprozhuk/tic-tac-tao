const boxing = document.querySelectorAll('.box');
const modal = document.querySelector('.modal-result-wrapper');
const area = document.querySelector('.area');
const btn = document.querySelector('.btn-close');
const content = document.querySelector('.content');
let score_0 = document.querySelector('.score_0');
let score_X = document.querySelector('.score_X');

let score_0_value = 0;
let score_X_value = 0;
let step = 0;
let result = '';
let arr = [];
area.addEventListener('click', (e) => {
   if ((e.target.className = 'box')) {
      if (!e.target.innerHTML) {
         step % 2 === 0
            ? (e.target.innerHTML = 'X')
            : (e.target.innerHTML = '0');
         step++;
         check();
         arr.push('1');
         if (arr.length >= 9) {
            drawResult();
         }
      }
   }
});
const check = () => {
   const boxes = document.querySelectorAll('.box');
   const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   for (let i = 0; i < arr.length; i++) {
      if (
         boxes[arr[i][0]].innerHTML === 'X' &&
         boxes[arr[i][1]].innerHTML === 'X' &&
         boxes[arr[i][2]].innerHTML === 'X'
      ) {
         result = 'X';
         prepareREsult(result);
         score_X_value++;
      } else if (
         boxes[arr[i][0]].innerHTML === '0' &&
         boxes[arr[i][1]].innerHTML === '0' &&
         boxes[arr[i][2]].innerHTML === '0'
      ) {
         result = '0';
         prepareREsult(result);
         score_0_value++;
      }
   }
};

const prepareREsult = (winner) => {
   content.textContent = `${winner} - win`;
   modal.style.display = 'block';
};
const drawResult = () => {
   content.textContent = `draw`;
   modal.style.display = 'block';
   arr = [];
};

btn.addEventListener('click', () => {
   boxing.forEach((item) => {
      item.innerHTML = '';
   });
   modal.style.display = 'none';
   score_0.innerHTML = score_0_value;
   score_X.innerHTML = score_X_value;
});
