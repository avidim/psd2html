let menu = document.getElementById('menu');
menu.onclick = () => {
    let x = document.getElementById('topnavid');
    x.className === 'topnav' ? x.className += ' responsive' : x.className = 'topnav';
}