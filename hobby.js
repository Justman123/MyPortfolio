const hobby_img1 = document.getElementById('hobby_img1')
const hobby_img2 = document.getElementById('hobby_img2')
const hobby_img3 = document.getElementById('hobby_img3')

const hobby_text1 = document.getElementById('hobby_text1')
const hobby_text2 = document.getElementById('hobby_text2')
const hobby_text3 = document.getElementById('hobby_text3')


function show1(event) {
  hobby_text1.style.opacity = 1;
  event.target.classList.remove('boxVibration')
  console.log(event.target)
}
function show2(event) {
    hobby_text2.style.opacity = 1;
    event.target.classList.remove('boxVibration')
    console.log(event.target)
  }
  function show3(event) {
    hobby_text3.style.opacity = 1;
    event.target.classList.remove('boxVibration')
    console.log(event.target)
  }
hobby_img1.addEventListener('click', show1, false);
hobby_img2.addEventListener('click', show2, false);
hobby_img3.addEventListener('click', show3, false);