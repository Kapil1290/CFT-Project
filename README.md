# React Card Project

A simple React project that fetches card data from an API and displays it in reusable cards.

## Features

- Fetch card data from API
- Display multiple cards
- Reusable Card component
- Responsive card layout
- Loading and error handling
- Context API for managing card data
- Tailwind CSS for styling

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Context API
- Fetch API
- Vite

## API Used

JSONPlaceholder API:

https://jsonplaceholder.typicode.com/posts

The API provides:

- User ID
- Post ID
- Title
- Description/Body

## Project Structure

src/
- components/
  - Card.jsx
- context/
  - CardContext.jsx
- App.jsx
- main.jsx
- index.css

## How It Works

1. The application fetches data from the API.
2. The data is stored in Context state.
3. `App.jsx` gets the card data from Context.
4. `map()` is used to create multiple Card components.
5. Card data is passed to the Card component using props.
6. The X button removes a card from the React state.
7. React automatically updates the UI.
