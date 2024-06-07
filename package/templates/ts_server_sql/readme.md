# TypeScript Server with SQL

This is a template for a TypeScript server with SQL integration. It provides a starting point for building a server-side application using TypeScript and connecting it to a SQL database.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- SQL database (e.g., MySQL, PostgreSQL)
- MySQL can be downloaded here https://dev.mysql.com/downloads/mysql/

## Configuration

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd ts_server_sql`.
3. Install the required dependencies: `npm install`.

## Database Setup

1. Create a new database in your SQL server.
2. Update the database configuration in the `src/config.ts` file with your database credentials.

## Environment Variables

1. Create a new file named `.env` in the root directory.
2. Add the following environment variables to the `.env` file:

```
DB_HOST=<your_database_host>
DB_PORT=<your_database_port>
DB_NAME=<your_database_name>
DB_USER=<your_database_username>
DB_PASSWORD=<your_database_password>
```

## Running the Server

To start the server, run the following command:

```
npm start
```

This will compile the TypeScript code and start the server on the specified port.

## Features

This template includes the following features:

- Express.js server setup
- SQL database connection
- API routes for CRUD operations
- Error handling middleware
- Logging middleware
- Testing (Jest)

## Testing
- All test are handled in the __test__ directory and should follow the same path routes your files you're testing are located in.
- There are currently 10 test that test user authentication and route handling

Feel free to modify and extend this template to suit your specific needs.