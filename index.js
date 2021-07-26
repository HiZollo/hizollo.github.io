const loadPage = file => {
  document.getElementById('frame').src = `${file}#top`;
}

const popWindow = file => {
  window.open (file, 'pop', 'height=250, width=500, top=250, left=550, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
}

const request = paras => {
        const url = location.href;
        const paraString = url.substring(url.indexOf('?')+1, url.length).split('&');
        const paraObj = {}
        for (const str of paraString) {
          const index = str.indexOf('=')
        	paraObj[str.substring(0, index).toLowerCase()] = str.substring(index+1, str.length);
        }
        const returnValue = paraObj[paras.toLowerCase()];
        if(typeof(returnValue) == 'undefined'){
        	return "";
        }else{
        	return returnValue;
        }
}

$(document).ready(() => {
  let page = request('page');
  const subcmd = request('subcmd');
  const tutorial = request('tutorial');

  if(page === 'cmds' && subcmd !== '') {
    loadPage(`pages/subcmds/${subcmd}.html`);
  } else if (page === 'tutorials' && tutorial !== '') {
    loadPage(`pages/tutorials/${tutorial}.html`)
  } else if (page === '') {
    const user = request('user');
    if (user !== '') loadPage(`pages/users/${user}.html`);
    else loadPage(`pages/mp.html`);
  } else {
    loadPage(`pages/${page}.html`);
  }

  $("#switch").click(function () {
    $("#nav").animate({
      width: ['toggle', 'linear']
    }, 250);
  });
});
