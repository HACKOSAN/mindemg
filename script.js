const headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
const serverAddressElement = document.getElementById('server-address');
const serverStatusElement = document.getElementById('server-status');
const playerCountElement = document.getElementById('player-count');

function updateServerStatus() {
  fetch('https://api.minetools.eu/ping/mc.classicc.tk')
    .then((response) => response.json())
    .then((data) => {
      serverAddressElement.textContent = data.hostname;
      serverStatusElement.textContent = 'Online';
      playerCountElement.textContent = data.players.online;
    })
    .catch((error) => {
      serverStatusElement.textContent = 'Offline';
      console.error(error);
    });
}

setInterval(updateServerStatus, 5000);
