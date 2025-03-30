# Getting Started

This project was deployed to https://dashboardbuild-jn42.vercel.app/

## Available Scripts

In the project directory, you can run:
### `npm install`
or
### `npm install --force`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
## Learn More
Overview

The TaskRecords component is a React functional component that displays a list of tasks. It provides filtering, sorting, and status update functionality. Users can view task details, change task status, and see success messages after updates.

Features

Fetches tasks from the TaskContext

Displays a list of tasks with filtering and sorting options

Allows users to update the status of a task

Shows a modal for task details and updates

Displays a success modal after status changes

Dependencies

React

TypeScript

TailwindCSS (or similar utility classes for styling)

Context API (useTaskContext) for state management

Props & Context

This component does not receive any props directly. Instead, it uses the useTaskContext() hook to access:

tasks: The list of tasks

loading: Loading state

updateTaskStatus(taskId, status): Function to update a task's status

Component Breakdown

Task List: Displays tasks with title, description, due date, and status.

Filters & Sorting: Users can filter by task status and toggle ascending/descending sorting.

Task Modal: Opens when a task is clicked, allowing status updates.

Success Modal: Appears after a successful update.

Usage Guide

Ensure the TaskContext provider wraps the application.

Click on a task to open the modal and update its status.

Use the filter dropdown to view specific task statuses.

Click the sort button to change the sorting order.

Example Task Data Structure

interface Task {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
}

License