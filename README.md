# Walter Fernández - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Project showcase
- Skills and expertise section
- Contact information
- AWS certification badge
- Cyberpunk-inspired UI

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Local Development

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
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment to GitHub Pages

1. Update the `base` property in `vite.config.ts` to match your repository name:
   ```typescript
   base: '/your-repo-name/'
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source branch to `gh-pages`
   - Save the changes

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Project Structure

```
portfolio/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Customization

1. Update personal information in `App.tsx`
2. Modify the color scheme in Tailwind classes
3. Add or remove projects in the projects array
4. Update contact information and social links

## License

MIT License - Feel free to use this template for your own portfolio!