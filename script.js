const serverAddressElement = document.getElementById('server-address');
const serverStatusElement = document.getElementById('server-status');
const playerCountElement = document.getElementById('player-count');

function updateServerStatus() {
  fetch('/proxy-server-info')
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

// the fetch request URL is changed to '/proxy-server-info', 
//which should be mapped to a server-side script on your web server. 
//This server-side script will handle the request to the Minecraft server and return the necessary information. 
//You'll need to implement the server-side script in a language of your choice (such as Node.js, PHP, Python, etc.) 
//to fetch the Minecraft server info and respond with the required data.

//Remember to set up the server-side script appropriately to handle the Minecraft server request and respond with the necessary data in JSON format.