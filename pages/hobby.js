const apiKey = '87BF5D12F113FE650BF3F106795F8E93';

async function getPlayerInfo() {
    const steamId = '76561198796112311';
    const apiSteam = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&format=json&steamids=${steamId}`;

    try {
        const response = await fetch(apiSteam);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.response.players && data.response.players.length > 0 ? data.response.players[0] : null;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

async function hobbyPage() {
    try {
        const playerInfo = await getPlayerInfo();
        if (playerInfo) {
            console.log('Player Info:', playerInfo);

            return `
                <a href="${playerInfo.profileurl}" target="_blank" class="steam player">
                    <img src="${playerInfo.avatarfull}" alt="Avatar" class="avatar">
                    <div class="profile-link">${playerInfo.personaname}</div>
                </a>
            `;
        } else {
            console.log('Failed to fetch player info.');
        }
    } catch (error) {
        console.error('Error displaying hobby page:', error);
    }
}
