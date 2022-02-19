const request = paras => {
  const url = parent.window.location.href;
  const paraString = url.substring(url.indexOf('?')+1, url.length).split('&');
  const paraObj = {}
  for (const str of paraString) {
    const index = str.indexOf('=')
  	paraObj[str.substring(0, index).toLowerCase()] = str.substring(index+1, str.length);
  }
  const returnValue = paraObj[paras.toLowerCase()];
  if(typeof(returnValue) == 'undefined'){
  	return '';
  }else{
  	return returnValue;
  }
}

const teamColor = request('top');

const validTeams = ['lead', 'code', 'art', 'web', 'copy'];

if (teamColor !== '' && validTeams.includes(teamColor)) {
  const profileTop = document.getElementById('profile-top');
  profileTop.classList.forEach(function(v) {
    profileTop.classList.remove(v);
  });

  profileTop.classList.add(`bg-${teamColor}`);
}
