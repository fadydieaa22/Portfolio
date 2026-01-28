# Full Stack Developer Portfolio

A modern, dark-themed portfolio website built with React and Tailwind CSS featuring smooth animations, responsive design, and a stunning user interface.

## ✨ Features

- 🎨 **Modern Dark Design** - Sleek dark theme with neon accents
- ⚡ **Smooth Animations** - Framer Motion powered animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Interactive UI** - Engaging user experience with hover effects
- 🌓 **Dark Mode Toggle** - Switch between themes
- 📝 **Blog Section** - Share your thoughts and tutorials
- 📧 **Contact Form** - Easy way for clients to reach you
- 🚀 **Fast Performance** - Optimized for speed

## 🛠️ Tech Stack

- **React** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **Framer Motion** - Animation library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Change your name
   - Update roles in the typing animation
   - Add your social media links

2. **About Section** (`src/components/About.js`):
   - Update your bio
   - Change stats (years of experience, projects, clients)
   - Replace placeholder image with your photo

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove technologies
   - Update skill levels
   - Customize categories

4. **Experience Section** (`src/components/Experience.js`):
   - Add your work history
   - Update achievements
   - Customize timeline colors

5. **Projects Section** (`src/components/Projects.js`):
   - Showcase your projects
   - Add project images
   - Update GitHub and demo links

6. **Blog Section** (`src/components/Blog.js`):
   - Add your blog posts
   - Update categories
   - Link to your blog platform

7. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Configure form submission (integrate with EmailJS, Formspree, etc.)

### Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',    // Change to your preferred colors
    purple: '#b026ff',
    pink: '#ff006e',
    green: '#39ff14',
  }
}
```

## 📄 Resume Download

Place your resume PDF in the `public` folder as `resume.pdf`, or update the link in the Hero section.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you like this project, please give it a ⭐️!

---

Made with ❤️ and React
