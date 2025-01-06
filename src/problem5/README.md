
# Todo Application

This is a Todo application built with Node.js, TypeScript, Express.js, EJS for the UI, SQLite for the database, and TypeORM for database interaction. It provides a simple interface to manage todos with features to create, update, delete, and retrieve todos.

## Prerequisites

Make sure you have the following installed on your machine:

- Docker
- Docker Compose

## Running the Application Locally

You can easily spin up the application using Docker and Docker Compose.

### Steps to Run

1. Clone this repository to your local machine.

2. Open a terminal and navigate to the root of the project.

3. Run the following command to start the application:

    ```bash
    docker-compose up
    ```

4. The application will be available at [http://localhost:8000/todos](http://localhost:8000/todos).

## Application Features

- **Create Todo**: Add a new todo item.
- **Update Todo**: Edit the details of an existing todo.
- **Delete Todo**: Remove a todo item.
- **Get List of Todos**: Retrieve a list of todos with optional filters.
- **Get Todo Details**: View details of a specific todo by its ID.

## Testing the Application

You can test the application by accessing the following URL in your browser:

- **Todos List**: [http://localhost:8000/todos](http://localhost:8000/todos)

## Stack

- **Node.js**: JavaScript runtime environment.
- **TypeScript**: Strongly-typed language built on top of JavaScript.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating engine for the UI.
- **SQLite**: Lightweight SQL database for data storage.
- **TypeORM**: ORM to interact with SQLite.
