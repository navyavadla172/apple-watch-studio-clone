# Apple Watch Studio Clone

This is a pixel-perfect clone of the Apple Watch Studio created using **Next.js** and **Tailwind CSS**. The project allows users to customize their Apple Watch by selecting case materials, sizes, bands, and colors.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## Demo
A live demo of the project can be found at:
[https://apple-watch-studio-clone.vercel.app](https://apple-watch-studio-clone.vercel.app)

## Features
- Dynamic watch customization (sizes, cases, bands, and colors)
- Interactive, animated buttons and transitions
- Fully responsive layout
- Checkout flow and summary page
- Clean and modular codebase

## Technologies Used
- **Frontend Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **State Management**: React (useState)
- **Deployment**: Vercel

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/apple-watch-studio-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd apple-watch-studio-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Folder Structure
```
/
├── components/               # Reusable React components
│   ├── SizeSelection.js
│   ├── CollectionSelection.js
│   └── ...
│
├── pages/                    # Next.js page routes
│   ├── index.js              # Home page
│   ├── customization.js      # Watch customization page
│   ├── checkout.js           # Checkout page
│   ├── summary.js            # Order summary page
│   └── _app.js               # App-level configuration
│
├── public/images/            # Watch images (organized by size/case/band)
│
├── styles/                   # Global and component styles
│   └── tailwind.css
│
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Project dependencies and scripts
```

## Customization
### Update Watch Options
You can modify the available watch sizes, cases, bands, and colors by editing `customization.js`:
```javascript
const sizes = ['42mm', '46mm'];
const cases = ['Aluminum', 'Titanium'];
const bands = ['Sport Loop', 'Sport Band', 'FineWoven'];
const colors = ['Black Unity', 'Starlight', 'Midnight'];
```

## Deployment
1. Deploy to Vercel:
   ```bash
   vercel
   ```
2. Ensure the build is successful and accessible at your Vercel domain.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute the project with attribution.

