# NestJS Todo App

A simple Todo app built using NestJS with JWT authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/<repo-name>.git
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
- `GET /todos`: Get all todos (protected)
- `POST /todos`: Create a new todo (protected)
