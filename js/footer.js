class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
      <div class="text-container">
        <!-- FOOTER TEXT AND BUTTON -->
        <p class="visually-h2 h2-heading with-icon">Alissa Bodden</p>
        <p class="footer-blurb">
          Thanks for visiting my website! I designed and built it with love,
          Figma, and GitHub (plus Claude.ai, sweat, and maybe a few tears).
        </p>
        <ul class="footer-links">
          <li>
            <a href="mailto:alissabodden2@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V17.7549L34.8917 44.4943C35.2506 44.7693 35.7494 44.7693 36.1083 44.4943L72 16.9885V8C72 3.58172 68.4183 0 64 0H8ZM72 27.0676L40.9745 50.8441C37.7445 53.3194 33.2555 53.3194 30.0255 50.8441L0 27.8339V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V27.0676Z"
                  fill="currentColor"
                />
              </svg>
              <span>Email Me</span>
            </a>
          </li>
          <li>
            <a href="files/alissa-bodden-resume-2025.pdf" target="_blank">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V8C72 3.58172 68.4183 0 64 0H8ZM8 10H50V18H8V10ZM8 38H56V46H8V38ZM62 24H8V32H62V24ZM8 52H62V60H8V52Z"
                  fill="currentColor"
                />
              </svg>
              <span>Grab My Resume</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alissa-bodden/">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 72H8C3.58172 72 0 68.4183 0 64V8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72ZM51.3156 62H62V40.0512C62 30.7645 56.7357 26.2742 49.3826 26.2742C42.026 26.2742 38.9301 32.0029 38.9301 32.0029V27.3333H28.6333V62H38.9301V43.8021C38.9301 38.9261 41.1746 36.0245 45.4707 36.0245C49.4198 36.0245 51.3156 38.8128 51.3156 43.8021V62ZM10 16.397C10 19.9297 12.8421 22.794 16.3493 22.794C19.8566 22.794 22.697 19.9297 22.697 16.397C22.697 12.8644 19.8566 10 16.3493 10C12.8421 10 10 12.8644 10 16.397ZM21.7694 62H11.0326V27.3333H21.7694V62Z"
                  fill="currentColor"
                />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define('site-footer', FooterComponent);


  class HomeFooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
      <div class="text-container home">
        <!-- FOOTER TEXT AND BUTTON -->
        <p class="visually-h2 h2-heading with-icon">Alissa Bodden</p>
        <p class="footer-blurb">
          Thanks for visiting my website! I designed and built it with love,
          Figma, and GitHub (plus Claude.ai, sweat, and maybe a few tears).
        </p>
        <ul class="footer-links">
          <li>
            <a href="mailto:alissabodden2@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V17.7549L34.8917 44.4943C35.2506 44.7693 35.7494 44.7693 36.1083 44.4943L72 16.9885V8C72 3.58172 68.4183 0 64 0H8ZM72 27.0676L40.9745 50.8441C37.7445 53.3194 33.2555 53.3194 30.0255 50.8441L0 27.8339V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V27.0676Z"
                  fill="currentColor"
                />
              </svg>
              <span>Email Me</span>
            </a>
          </li>
          <li>
            <a href="files/alissa-bodden-resume-2025.pdf" target="_blank">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V8C72 3.58172 68.4183 0 64 0H8ZM8 10H50V18H8V10ZM8 38H56V46H8V38ZM62 24H8V32H62V24ZM8 52H62V60H8V52Z"
                  fill="currentColor"
                />
              </svg>
              <span>Grab My Resume</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alissa-bodden/">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 72H8C3.58172 72 0 68.4183 0 64V8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72ZM51.3156 62H62V40.0512C62 30.7645 56.7357 26.2742 49.3826 26.2742C42.026 26.2742 38.9301 32.0029 38.9301 32.0029V27.3333H28.6333V62H38.9301V43.8021C38.9301 38.9261 41.1746 36.0245 45.4707 36.0245C49.4198 36.0245 51.3156 38.8128 51.3156 43.8021V62ZM10 16.397C10 19.9297 12.8421 22.794 16.3493 22.794C19.8566 22.794 22.697 19.9297 22.697 16.397C22.697 12.8644 19.8566 10 16.3493 10C12.8421 10 10 12.8644 10 16.397ZM21.7694 62H11.0326V27.3333H21.7694V62Z"
                  fill="currentColor"
                />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define('home-footer', HomeFooterComponent);


  class ExpFooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
        <div class="footer-grid">
        <img
    src="img/logo.svg"
    loading="lazy"
    />
        <div><p class="footer-blurb">
          Thanks for visiting my website! I designed and built it with love,
          Figma, and GitHub (plus Claude.ai, sweat, and maybe a few tears).
        </p>
        <ul class="footer-links">
          <li>
            <a href="mailto:alissabodden2@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V17.7549L34.8917 44.4943C35.2506 44.7693 35.7494 44.7693 36.1083 44.4943L72 16.9885V8C72 3.58172 68.4183 0 64 0H8ZM72 27.0676L40.9745 50.8441C37.7445 53.3194 33.2555 53.3194 30.0255 50.8441L0 27.8339V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V27.0676Z"
                  fill="currentColor"
                />
              </svg>
              <span>Email Me</span>
            </a>
          </li>
          <li>
            <a href="files/alissa-bodden-resume-2025.pdf" target="_blank">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58172 0 0 3.58172 0 8V64C0 68.4183 3.58172 72 8 72H64C68.4183 72 72 68.4183 72 64V8C72 3.58172 68.4183 0 64 0H8ZM8 10H50V18H8V10ZM8 38H56V46H8V38ZM62 24H8V32H62V24ZM8 52H62V60H8V52Z"
                  fill="currentColor"
                />
              </svg>
              <span>Grab My Resume</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alissa-bodden/">
              <svg
                aria-hidden="true"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 72H8C3.58172 72 0 68.4183 0 64V8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72ZM51.3156 62H62V40.0512C62 30.7645 56.7357 26.2742 49.3826 26.2742C42.026 26.2742 38.9301 32.0029 38.9301 32.0029V27.3333H28.6333V62H38.9301V43.8021C38.9301 38.9261 41.1746 36.0245 45.4707 36.0245C49.4198 36.0245 51.3156 38.8128 51.3156 43.8021V62ZM10 16.397C10 19.9297 12.8421 22.794 16.3493 22.794C19.8566 22.794 22.697 19.9297 22.697 16.397C22.697 12.8644 19.8566 10 16.3493 10C12.8421 10 10 12.8644 10 16.397ZM21.7694 62H11.0326V27.3333H21.7694V62Z"
                  fill="currentColor"
                />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </li>
        </ul></div>
        </div>
    </footer>
      `;
    }
  }
  
  customElements.define('exp-footer', ExpFooterComponent);