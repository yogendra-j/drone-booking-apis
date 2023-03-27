# Droame Aerial Videography Booking Portal - Backend

This is the backend server application for the Droame Aerial Videography Booking Portal. This application provides a REST API for operators to manage customers and their bookings of drone shots.

## Installation

To install and run the application, follow these steps:

To install and run the application, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Configure the database connection by creating a `.env` file with the following environment variables: DATABASE_URL="mysql://user:password@localhost:3306/droame"
4. Replace `user` and `password` with your MySQL credentials, and `droame` with the name of your database. If you're using a different type of database, adjust the URL accordingly.
4. Run database migrations using `npx prisma migrate dev`. This will create the necessary tables in your database. If you encounter any errors, make sure that your database connection is set up correctly in the `.env` file.
5. Start the server using `npm start`.
6. The API will be available at `http://localhost:8000`.


## API Documentation

The API provides the following endpoints:

### Customers

- GET /api/customers - Get a list of all customers.
- POST /api/customers - Create a new customer.
- GET /api/customers/:id - Get a single customer by ID.
- PUT /api/customers/:id - Update a customer by ID.
- DELETE /api/customers/:id - Delete a customer by ID.

### Bookings

- GET /api/bookings - Get a list of all bookings.
- POST /api/bookings - Create a new booking.
- GET /api/bookings/:id - Get a single booking by ID.
- PUT /api/bookings/:id - Update a booking by ID.
- DELETE /api/bookings/:id - Delete a booking by ID.

### Error Responses

If an error occurs, the API will respond with an appropriate HTTP status code and a JSON response with an "error" property containing a message describing the error.

## Technologies

This application was built using:

- Node.js
- Express.js for the server framework
- Prisma for database access

## Contributing

Contributions are welcome! If you find a bug or would like to add a feature, please open an issue or a pull request.

## License

This application is licensed under the MIT license.
