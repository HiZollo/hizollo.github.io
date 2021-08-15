const loadPage = file => {
  const frame = document.getElementById('content-frame');
  frame.src = `${file}#top`;
}

const popWindow = file => {
  window.open (file, 'pop', 'height=250, width=500, top=250, left=550, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
}

const has = string => string !== '';

let count = 0;

const url = location.href;
const paraString = url.substring(url.indexOf('?')+1, url.length).split('&');
const requests = {}
for (const str of paraString) {
  const index = str.indexOf('=')
  requests[str.substring(0, index).toLowerCase()] = str.substring(index+1, str.length);
}

const page = requests.page ?? 'mp';
const subcmd = requests.subcmd ?? '';
const tutorial = requests.tutorial ?? '';
const user = requests.user ?? '';

if(page === 'cmds' && has(subcmd))
  loadPage(`pages/subcmds/${subcmd}.html`);

else if (page === 'tutorials' && has(tutorial))
  loadPage(`pages/tutorials/${tutorial}.html`);

else if (page === 'profile' && has(user))
  loadPage(`pages/users/${user}.html`);

else
  loadPage(`pages/${page}.html`);


document.getElementById('switch').addEventListener('click', () => {
  const nav = document.getElementById('nav');

  if (nav.clientWidth > 0) {
    nav.className = "collapsed";
  } else {
    nav.className = "open";
  }

});
