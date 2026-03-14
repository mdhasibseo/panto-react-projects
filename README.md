# 🛍️ Panto — React E-Commerce Project

A modern, fully responsive **E-Commerce web application** built with React and Vite. The project includes product listings, a shopping cart, testimonials, and a dark/light theme toggle.

🔗 **Live Demo:** [panto-react-projects-1.vercel.app](https://panto-react-projects-1.vercel.app/)

---

## ✨ Features

- 🏠 **Home Page** — Hero section, featured products, experiences & testimonials
- 🛒 **Shopping Cart** — Add/remove products with real-time cart updates
- 🧾 **Shop Page** — Browse all available products
- 📄 **About Page** — About the brand
- 📞 **Contact Page** — Get in touch
- 🌙 **Dark / Light Theme Toggle** — Smooth theme switching
- ⭐ **Product Ratings** — Star rating system for products
- 🧠 **Context API** — Global cart state management with `CartContext`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React | UI Components & SPA |
| ⚡ Vite | Build tool & Dev Server |
| 🟨 JavaScript (ES6+) | Core logic |
| 🎨 CSS | Styling & Responsive Design |
| 🧠 React Context API | Global state (Cart) |
| 🚀 Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Cart.jsx          # Shopping cart component
│   ├── Complex.jsx       # Complex/featured section
│   ├── Experiences.jsx   # Experience highlights
│   ├── Footer.jsx        # Site footer
│   ├── Hero.jsx          # Hero/banner section
│   ├── Home.jsx          # Home page layout
│   ├── Navber.jsx        # Navigation bar
│   ├── Products.jsx      # Product listing
│   ├── Testimonials.jsx  # Customer reviews
│   └── WhyChoosingUs.jsx # Why choose us section
│
├── context/
│   └── CartContext.jsx   # Global cart state (Context API)
│
├── pages/
│   ├── About.jsx         # About page
│   ├── Contract.jsx      # Contact page
│   └── Shop.jsx          # Shop/all products page
│
├── utils/
│   ├── ImgGetting.js     # Image utility
│   ├── product.js        # Product data
│   ├── Rating.jsx        # Star rating component
│   └── ThemeToggle.jsx   # Dark/Light theme toggle
│
├── App.jsx               # Main app with routing
├── App.css               # Global styles
├── main.jsx              # Entry point
└── index.css             # Base styles
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mdhasibseo/panto-react-projects.git
```

2. **Go to the project folder**
```bash
cd panto-react-projects
```

3. **Install dependencies**
```bash
npm install
```

4. **Run the development server**
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📸 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Products, Testimonials |
| Shop | `/shop` | All products listing |
| About | `/about` | About the brand |
| Contact | `/contract` | Contact form |

---

## 🧠 State Management

Cart state is managed globally using **React Context API** (`CartContext`). This allows any component to:
- Add items to cart
- Remove items from cart
- View total cart count and price

---

## 🚀 Deployment

This project is deployed on **Vercel**.

To deploy your own version:
```bash
npm run build
```
Then upload the `dist/` folder to [Vercel](https://vercel.com/) or any static host.

---

## 👨‍💻 Author

**Md. Hasib**
- GitHub: [@mdhasibseo](https://github.com/mdhasibseo)
- Live: [panto-react-projects-1.vercel.app](https://panto-react-projects-1.vercel.app/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you like this project, give it a star on GitHub!
