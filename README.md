# CARDS HANDS ON

## Projects File Structure
```
src/
├── assets/                   # Static assets (e.g., images, icons, fonts)
│   ├── images/               # Image assets
│   └── data/                 # Data assets 
├── components/
│   ├── common/               # Reusable components
│   │   ├── Card/             # The Card component folder
│   │   │   ├── Card.jsx      # Card implementation
├── pages/                    # Page components
│   ├── Home.jsx              # Home page rendering the Card component
├── App.jsx                   # Main App component
└── index.jsx                 # React entry point
```

## Tasks
### 1. Build the application building blocks components
What component will be used in our application?

What props each one should receive? 
### 2. Add some data
Get the data from `src/assets/data/data.json` and present the first element in the `Card` component.
### 3. Handle data array
Present all element from `data.json` on the screen. Each element must be in a card.
### 4. Add some logic
Implement search by cards title. 

When the user enters a phrase, the screen will present only the cards that starts with that phrase.
