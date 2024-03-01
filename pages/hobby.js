async function getPlayerInfo(steamId) {
    const apiKey = '87BF5D12F113FE650BF3F106795F8E93';
    const apiSteam = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&format=json&steamids=${steamId}`;

    try {
        const response = await fetch(apiSteam);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.response.players[0];
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

// Пример использования метода
async function displayPlayerInfo() {
    const steamId = '76561198796112311'; // Пример Steam ID
    const playerInfo = await getPlayerInfo(steamId);
    if (playerInfo) {
        console.log('Player Info:', playerInfo);
        // Здесь можно обработать полученные данные и отобразить их на странице
    } else {
        console.log('Failed to fetch player info.');
    }
}

// Вызов метода для отображения информации о пользователе Steam
displayPlayerInfo();
