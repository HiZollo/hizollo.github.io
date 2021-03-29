$(function(){
  const input = $('#range');
  const price = $('#range-price');
  const text = $('#range-quan');
  const bg = n => {
    input.css({
      'background-image':'-webkit-linear-gradient(left ,#000000 0%,#2971FF '+n+'%,#A8C5FF '+n+'%, #C3D7FF 100%)'
    });
  }

  const reprice = n => {
    text.val(n);
    price.text(n*5);
  }


  input.on('mouseenter',function(){
    let value = input.val();
    bg(value);
    reprice(value);
  });
  input.on('mousemove',function(){
    let value = input.val();
    bg(value);
    reprice(value);
  });
  input.on('click',function(){
    let value = input.val();
    bg(value);
    reprice(value);
  });
  input.on('touchend',function(){
    let value = input.val();
    bg(value);
    reprice(value);
  });
  text.on('change', function() {
    let value = text.val();
    if(value > 100) value = 100;
    if(value < 1) value = 1;
    if(isNaN(value)) return;
    value = ~~(value);
    input.val(value);
    bg(value);
    reprice(value);
  });

});
