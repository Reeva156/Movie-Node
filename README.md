# Movie API Project

A simple REST API for managing movies built with Node.js, Express, and MongoDB using Mongoose.

## Tech Stack

- Node.js
- Express
- MongoDB & Mongoose
- Dotenv

## Project Structure

```text
MOVIE/
│── controllers/
│   ├── movieController.js
│   └── userController.js
│── db/
│   └── db.js
│── middleware/
│   └── auth.js
│── models/
│   ├── movie.js
│   └── User.js
│── routes/
│   ├── movieRoute.js
│   └── userRoute.js
│── .env
│── package.json
│── README.md
└── server.js
```

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```env
PORT=1513
MONGODB_URL=mongodb://127.0.0.1:27017/Movie
```

3. Start the server:
```bash
node server.js
```

The server starts at `http://localhost:1513`.

## Middleware

The project includes a custom authorization middleware in `middleware/auth.js`.
To access protected movie routes (`POST`, `PUT`, `DELETE`), pass this header in your request:

```text
authorization: admin123
```
*(or `x-api-key: admin123`)*

## API Endpoints

### 1. Root Route
- `GET /` - Check server status

### 2. User Routes
- `POST /users/register` - Register a new user
- `POST /users/login` - Login user

#### Register Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 3. Movie Routes

| Method | Endpoint | Description | Protected |
| :--- | :--- | :--- | :--- |
| GET | `/movies` | Get all movies | No |
| GET | `/movies/:id` | Get movie by ID | No |
| POST | `/movies` | Add new movie | Yes (Header required) |
| PUT | `/movies/:id` | Update movie | Yes (Header required) |
| DELETE | `/movies/:id` | Delete movie | Yes (Header required) |

#### Add / Update Movie Body:
```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "genre": "Sci-Fi",
  "rating": 8.8
}
```
