# BOOK-STORE-BACKEND
Book Store Backend

## Prerequisites

- Node.js (version v14.17.6)
- NPM (version 6.14.15)

## Getting Started

1. Install the dependencies

npm install

## Project Structure
The project follows a typical structure for a Node.js and Sequelize application:

middleware/: Contains authentication.
bin/: Contains the server port and create server for the application.
models/: Contains the mongoose models representing the database tables.
routes/: Contains the route definitions for the application.
services/: Contains the business logic for interacting with the models.
util/: Contains the all common services and database configuration.
app.js: The entry point of the application.
routes.js: All route handling file.

## Available Scripts
npm run start: Starts the application in development mode with nodemon.

# first clone the project in your local environment
- command git clone https://github.com/patel-jay02/book-store-backend.git
- fire command npm install

# make .env file and paste below text and set value
PORT={your port}

MONGO_DB_CONNECTION_URL={your mongodb connection url}

DEFAULT_ADMIN_NAME={default admin name}
DEFAULT_PASSWORD={default admin password}

JWT_SECRET={your jwt secret}
JWT_TOKEN_EXPIRY={your expire time} ex. 36000

# run command
- npm run start