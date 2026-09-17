# Global Error Handler and Winston Logging

This project demonstrates how to add a global error handler and structured logging to an Express.js application using Winston.

## Features

* Express.js server
* Global error-handling middleware
* Custom 404 error handling
* Structured JSON logging with Winston
* Console logging
* Application log file
* Separate error log file
* Error details including request method and URL

## Technologies Used

* Node.js
* Express.js
* Winston

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Run the Project

Start the server with:

```bash
npm start
```

The server runs on:

```text
http://localhost:5000
```

## Test Routes

### Home

```text
GET /
```

Returns a success message.

### Error Test

```text
GET /error
```

Triggers the global error handler.

### 404 Test

Open any route that does not exist, for example:

```text
GET /abc
```

The global error handler returns a 404 response.

## Logging

Winston creates structured JSON logs.

The project uses:

* `logs/app.log` for application logs
* `logs/error.log` for error logs
* Console output for development

The `logs` folder is excluded from Git using `.gitignore`.

## Project Structure

```text
global-error-winston-logging/
│
├── logs/
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Learning Outcome

In this project, I learned how to implement a global error handler in Express.js and use Winston for structured application and error logging. I also learned how to handle 404 errors and keep generated log files out of GitHub.
