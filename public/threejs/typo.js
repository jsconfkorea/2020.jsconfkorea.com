const viewer = document.getElementById('code-viewer');
let letters = [];

let isTypoStart = false;

let count = 0;
let typo_speed = 3;

function resetTypo() {
  count = 0;
  for (let i = 0; i < letters.length; i++) {
    letters[i].classList.remove("active");
  }
}

let animate1 = function () {

  if (viewer.querySelectorAll('span').length != 0 && !isTypoStart) {
    isTypoStart = true;
    letters = viewer.querySelectorAll('span');
  }

  if (isTypoStart) {
    for (let i = 0; i < typo_speed; i++) {
      if (count < letters.length) {
        letters[count].classList.add("active");
        count++;
      }
    }
  }
  requestAnimationFrame(animate1);
};
animate1();