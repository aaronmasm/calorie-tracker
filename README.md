# Calorie Tracker

A React application for tracking calories consumed and burned. This project demonstrates the use of React components,
Context API, `useReducer` for state management, and TypeScript for type safety.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [License](#license)

## Project Overview

The Calorie Tracker application allows users to track their calorie consumption and expenditure from various activities.
Users can add, update, and delete activities, view a summary of calories consumed, burned, and net calories. The
application is built with React, TypeScript, and uses the Context API along with `useReducer` for state management.

## Features

- **Add Activity:** Create new activities with details such as name, category, and calories.
- **Update Activity:** Modify existing activity details.
- **Delete Activity:** Remove activities from the list.
- **Track Calories:** View total calories consumed, burned, and net calories.
- **Reset App:** Clear all activities and reset the application to its initial state.
- **Responsive Design:** Adaptable to various screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tool for fast builds and optimized development experience.
- **TypeScript:** Superset of JavaScript with static types.
- **React Context API:** For managing global state.
- **React `useReducer`:** For state management with complex state logic.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aaronmasm/calorie-tracker.git

2. **Navigate to the project directory:**

   ```bash
   cd calorie-tracker

3. **Install the dependencies:**

   ```bash
   npm install

4. **Start the development server:**

   ```bash
   npm run dev

## Usage

1. **Add Activity:**
    - Use the form provided to add a new activity. Fill out the fields for category, name, and calories, then submit the
      form to add the activity.

2. **Update Activity:**
    - To update an existing activity, select the activity you want to edit from the list. Make the necessary changes in
      the form and submit to update the activity details.

3. **Delete Activity:**
    - To remove an activity, click the trash icon next to the activity item in the list. Confirm the deletion to remove
      the activity from the list.

4. **Track Calories:**
    - View your current calorie consumption, burned calories, and net calories in the summary section provided by the
      `CalorieTracker` component.

5. **Reset App:**
    - Click the reset button to clear all activities and reset the application to its initial state. This will remove
      all added activities and start with a fresh state.

## Project Structure

The project structure is organized as follows:

- `src/`
    - `components/` - Contains React components used in the application.
        - `CalorieDisplay.tsx` - Component for displaying calorie values with associated labels.
        - `CalorieTracker.tsx` - Component for showing calorie summary (consumed, burned, and net calories).
        - `ActivityList.tsx` - Component for listing activities with options to edit and delete.
        - `Form.tsx` - Component for adding and updating activities.
    - `data/` - Contains sample category data.
        - `categories.ts` - Category data used in the application.
    - `hooks/` - Contains custom hooks.
        - `useActivity.ts` - Custom hook for managing activity state.
    - `context/` - Contains context providers.
        - `ActivityContext.tsx` - Provides the Activity context and state management.
    - `reducer/` - Contains state management logic.
        - `activity-reducer.ts` - Reducer function for managing activity-related state.
    - `types/` - TypeScript type definitions.
        - `index.ts` - Defines types for the application.
    - `helpers/` - Contains utility functions.
        - `index.ts` - Helper functions for various operations.
    - `App.tsx` - Main application component.
    - `main.tsx` - Entry point for the React application.
    - `index.css` - Global styles.

## Components

- **CalorieDisplay:** Displays formatted calorie amounts with associated labels.
- **CalorieTracker:** Provides an overview of calorie consumption, calories burned, and net calories.
- **ActivityList:** Lists activities with options to edit or delete them.
- **Form:** Manages form inputs for adding and updating activities.

## Styling

The application uses Tailwind CSS for styling. The utility-first approach ensures a clean and responsive design,
allowing for rapid development and consistent look and feel across different devices.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
