const loadPage = file => {
  document.getElementById('frame').src = `${file}#top`;
}

const popWindow = file => {
  window.open (file, 'pop', 'height=100, width=400, top=250, left=550, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
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
  if (page === '') page = 'mp';

  loadPage(`pages/${page}.html`);

  $("#switch").click(function () {
    $("#nav").animate({opacity: 'toggle'}, 500);
  });
});
