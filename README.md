# Spidr Air Fryer Interest Form

A React application for collecting interest in Spidr Design's fictional air fryer product. This form captures user information including contact details, cost guesses, and a unique 16-digit PIN with automatic formatting.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Spidr Design Branding**: Dark theme with teal accents matching Spidr's visual identity
- **Form Validation**: Required field validation and input formatting
- **PIN Formatting**: Automatic formatting of 16-digit PIN with dashes (####-####-####-####)
- **Cost Input**: Dollar-formatted cost guessing field
- **Console Logging**: Form data is logged to browser console on submission

## Form Fields

1. **First Name** - Text input
2. **Last Name** - Text input  
3. **Phone Number** - Tel input
4. **Email Address** - Email input with validation
5. **Cost Guess** - Numeric input with dollar sign prefix
6. **16-Digit Spidr PIN** - Auto-formatted with dashes

## Technology Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spidr-airfryer-form.git
   cd spidr-airfryer-form
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## GitHub Pages Deployment

### Automatic Deployment

This project is configured for easy deployment to GitHub Pages using the `gh-pages` package.

### Setup Instructions

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository named `spidr-airfryer-form`
   - Make it public (required for GitHub Pages on free accounts)

2. **Update Configuration**:
   - In `package.json`, update the `homepage` field:
     ```json
     "homepage": "https://yourusername.github.io/spidr-airfryer-form"
     ```
   - Replace `yourusername` with your actual GitHub username

3. **Initialize Git and Push**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Spidr Air Fryer Interest Form"
   git branch -M main
   git remote add origin https://github.com/yourusername/spidr-airfryer-form.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   # or
   pnpm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Scroll down to "Pages" section
   - Source should be set to "Deploy from a branch"
   - Branch should be set to "gh-pages"
   - Click Save

6. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/spidr-airfryer-form`
   - It may take a few minutes for the deployment to complete

### Manual Deployment Steps

If you prefer manual deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the built files
3. Upload the contents of `dist` to your web hosting service

## Project Structure

```
spidr-airfryer-form/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── App.jsx          # Main application component
│   ├── App.css          # Spidr Design styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Customization

### Styling
- Main styles are in `src/App.css`
- Spidr Design colors are defined as CSS custom properties
- Tailwind classes are used for responsive design

### Form Behavior
- Form submission logic is in `src/App.jsx`
- Currently logs data to console - modify `handleSubmit` function for different behavior
- Validation can be enhanced by adding more field checks

## Design Notes

This form was designed to match Spidr Design's visual identity:
- **Dark Theme**: Charcoal background (#2d2d2d)
- **Accent Color**: Teal (#4ECDC4)
- **Typography**: Clean, modern sans-serif
- **Professional**: Corporate aesthetic suitable for embedding

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes as part of a coding challenge.

## Contact

For questions about this implementation, please refer to the original challenge requirements.

