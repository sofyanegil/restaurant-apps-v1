class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <div class="nav__container">
          <a href="" class="nav__logo"> Eatery</a>
          <a id="nav__menu" href="#" class="nav__button" aria-label="navigation-menu">☰</a>

          <ul id="nav__drawer" class="nav__link">
            <li class="nav__item"><a href="/"> Home</a></li>
            <li class="nav__item"><a href="#">Favorite</a></li>
            <li class="nav__item"><a href="https://linkedin.com/in/sofyanegi" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-section', Navbar);
