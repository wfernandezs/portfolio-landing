# Walter Fernández - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Project showcase
- Skills and expertise section
- Contact information
- AWS certification badge
- Cyberpunk-inspired UI
- **NEW: Dynamic content management with Strapi CMS**

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- SWR for data fetching and caching
- Strapi CMS for content management

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

3. Create a `.env` file based on `.env.example` and set your Strapi API URL and token

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## CMS Integration

This project uses Strapi CMS for content management. The following sections are managed through Strapi:

- Projects
- Skills
- Certifications
- Bio (About Me)

### Setting up Strapi

See the README in the `strapi-backend` directory for instructions on setting up the Strapi backend.

### Environment Variables

- `VITE_API_URL`: URL for the Strapi API (e.g., "http://localhost:1337/api")
- `VITE_API_TOKEN`: Your Strapi API token for authentication

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
│   ├── components/     # React components
│   │   ├── bio/        # Bio section components
│   │   ├── projects/   # Projects section components
│   │   └── ...         # Other components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── strapi-backend/     # Strapi CMS backend
├── .env.example        # Example environment variables
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Customization

1. Update content through the Strapi admin panel
2. Modify the color scheme in Tailwind classes if needed
3. Extend Strapi content types for additional information

## License

MIT License - Feel free to use this template for your own portfolio!