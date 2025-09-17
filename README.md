# Agency AI — Landing Page

A responsive marketing landing page built with React + Vite and Tailwind CSS. The project demonstrates a modern agency website layout with animation, theme toggle, a contact form (Web3Forms), and a custom cursor.

Quick links

- [`App`](src/App.jsx) — main app container ([src/App.jsx](src/App.jsx))
- [`Header`](src/components/Header.jsx) — navigation and theme/menu controls ([src/components/Header.jsx](src/components/Header.jsx))
- [`Hero`](src/components/Hero.jsx) — hero section with headline and artwork ([src/components/Hero.jsx](src/components/Hero.jsx))
- [`TrustedBy`](src/components/TrustedBy.jsx) — company logos strip ([src/components/TrustedBy.jsx](src/components/TrustedBy.jsx))
- [`Services`](src/components/Services.jsx) & [`ServiceCard`](src/components/ServiceCard.jsx) — services grid with interactive cards ([src/components/Services.jsx](src/components/Services.jsx)) ([src/components/ServiceCard.jsx](src/components/ServiceCard.jsx))
- [`OurWork`](src/components/OurWork.jsx) — portfolio grid ([src/components/OurWork.jsx](src/components/OurWork.jsx))
- [`Teams`](src/components/Teams.jsx) — team members ([src/components/Teams.jsx](src/components/Teams.jsx))
- [`ContactUs`](src/components/ContactUs.jsx) — contact form (Web3Forms) ([src/components/ContactUs.jsx](src/components/ContactUs.jsx))
- [`Footer`](src/components/Footer.jsx) — footer and newsletter subscribe ([src/components/Footer.jsx](src/components/Footer.jsx))
- [`ThemeToggleBtn`](src/components/ThemeToggleBtn.jsx) — dark/light toggle ([src/components/ThemeToggleBtn.jsx](src/components/ThemeToggleBtn.jsx))
- [`Title`](src/components/Title.jsx) — shared section title component ([src/components/Title.jsx](src/components/Title.jsx))
- `assets` & data (`company_logos`, `teamData`) — images and exported asset map ([src/assets/assets.js](src/assets/assets.js))
- Entry, styles & config: [index.html](index.html), [`src/main.jsx`](src/main.jsx), [`src/index.css`](src/index.css), [vite.config.js](vite.config.js), [eslint.config.js](eslint.config.js)

Tech stack

- Vite ([vite.config.js](vite.config.js))
- React (JSX) — entry: [`src/main.jsx`](src/main.jsx)
- Tailwind CSS — included via `@tailwindcss/vite` plugin
- motion/react for entrance animations
- react-hot-toast for notifications
- Web3Forms for contact form submission (see Environment)

Features

- Responsive landing page with hero, services, portfolio, team, and contact sections.
- Animated entrances using `motion/react`.
- Theme toggle (dark/light) persisted to localStorage via [`ThemeToggleBtn`](src/components/ThemeToggleBtn.jsx).
- Custom cursor ring + dot implemented in [`App`](src/App.jsx).
- Contact form posts to Web3Forms using access key from environment: see [.env](.env).

Setup

1. Install dependencies

```sh
npm install
```
