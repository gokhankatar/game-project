import * as Library from "./lib";

// Dark Mode - Light Mode

export const handleMode = () => {
    Library.body.classList.toggle('dark-mode');

    if (Library.body.classList.contains('dark-mode')) {
        Library.modeIcon.className = 'bx bxs-sun'
    } else {
        Library.modeIcon.className = 'bx bxs-moon'
    }
};

export const handleModeResponsive = () => {
    Library.body.classList.toggle('dark-mode');

    if (Library.body.classList.contains('dark-mode')) {
        Library.responsiveModeIcon.className = 'bx bxs-sun'
    } else {
        Library.responsiveModeIcon.className = 'bx bxs-moon'
    }
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export const openMenu = () => {
    Library.header.style.display = 'none';
    Library.responsive.style.display = 'flex'

    if (Library.body.classList.contains('dark-mode')) {
        Library.responsiveModeIcon.className = 'bx bxs-sun'
    } else {
        Library.responsiveModeIcon.className = 'bx bxs-moon'
    }
};

export const closeMenu = () => {
    Library.header.style.display = 'flex';
    Library.responsive.style.display = 'none'

    if (Library.body.classList.contains('dark-mode')) {
        Library.modeIcon.className = 'bx bxs-sun'
    } else {
        Library.modeIcon.className = 'bx bxs-moon'
    }
}

// clear cards

export const clearCards = () => {
    Library.cardsZone.innerHTML = '';
}

// Fetch 

export const getData = async name => {

    try {
        name = Library.searchBox.value;
        const datas = await (await fetch(`https://www.cheapshark.com/api/1.0/games?title=${name}`)).json();
        [...datas].forEach(data => {
            let card =
                `<div class="card">
                    <div class="card__top">
                        <img src="${data.thumb}"
                    class="card__img">
                    </div>
                    <div class="card__bottom">
                        <div class="name">Name : <span class="gameName">${data.external}</span></div>
                        <div class="price">Price : <span class="gamePrice">${data.cheapest}$</span></div>
                        <a href="https://store.steampowered.com/app/${data.steamAppID}/" target="_blank" id="link">Steam'de Görüntüle</a>
                    </div>
                </div>`;
            Library.cardsZone.insertAdjacentHTML("beforeend", card);
            Library.searchBox.value = "";
        });

    } catch (error) {
        console.error(error);
    } finally {
        console.warn("DATA'S LOADING...");
    }
}

// starting Data

export const startingData = async () => {
    let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let num = Math.floor(Math.random() * 24) + 1;
    let name = words[num] + words[num + 1];

    try {
        for (let i = 1; i <= 30; i++) {
            const data = await (await fetch(`https://www.cheapshark.com/api/1.0/games?title=${name}`)).json();
            let card =
                `<div class="card">
                <div class="card__top">
                    <img src="${data[i].thumb}"
                class="card__img">
                </div>
                <div class="card__bottom">
                    <div class="name">Name : <span class="gameName">${data[i].external}</span></div>
                    <div class="price">Price : <span class="gamePrice">${data[i].cheapest}$</span></div>
                    <a href="https://store.steampowered.com/app/${data[i].steamAppID}/" target="_blank" id="link">Steam'de Görüntüle</a>
                </div>
            </div>`;
            Library.cardsZone.insertAdjacentHTML("beforeend", card);
        }
    } catch (error) {
        console.error(error)
    }
};






