document.querySelectorAll('.devimg').forEach(devtable => {
  devtable.addEventListener('click', function() {
    const devname = this.getAttribute('devname');
    window.open(`/?page=profile&user=${devname}`, '_parent');
  })
})
