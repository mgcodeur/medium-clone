import Navbar from "./components/Navbar";
import {initSplide} from "./plugins/splide";

document.addEventListener('DOMContentLoaded', () => {
    initSplide();

    Navbar.select('.navbar').stickyElements('.sticky').init();
});