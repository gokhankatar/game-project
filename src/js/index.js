import '@babel/polyfill';
import '../sass/main.scss';
import * as Library from "./lib";
import * as View from "./view";

window.onload = View.startingData;
Library.modeBtn.addEventListener('click', View.handleMode);
Library.modeBtnResponsive.addEventListener('click', View.handleModeResponsive);
Library.scrollBox.addEventListener('click', View.scrollToTop);
Library.menuBar.addEventListener('click', View.openMenu);
Library.closeBar.addEventListener('click', View.closeMenu);
Library.responsiveItems.forEach(item => item.addEventListener('click', View.closeMenu))
Library.searchBtn.addEventListener('click', View.getData);
Library.searchBox.addEventListener('keyup', View.clearCards);
Library.searchBox.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        View.getData();
    }
});