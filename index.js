// function addingEventListener() {
// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }
// input.addEventListener('click', clickAlert);
// }
// addingEventListener();
// clickAlert;


function addingEventListener(){
  const input = document.querySelector('input');
  const clickAlert = alert('I was clicked!');

input.addEventListener('click',clickAlert);
}