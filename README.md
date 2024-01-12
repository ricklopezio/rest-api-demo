# Node.js, Express, and PostgreSQL REST API


## Project Structure

```
rest-aws-api/
│
├── db/
│   ├── index.js            # Database connection and queries
│   ├── manufacturer.sql    # SQL script for Manufacturer table
│   └── equipment.sql       # SQL script for Equipment table
│
├── src/
│   ├── routes/
│   │   ├── manufacturers.ts    # Routes for Manufacturer operations
│   │   └── equipment.ts        # Routes for Equipment operations
│   │
│   ├── app.ts                  # Main application file (TypeScript)
│   └── types.ts                # Custom type definitions (if needed)
│
├── dist/                      # Compiled JavaScript files (gitignored)
│
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
├── .env                       # Environment variables (database credentials etc.)
├── .gitignore                 # Specifies intentionally untracked files to ignore
└── README.md                  # Project description and setup instructions

```

### Explanation of Structure:
- **db/**: This directory holds our database related files.
  - **index.js**: Manages database connection and includes functions to run SQL queries.
  - **manufacturer.sql** and **equipment.sql**: Contain our SQL scripts for table creation.

- **routes/**: This directory contains route definitions.
  - **manufacturers.js** and **equipment.js**: Define the RESTful routes for our two resources.

- **app.js**: The heart of the api service. It sets up the Express server and binds everything together.

- **package.json**: Keeps track of all the dependencies and scripts needed for our project.

- **.env**: Stores environment variables like our database credentials. This file should be excluded from version control (git) for security reasons.

- **.gitignore**: Lists files and directories which should not be added to version control.

- **README.md**: It's always a good practice to document our project setup, usage, and any other important information here.

### Additional Project Notes:
- **Modularization**: Keeping our routes and database logic in separate directories/files makes our code cleaner and easier to maintain.
- **Environment Variables**: Store our database credentials and other sensitive information in the `.env` file for security purposes.
- **Documentation**: Use the `README.md` to explain the setup process, how to run our SQL scripts, start our application, etc.
