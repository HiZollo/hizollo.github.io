window.addEventListener ('scroll', function() {
  setTimeout(() => {
    document.getElementById('second').style.display = 'inherit';
    setTimeout(() => {
      document.getElementById('input').style.display = 'inherit';
    }, 10e3);

    document.getElementById('send').addEventListener('click', function() {
      document.getElementById('output').style.display = 'inherit';
      setTimeout(() => {
        document.getElementById('third').style.display = 'inherit';
        setTimeout(() => {
          window.open('/', '_parent');
        }, 1500)
      }, 3e3);
    }, { once: true })
  }, 5e3)
}, { once: true });
