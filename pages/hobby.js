async function hobbyPage() {
    const st ='https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg';
    const steamId = '76561198796112311';
    const steamName = 'Andre Markov';
    const steamLogo = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/728880/d3ad0d6753d35b785441b0aeda66e9d9e5029c1b.png';

    const battleTag = '#2420';
    const battleName = 'AMar';
    const battleLogo = 'https://blzprofile.akamaized.net/static/avatar/account/38.jpg';

    const apiSteam = `https://steamcommunity.com/profiles/${steamId}/`;
    return `
            <a href="${apiSteam}" target="_blank" class="steam player">
                <div>Steam</div>
                <img src="${st}" alt="Steam" class="avatar">
                <img src="${steamLogo}" alt="Avatar" class="avatar">
                <div class="profile-link">${steamName}</div>
            </a>
            <div class="steam player">
                <div>Battle net</div>
                <img src="${battleLogo}" alt="Avatar" class="avatar">
                <div class="profile-link">${battleName}${battleTag}</div>
            </div>
        `;
}
