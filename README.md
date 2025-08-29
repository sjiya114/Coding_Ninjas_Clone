 # Coding Ninjas Clone - Frontend

 A modern, high-performance frontend for a Coding Ninjas clone, built with React and Vite. This project aims to replicate the look and feel of the Coding Ninjas platform, featuring interactive UI components, responsive design, and optimized asset management.

 ---

 ## 🚀 Features
 - **React 18**: Component-based architecture for scalable UIs
 - **Vite**: Lightning-fast development and build tool
 - **Modern UI/UX**: Responsive layouts, custom assets, and engaging visuals
 - **Asset Management**: Organized static assets for images, SVGs, and logos
 - **ESLint**: Code linting for consistent code quality
 - **Ready for Deployment**: Includes `vercel.json` for Vercel hosting

 ---

 ## 📁 Folder Structure
 ```
 frontend/
 ├── public/                # Static files (served as root)
 ├── src/
 │   ├── assets/            # Images, SVGs, and static assets
 │   ├── components/        # Reusable React components
 │   ├── pages/             # Page-level React components
 │   ├── App.jsx            # Main App component
 │   ├── main.jsx           # Entry point
 │   └── index.css          # Global styles
 ├── index.html             # HTML template
 ├── package.json           # Project metadata and scripts
 ├── vite.config.js         # Vite configuration
 ├── eslint.config.js       # ESLint configuration
 ├── vercel.json            # Vercel deployment config
 └── README.md              # Project documentation
 ```

 ---

 ## 🛠️ Getting Started

 ### Prerequisites
 - [Node.js](https://nodejs.org/) (v16+ recommended)
 - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

 ### Installation
 1. **Clone the repository:**
	 ```sh
	 git clone https://github.com/sjiya114/Coding_Ninjas_Clone.git
	 cd Coding_Ninjas_Clone/frontend
	 ```
 2. **Install dependencies:**
	 ```sh
	 npm install
	 # or
	 yarn install
	 ```

 ### Running the Development Server
 ```sh
 npm run dev
 # or
 yarn dev
 ```
 - Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

 ### Building for Production
 ```sh
 npm run build
 # or
 yarn build
 ```
 - The production-ready files will be in the `dist/` folder.

 ### Preview Production Build
 ```sh
 npm run preview
 # or
 yarn preview
 ```

 ---

 ## 📦 Available Scripts
 - `dev`      : Start the development server
 - `build`    : Build the app for production
 - `preview`  : Preview the production build locally
 - `lint`     : Run ESLint to check code quality

 ---

 ## 🌐 Deployment
 This project is ready to deploy on [Vercel](https://vercel.com/). The `vercel.json` file is included for custom configuration. You can also deploy to Netlify, GitHub Pages, or any static hosting provider.

 ---


## 📚 Third-Party Libraries

This project uses the following major third-party libraries:

### Runtime Dependencies

- **react**: UI library for building user interfaces
- **react-dom**: React DOM bindings
- **react-router-dom**: Declarative routing for React
- **react-icons**: Popular icon packs as React components
- **lucide-react**: Beautiful & consistent icon library
- **swiper**: Modern mobile touch slider
- **aos**: Animate On Scroll library for scroll animations
- **react-fast-marquee**: Marquee (scrolling text) component
- **tailwindcss**: Utility-first CSS framework
- **@tailwindcss/vite**: Tailwind CSS integration for Vite

### Development Dependencies

- **vite**: Next Generation Frontend Tooling
- **@vitejs/plugin-react**: React plugin for Vite
- **eslint**: Pluggable JavaScript linter
- **@eslint/js**: ESLint core rules
- **eslint-plugin-react-hooks**: ESLint rules for React hooks
- **eslint-plugin-react-refresh**: ESLint rules for React Fast Refresh
- **@types/react**: TypeScript types for React
- **@types/react-dom**: TypeScript types for ReactDOM
- **globals**: List of global identifiers

For the full list and versions, see [`package.json`](./package.json).

---

## 🖼️ Assets
All images, SVGs, and static files are located in `src/assets/` and `public/`.

 ---

 ## 🤝 Contributing
 Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

 ---

 ## 📄 License
 This project is for educational purposes and is not affiliated with Coding Ninjas.

 ---

## 🙏 Acknowledgements
- [Coding Ninjas](https://www.codingninjas.com/) for inspiration
- [React](https://react.dev/), [Vite](https://vitejs.dev/)
- All open-source contributors

---

## 🖼️ Screenshots

Below are some screenshots of the Coding Ninjas Clone frontend. You can add your own screenshots by placing image files in the `src/assets/` folder and updating the paths below.

### Home Page
![Home Page](src/assets/banner.png)

### Example Section
![Example Section](src/assets/stories1.png)

<!-- Add more screenshots as needed -->
