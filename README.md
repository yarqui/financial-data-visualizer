# Financial Data Visualizer

The Financial Data Visualizer is a React-based web application built using the Vite tooling. It fetches and visualizes financial data for various stocks, displaying key metrics like net income, total revenue, and shareholder equity through dynamic charts. This project aims to provide a clean and interactive way to analyze financial data over different quarters.

## Features

- Fetch financial data using the Alpha Vantage API.
- Visualize data using Chart.js in a user-friendly format.
- Search functionality for different stock symbols.
- Interactive charts showing quarterly financial metrics.
- Notifications for user actions using Notiflix.

#### ❗Be advised, the fetching provides data only for companies without "." in its ticker due to Alpha Vantage API bug

## Live Demo

Visit the live demo hosted on Vercel: [Financial Data Visualizer](https://financial-data-visualizer.vercel.app/)

### ❗Free Alpha Vantage API key

It provides a limited quota for requests (25 per day). If you run into the limit, you can run this project locally and change the API_KEY to your own in `services/alphaVantageApi.js`.
You can get your own key on [Alpha Vantage official website](https://www.alphavantage.co/support/#api-key)

## To run the project locally:

#### 1. Clone the repo:

```
git clone https://github.com/yarqui/financial-data-visualizer.git
```

#### 2. Install packages

```
npm i
```

### 3. Run the development server

```
npm run dev
```

## Usage:

Enter a stock symbol in the search box to display company matches for the search query, then select one to display the financial chart. The application retrieves historical financial data and renders this information graphically.

## Built With

- React.js - A JavaScript library for building user interfaces.
- Vite - Frontend tooling for faster development.
- Axios - Promise based HTTP client for making requests.
- Chart.js - Simple yet flexible JavaScript charting.
- Notiflix - Library for client-side non-blocking notifications.
- React Icons - Access to popular icons.
- Prop-Types - Runtime type checking for React props.

## Packages

```json
{
  "axios": "^1.6.8",
  "chart.js": "^4.4.2",
  "notiflix": "^3.2.7",
  "prop-types": "^15.8.1",
  "react": "^18.2.0",
  "react-chartjs-2": "^5.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.1"
}
```
