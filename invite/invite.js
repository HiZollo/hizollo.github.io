const url = location.href;
const paraString = url.substring(url.indexOf('?')+1, url.length).split('&');
const requests = {}
for (const str of paraString) {
  const index = str.indexOf('=')
  requests[str.substring(0, index).toLowerCase()] = str.substring(index+1, str.length);
}

const clientId = requests.clientid ?? '584677291318312963';
const permissions = requests.permissions ?? '536870383095';
const scope = requests.scope ?? 'bot+applications.commands';

location.href= `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&scope=${scope}`;
