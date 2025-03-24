# Portfolio Strapi Backend

This is the Strapi backend for the portfolio website. It provides content management for projects, skills, certifications, and bio information.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- PostgreSQL or SQLite

### Installation

1. Clone this repository
2. Install dependencies:

```bash
cd strapi-backend
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn develop
# or
npm run develop
```

The admin panel will be available at http://localhost:1337/admin

## Content Types

### Projects

- **Title**: String (required)
- **Description**: Text (required)
- **Tech**: Array of strings
- **GitHub**: URL
- **Demo**: URL (optional)
- **Preview**: Media (image)
- **Icon**: Enumeration (server, database, code, etc.)

### Skills

- **Name**: String (required)
- **Level**: Integer (1-5)
- **Category**: Enumeration (Backend Development, Frontend Development, DevOps & Cloud, Tools & Utilities)

### Certifications

- **Name**: String (required)
- **Issuer**: String (required)
- **Year**: String
- **Image**: Media
- **Link**: URL (optional)

### Bio

- **Paragraphs**: Rich Text

## API Endpoints

The API uses Strapi's default REST API. The main endpoints are:

- GET `/api/projects`: List all projects
- GET `/api/skills`: List all skills
- GET `/api/certifications`: List all certifications
- GET `/api/bio`: Get bio information

## Authorization

The API uses Strapi's JWT authentication. You need to set up API tokens in the Strapi admin panel and provide them in the frontend's .env file.

## Deployment

For production deployment, follow these steps:

1. Set up environment variables for production
2. Build the Strapi application:

```bash
yarn build
# or
npm run build
```

3. Start the production server:

```bash
yarn start
# or
npm run start
```

## Security Considerations

- Always use API tokens with appropriate permissions
- Implement rate limiting for public endpoints
- Set up CORS appropriately in production
- Keep your Strapi admin credentials secure
- Use environment variables for sensitive configuration

## Strapi Content Schema

Run these commands after installing Strapi to set up the content types:

```bash
# Create projects content type
yarn strapi generate:api project title:string description:text tech:json github:string demo:string preview:media icon:enumeration

# Create skills content type
yarn strapi generate:api skill name:string level:integer category:enumeration

# Create certifications content type
yarn strapi generate:api certification name:string issuer:string year:string image:media link:string

# Create bio content type
yarn strapi generate:api bio paragraphs:richtext
```

Then adjust the schemas in the Strapi admin panel as needed.