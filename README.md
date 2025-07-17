# Full Stack To-Do App

A modern, responsive to-do application built with Express.js, MongoDB, and Next.js.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Set priority levels (low, medium, high)
- Add due dates to tasks
- Responsive design for mobile and desktop

## Project Structure

```
├── todo-backend/         # Express.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── app.js            # Express app configuration
│   └── server.js         # Server entry point
│
└── todo-frontend/        # Next.js frontend
    ├── app/              # Next.js app directory
    ├── components/       # React components
    └── public/           # Static assets
```

## Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- pnpm (preferred) or npm

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd todo-backend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```

4. Start the backend server:
   ```bash
   pnpm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd todo-frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description         |
|--------|-----------------|---------------------|
| GET    | /api/todos      | Get all todos       |
| GET    | /api/todos/:id  | Get a specific todo |
| POST   | /api/todos      | Create a new todo   |
| PATCH  | /api/todos/:id  | Update a todo       |
| DELETE | /api/todos/:id  | Delete a todo       |

## Technologies Used

### Backend
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM for MongoDB
- Cors - Cross-origin resource sharing

### Frontend
- Next.js - React framework
- React - UI library
- Tailwind CSS - Styling