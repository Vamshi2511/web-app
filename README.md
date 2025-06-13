## Project Setup Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation

To set up the project, clone the repository and install dependencies:

```bash
git clone https://github.com/Vamshi2511/web-app.git
cd crypto-dashboard
npm install
```

### Running the Web App

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Running on Mobile

To run the app on a mobile device:

1. Run the development server on your local machine.
2. Find your local IP address (e.g., `192.168.x.x`).
3. Access the app from your mobile browser by navigating to:
   ```
   http://192.168.x.x:3000
   ```
4. Alternatively, deploy it using **Vercel**, **Netlify**, or **Firebase Hosting** for a public URL.

---

### Project Structure

```
web-app/
├─ app/
│   ├─ api/
│   │   └─ crypto/
│   │       └─ route.ts        # Next.js API route (server-side data fetching)
│   ├─ globals.css             # Global CSS styles
│   ├─ layout.tsx              # App layout with React Query provider
│   └─ page.tsx                # Main page component
├─ components/
│   ├─ CryptoTable.tsx         # Table component for displaying cryptocurrencies
│   ├─ SearchBar.tsx           # Search bar component
│   ├─ LoadingOverlay.tsx      # Loading overlay component
│   ├─ ErrorMessage.tsx        # Error handling component
├─ lib/
│   └─ fetchCrypto.ts          # Client-side API fetch function
├─ styles/
│   ├─ CryptoTable.module.css  # Styles for the CryptoTable component
├─ package.json
├─ tsconfig.json
└─ ...
```
<img width="657" alt="Screenshot 2025-06-13 at 3 45 27 PM" src="https://github.com/user-attachments/assets/85f1499f-4a7e-48c6-aca3-22135c23825a" />


