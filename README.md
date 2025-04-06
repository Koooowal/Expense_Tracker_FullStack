# Expense Tracker Application

A comprehensive financial tracking application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to track their incomes and expenses with a beautiful UI and insightful visualizations.

![Expense Tracker App](./Frontend/public/4.png)

## Features

- **Interactive Dashboard**: Visualize your financial data with charts and statistics
- **Income & Expense Tracking**: Add, view, and delete both income and expense entries
- **Transaction History**: Track your recent financial activities
- **Category Management**: Organize transactions by categories
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Data updates immediately when changes are made

## Tech Stack

### Frontend
- React.js
- Styled Components
- Chart.js
- Axios
- FontAwesome Icons
- Moment.js

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS for cross-origin resource sharing
- Dotenv for environment variables

## Project Structure

```
expense-tracker/
├── frontend/                 # React frontend
│   ├── public/
│   └── src/
│       ├── Components/       # React components
│       ├── Context/          # Global context API
│       ├── Styles/           # Global styles
│       ├── Utils/            # Utility functions
│       ├── img/              # Image assets
│       ├── App.js            # Main application component
│       └── index.js          # Entry point
└── backend/                  # Express backend
    ├── controllers/          # Route controllers
    ├── db/                   # Database connection
    ├── models/               # MongoDB models
    ├── routes/               # API routes
    └── app.js                # Express app setup
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database

### Clone the Repository
```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm start
```

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

4. Access the application at `http://localhost:3000`

## API Endpoints

### Income Endpoints
- **POST** `/api/v1/add-income`: Add new income
- **GET** `/api/v1/get-incomes`: Get all incomes
- **DELETE** `/api/v1/delete-income/:id`: Delete specific income

### Expense Endpoints
- **POST** `/api/v1/add-expense`: Add new expense
- **GET** `/api/v1/get-expenses`: Get all expenses
- **DELETE** `/api/v1/delete-expense/:id`: Delete specific expense

## Component Overview

### Main Components
- **Dashboard**: Displays financial overview with charts and statistics
- **Incomes**: Manages income transactions
- **Expenses**: Manages expense transactions
- **History**: Shows recent transactions
- **Form**: Reusable form for adding transactions
- **Navigation**: App navigation menu

### State Management
The application uses React Context API for global state management, allowing components to access and modify financial data from anywhere in the application.

## Styling

The application uses styled-components for styling, with a consistent color scheme and responsive design. The main visual features include:

- **Orb**: A gradient background element that moves around the screen
- **Custom Buttons**: Styled buttons for actions
- **Cards**: Styled containers for different sections
- **Responsive Layouts**: Grid and flex layouts that adapt to different screen sizes

## Future Enhancements

- User authentication and accounts
- Budget planning features
- Financial goals tracking
- Export data functionality
- Dark mode support
- Multiple currency support

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request