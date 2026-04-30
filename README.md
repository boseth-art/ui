# Loan Management App UI

This is the frontend UI for the Loan Management module of our Financial Management application. It is built using **React Native** and **Expo**.

## Architecture & File Structure

We follow a clean, organized component-based architecture:

*   **`App.js`**: The minimal entry point of the application.
*   **`src/navigation/AppNavigator.js`**: Handles screen routing using React Navigation.
*   **`src/screens/`**: Contains the main pages of the app.
    *   `LoanDashboard.js`: Overview of loans and quick actions.
    *   `NewLoan.js`: Form to add a new loan with real-time payment calculations.
    *   `CompareCosts.js`: Visual comparison between two loan options.
    *   `GenerateReport.js`: Interface to export loan data.
*   **`src/components/`**: Reusable UI elements (`LoanCard`, `SummaryCard`, `ActionButton`).
*   **`src/theme/colors.js`**: A centralized color palette for easy and consistent styling.

## Design Aesthetic

The app uses a modern "Fintech" design:
*   **Deep Blue (`#0A192F`)**: For primary headers and trusted summary areas.
*   **Clean White (`#FFFFFF`)**: For readable card backgrounds.
*   **Vibrant Green (`#4CAF50`)**: For accents, positive numbers, and primary actions.

## Running the Project

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Run the following command to install all necessary dependencies:
```bash
npm install
```

### Starting the Server
Start the Expo development server:
```bash
npm start
```

*   **Web View**: To view the app in your browser, run `npm run web` or press `w` in the terminal while the server is running.
*   **Mobile View**: Download the **Expo Go** app on your iOS or Android device and scan the QR code displayed in your terminal.
