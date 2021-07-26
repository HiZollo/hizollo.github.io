document.querySelectorAll('.devimg').forEach(devtable => {
  devtable.addEventListener('click', function() {
    const devname = this.getAttribute('devname');
    window.open(`/?user=${devname}`, '_parent');
  })
})
