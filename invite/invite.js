const url = location.href;
const paraString = url.substring(url.indexOf('?')+1, url.length).split('&');
const requests = {}
for (const str of paraString) {
  const index = str.indexOf('=')
  requests[str.substring(0, index).toLowerCase()] = str.substring(index+1, str.length);
}

const permissions = requests.permissions ?? '4294438903';

location.href= `https://discord.com/api/oauth2/authorize?client_id=584677291318312963&permissions=${permissions}&scope=bot%20applications.commands`;
