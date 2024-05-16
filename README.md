# Angular SpringBoot CRUD Application - Frontend

This is the frontend part of the Angular SpringBoot CRUD application.

## Introduction

This Angular application provides a user interface for performing CRUD (Create, Read, Update, Delete) operations on employee records stored in the backend Spring Boot application.

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS

## Prerequisites

Before running this Angular application, make sure you have the following installed:

- Node.js and npm

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the `angularProject` directory.

3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Run the Angular application:

    ```bash
    ng serve
    ```

5. The Angular application will be served on `http://localhost:4200/`.

## Angular Components and Pages

### Components

1. **CreateEmployeeComponent**: Angular component for creating a new employee.
2. **UpdateEmployeeComponent**: Angular component for updating an existing employee.
3. **EmployeeListComponent**: Angular component for displaying a list of employees.

### HTML Pages

1. **create-employee.component.html**: HTML template for creating a new employee.
2. **update-employee.component.html**: HTML template for updating an existing employee.
3. **employee-list.component.html**: HTML template for displaying a list of employees.

## Component Interaction

1. **CreateEmployeeComponent**:
   - Provides a form to create a new employee record.
   - On form submission, sends a POST request to the backend to create the employee.

2. **EmployeeListComponent**:
   - Displays a list of existing employee records.
   - Allows users to update or delete employee records.

3. **UpdateEmployeeComponent**:
   - Provides a form to update an existing employee record.
   - Fetches the employee details based on the provided employee ID.
   - On form submission, sends a PUT request to the backend to update the employee.

## Routing

- Angular Router is used for navigation between different components/pages.
- Navigation links are provided in the `app.component.html` file using Bootstrap Navbar.

## Service Integration

- **EmployeeService**: Angular service responsible for interacting with the backend API.
- Performs HTTP requests (GET, POST, PUT, DELETE) to fetch, create, update, and delete employee records.

## Error Handling

- Error messages are logged to the console for any failed HTTP requests.
- Frontend components gracefully handle errors and display appropriate messages to users.

## Folder Structure

- `src/app`: Contains Angular components, services, classes, styles and HTML templates.
