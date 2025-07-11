# Spidr Air Fryer Interest Form

> ✨ A submission for Spidr Design’s Full-Stack Engineer coding challenge

A React application for collecting interest in Spidr Design's fictional air fryer product. This form captures user information including contact details, cost guesses, and a unique 16-digit PIN with automatic formatting.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Spidr Design Branding**: Dark theme with teal accents matching Spidr's visual identity
- **Form Validation**: Required field validation and input formatting
- **PIN Formatting**: Auto-formatted 16-digit PIN with dashes (####-####-####-####)
- **Cost Input**: Dollar-only input field
- **Console Logging**: Form data is logged to browser console on submission

## Form Fields

1. **First Name** – Text input  
2. **Last Name** – Text input  
3. **Phone Number** – Tel input  
4. **Email Address** – Email input with validation  
5. **Cost Guess** – Numeric input with dollar sign prefix  
6. **16-Digit Spidr PIN** – Auto-formatted with dashes

## Technology Stack

- **React 19** – Frontend framework
- **Vite** – Build tool and development server
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – UI component library
- **Lucide React** – Icon library

## Live Demo

🟢 **Live App**: [https://rohanreddy79.github.io/spidr-airfryer-form](https://rohanreddy79.github.io/spidr-airfryer-form)  
📁 **Source Code**: [https://github.com/rohanreddy79/spidr-airfryer-form](https://github.com/rohanreddy79/spidr-airfryer-form)

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Setup

```bash
git clone https://github.com/rohanreddy79/spidr-airfryer-form.git
cd spidr-airfryer-form
npm install    # or pnpm install
npm run dev    # or pnpm run dev
