# E-Commerce-Project
Here's a concise **README** file for an E-commerce website built using the MERN stack:

---

# E-commerce Website

An E-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. This project features a fully functional online store where users can browse products, add items to their cart, and complete purchases.

## Features

- **User Authentication:** Secure user registration and login.
- **Product Management:** CRUD operations for products.
- **Shopping Cart:** Add, update, and remove products from the cart.
- **Order Management:** Place and view orders.
- **Payment Integration:** Checkout with payment processing.
- **Admin Dashboard:** Manage users, products, and orders.

## Tech Stack

- **MongoDB:** Database for storing product and user information.
- **Express:** Backend framework for building the API.
- **React:** Frontend library for creating a responsive user interface.
- **Node.js:** Server runtime environment.

## Milestone 1: Introduction to the MERN Stack

### Introduction
The MERN stack comprises MongoDB, Express.js, React, and Node.js. This stack is favored for its JavaScript-only approach, streamlining development and making it newbie-friendly. 

### MERN Stack Components
- **MongoDB**: A NoSQL database that stores data in JSON-like documents.
- **Express.js**: A web application framework for Node.js.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.

### REST API
REST (Representational State Transfer) is an architectural style for building web services. We created various API endpoints for:

- **User Authentication**: Registering and logging in users.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders.

These APIs interact with the database to serve data in a structured format, typically JSON.

### MongoDB
- Defined the structure and relationships of data.
- Verified user identity before allowing access to specific resources.

## Milestone 2: Frontend Development

### Frontend Development
- Created a login page using React.
- Styled the login page using Tailwind CSS.

## Milestone 3: Backend Setup

### Backend Structure
- Created a clean folder hierarchy for the backend project (routes, controllers, models, middleware).
- Set up a Node.js server with Express to handle API requests.

### MongoDB Integration
- Integrated MongoDB to store data efficiently.
- Tested the connection for CRUD operations.

### Error Handling
- Implemented basic error handling for better debugging and user feedback.

## Milestone 4: User Model and File Uploads

### Brief Overview
- Created the User Model and User Controller.
- Set up Multer for handling file uploads.

## Milestone 5: React Signup Page

### Features
- **User Input Fields**: Captured user data such as Full Name, Email, and Password.
- **Password Visibility Toggle**: Provided users with an option to toggle password visibility.
- **Avatar Upload**: Enabled users to upload an avatar image.
- **Form Submission**: Handled multipart/form-data for file uploads and integrated with the backend using Axios.

### Tech Stack
- React
- React Icons
- Axios for API requests
- Tailwind CSS for styling

### Setup
Install the necessary dependencies:
```bash
npm install react-icons axios
```

## Milestone 6: Password Encryption

### Why Encrypt Passwords?
- **Protect User Data**: Prevents exposure in case of a security breach.
- **Privacy**: Ensures passwords are not visible to unauthorized individuals.
- **Compliance**: Meets security standards like GDPR and PCI-DSS.
- **Stops Password Theft**: Encrypted passwords are harder to steal or guess.

### Tasks Completed
- Implemented `bcrypt` to hash passwords during signup.
- Ensured hashed passwords are stored in the database instead of plain text.
- Stored complete user information securely, including name, email, and other details.


