# vCard - Personal Portfolio (React)

A fully responsive personal portfolio website built with **React** and **Vite**, featuring modern component architecture and state management.

## ✨ Features

- **React Components**: Modular component structure for easy customization
- **Fast Development**: Vite for lightning-fast hot module replacement (HMR)
- **Responsive Design**: Works seamlessly on all devices
- **Multiple Pages**: About, Resume, Portfolio, Blog, and Contact sections
- **Interactive UI**: Dynamic navigation, testimonial modals, and portfolio filtering
- **Modern Stack**: Built with React 19 and Vite 7

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Installation

### Clone the repository

**Linux and macOS:**

```bash
git clone https://github.com/Elton133/portfolio-garbanzo.git
cd portfolio-garbanzo
```

**Windows:**

```bash
git clone https://github.com/Elton133/portfolio-garbanzo.git
cd portfolio-garbanzo
```

### Install dependencies

```bash
npm install
```

## 🛠️ Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📝 Code Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🎨 Project Structure

```
portfolio-garbanzo/
├── public/                  # Static assets (images, icons, etc.)
│   └── assets/
│       ├── images/
│       ├── css/
│       └── js/
├── src/
│   ├── components/         # React components
│   │   ├── Sidebar.jsx    # Profile sidebar
│   │   └── Navbar.jsx     # Navigation bar
│   ├── pages/             # Page components
│   │   ├── About.jsx      # About page
│   │   ├── Resume.jsx     # Resume page
│   │   ├── Portfolio.jsx  # Portfolio page
│   │   ├── Blog.jsx       # Blog page
│   │   └── Contact.jsx    # Contact page
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── style.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **CSS3** - Styling
- **Ionicons** - Icon library

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
