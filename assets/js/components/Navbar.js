class Navbar {
    /** @type {HTMLElement[]} */
    static #elements;

    /** @type {Array<HTMLElement>} */
    static #stickyElements;

    /** @type {number} */
    #currentScrollY = 0;

    /** @type {boolean} */
    #isScrollDown = false;

    /** @type {HTMLElement} */
    #element;

    
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        if(!element) throw new Error('No element provided');

        this.#element = element;

        this.onScroll = this.onScroll.bind(this);
        this.slideUpNavbar = this.slideUpNavbar.bind(this);
        this.resetNavbarPosition = this.resetNavbarPosition.bind(this);

        document.addEventListener('scroll', this.onScroll)
    }

    onScroll() {
        const scrollY = window.scrollY;
        this.#isScrollDown = scrollY > this.#currentScrollY;
        const canSlideUp = this.#isScrollDown;

        if(canSlideUp) {
            this.slideUpNavbar();
            this.updateStickyElementsPosition();
        }
        else {
            this.resetNavbarPosition();
            this.updateStickyElementsPosition();
        }

        this.#currentScrollY = scrollY;
    }

    slideUpNavbar() {
        this.#element.classList.add('transform', '-translate-y-full');
    }

    resetNavbarPosition() {
        this.#element.classList.remove('transform', '-translate-y-full');
    }

    updateStickyElementsPosition() {
        if(this.#isScrollDown) {
            Navbar.#stickyElements.forEach(element => {
                element.classList.replace('top-12', 'top-0');
            });
        }
        else {
            Navbar.#stickyElements.forEach(element => {
                element.classList.replace('top-0', 'top-12');
            });
        }
    }

    /**
     * 
     * @param {string} selector 
     * @returns {Navbar}
     */
    static select(selector) {
        const navbar = Array.from(document.querySelectorAll(selector));

        if(!navbar.length) return ;

        Navbar.#elements = navbar;

        return Navbar;
    }

    /**
     * 
     * @param {string} selector 
     * @returns {Navbar}
     */
    static stickyElements(selector)
    {
        const elements = Array.from(document.querySelectorAll(selector));

        if(!elements.length) throw new Error('No sticky elements found');

        Navbar.#stickyElements = elements;

        return Navbar;
    }

    /**
     * 
     * @returns {Navbar[HTMLElement]}
     */
    static init() {
        if(!Navbar.#elements.length) throw new Error('No navbar elements found');

        return Navbar.#elements.map(element => new Navbar(element));
    }
}

export default Navbar;