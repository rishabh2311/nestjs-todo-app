# NestJS Todo App

A simple Todo app built using NestJS with JWT authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rishabh2311/nestjs-todo-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up PostgreSQL (locally or via Docker).

4. Run the app:
   ```bash
   npm run start
   ```

## Endpoints

- `POST /auth/login`: Login and receive JWT
- `POST /auth/register`: Register a new user
- `GET /todos`: Get all todo items (protected)
- `GET /users/me`: Get user (protected)
- `POST /todos`: Create a new todo item (protected)
- `PATCH /todos`: Update a specific todo item (protected)
- `DELETE /todos`: Delete a todo item (protected)
