let clickCount = 0;
let lastOpened;

document.querySelectorAll(".cl-wrapper-title").forEach(title => {
  title.addEventListener('click', e => {
    const content = e.target.parentElement.nextElementSibling;
    if (content.clientHeight === 0) {
      if (!!lastOpened) lastOpened.style.maxHeight = 0;
      content.style.maxHeight = content.scrollHeight + 'px';
      lastOpened = content;
    }
    else {
      content.style.maxHeight = 0;
    }
  })
})


document.querySelector("h1").addEventListener('click', function listener (e) {
  clickCount++;
  if (clickCount === 15) {
    document.querySelector('.displaynone').classList.remove('displaynone');
    e.target.removeEventListener('click', listener);
  }
});

document.querySelectorAll(".dc-spoiler").forEach(target => {
  target.addEventListener('click', function reveal (e) {
    e.target.style.backgroundColor = '#E5E5E5';
    e.target.style.cursor = 'inherit';
    e.target.removeEventListener('click', reveal);
  })
})
