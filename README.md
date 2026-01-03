# 🥫 Pantry Management App

A modern, **real-time pantry inventory management system** built with Next.js and Firebase. Track your kitchen items, manage quantities, and never run out of essentials again!

## 🌟 Features

- **Real-time Inventory Tracking**: Live updates using Firebase Firestore
- **Smart Quantity Management**: Automatically increment/decrement item counts
- **Add New Items**: Quick modal interface for adding pantry items
- **Remove Items**: One-click removal with automatic quantity management
- **Persistent Storage**: Cloud-based storage ensures data is never lost
- **Responsive Design**: Beautiful Material-UI components that work on any device
- **Auto-capitalization**: Items displayed with proper formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Material-UI (MUI) with Emotion
- **Database**: Firebase Firestore (NoSQL)
- **Language**: JavaScript (ES6+)
- **State Management**: React Hooks (useState, useEffect)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm/yarn/pnpm/bun
- Firebase account ([Create one here](https://firebase.google.com/))

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HardhikTottempudi/Pantry-app.git
   cd Pantry-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   
   Create a `firebase.js` file in the root directory with your Firebase configuration:
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const firestore = getFirestore(app);
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💡 How to Use

### Adding Items
1. Click the **"Add"** button
2. Enter the item name in the modal
3. Click **"Add"** to save
4. Item appears in your pantry with quantity 1

### Removing Items
1. Click **"Remove"** on any item
2. Quantity decreases by 1
3. Item automatically deleted when quantity reaches 0

### Managing Quantities
- Each "Add" action increments existing item quantity
- Each "Remove" action decrements quantity
- Quantities displayed in real-time

## 📊 Firebase Structure

```
pantry (collection)
  └─ {itemName} (document)
       └─ count: number
```

## 🎯 Key Features for Hiring Managers

- **Modern Web Development**: Next.js 14 with latest React features
- **Cloud Integration**: Firebase Firestore for real-time data sync
- **UI/UX Design**: Professional Material-UI implementation
- **State Management**: Efficient React Hooks usage
- **Database Operations**: CRUD operations with Firestore
- **Async Programming**: Proper handling of asynchronous operations
- **Component Architecture**: Clean, reusable component structure

## 📖 Project Structure

```
pantry-app/
├── app/
│   ├── page.js          # Main pantry interface
│   └── layout.js        # Root layout
├── public/              # Static assets
├── firebase.js          # Firebase configuration
├── package.json         # Dependencies
└── next.config.mjs      # Next.js config
```

## 🔧 Technical Highlights

- **Server-Side Rendering**: Next.js App Router for optimal performance
- **Real-time Updates**: Firestore listeners for live data synchronization
- **Optimistic UI**: Instant feedback on user actions
- **Material Design**: Consistent, modern UI components
- **Type Safety**: Structured data models

## 🔮 Future Enhancements

- Add search and filter functionality
- Implement categories for items
- Add expiration date tracking
- Shopping list generation
- Barcode scanning integration
- Multi-user support with authentication
- Mobile app version
- Recipe suggestions based on available items

## 🚧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HardhikTottempudi/Pantry-app)

1. Push your code to GitHub
2. Import project in Vercel
3. Add Firebase environment variables
4. Deploy!

## 📚 Learning Outcomes

This project demonstrates:
- Next.js 14 App Router architecture
- Firebase Firestore integration
- Material-UI component library
- Real-time database operations
- Modern React patterns and hooks
- Cloud-based application development

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Hardhik Tottempudi**
- GitHub: [@HardhikTottempudi](https://github.com/HardhikTottempudi)
- Portfolio: [hardhiktottempudi.com](https://hardhiktottempudi.com/)

---

*Built with Next.js, Firebase, and Material-UI to demonstrate modern full-stack web development skills.*
