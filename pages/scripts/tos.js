let clickCount = 0;

document.querySelector('#tos-icon').addEventListener('click', function() {
  clickCount++;
  if (clickCount === 10) {
    this.classList.add('mirror');
  }

  if (clickCount === 20) {
    this.classList.remove('mirror');
    clickCount = 0;
  }
})
