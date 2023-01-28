import { init } from './todo.js';

const left = document.querySelector('#left-side');
const center = document.querySelector('#center');
const right = document.querySelector('#right-side');


// 중앙 상단 시간
function getTime() {
  const timeBox = document.querySelector('.time-box');
  const date = new Date();
  timeBox.textContent = date.toLocaleString('ko-kr');
  
  setTimeout(getTime, 1000);
}

getTime();

// 메인 타이틀
const mainTitle = document.querySelector('.main-title');
mainTitle.textContent = '오늘의 공부 목표';


init();
