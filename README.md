# Western AI Website

A modern, responsive website for the Western Artificial Intelligence Club at Western University. Built with React and featuring a stunning futuristic design with smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Futuristic UI with gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Team Showcase**: Dynamic team member cards with hover effects and expandable details
- **Event Management**: Interactive event tabs with detailed information
- **Project Gallery**: Showcase of club projects and initiatives
- **Alumni Network**: Animated company logos carousel
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Lazy loading, memoized components, and optimized animations

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **CSS3** - Custom CSS with CSS variables and modern features
- **Vanilla Tilt** - 3D tilt effects
- **React Confetti Explosion** - Celebration animations

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigationbar.jsx
│   ├── Footer.jsx
│   └── css/            # Component-specific styles
├── pages/
│   ├── Home/           # Home page components
│   │   ├── sections/   # Page sections
│   │   └── css/        # Section-specific styles
│   └── Events/         # Events page
├── assets/             # Images and static assets
├── pagejs/             # Data and utility files
└── App.js              # Main app component
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Purple, blue, and white gradients
- **Typography**: Inter font family with various weights
- **Spacing**: Consistent spacing scale using CSS variables
- **Animations**: Smooth transitions and hover effects
- **Glassmorphism**: Modern glass-like effects with backdrop blur

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above

## 🎯 Key Sections

1. **Landing**: Hero section with animated text and 3D cube
2. **Executive Team**: Leadership team showcase
3. **Leadership**: Co-presidents information
4. **Vice Presidents**: VP team members
5. **Alumni Showcase**: Company logos carousel
6. **Events**: Interactive event information
7. **Projects**: Club projects and initiatives
8. **Project Managers**: PM team members
9. **Contact**: Contact form and social links

## 🔧 Customization

### Colors
Update the CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary-500: #your-color;
  --accent-500: #your-color;
  --secondary-500: #your-color;
}
```

### Content
Update the data files in `src/pages/pagejs/` to modify:
- Team member information
- Event details
- Project information
- Social media links

## 📈 Performance

The website is optimized for performance with:
- Lazy loading of components
- Memoized event handlers
- Optimized animations
- Compressed images
- Efficient CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Built by the Western AI Communications Team for the Western Artificial Intelligence Club.

## 🔗 Links

- [Discord](https://discord.gg/ZcRtm6CAHt)
- [Instagram](https://www.instagram.com/westernu.ai/)
- [Membership](https://westernusc.store/product/western-artificial-intelligence-design/)