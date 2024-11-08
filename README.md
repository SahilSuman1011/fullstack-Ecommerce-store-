
# Mock eCommerce Website

A mock eCommerce website similar to Amazon, featuring a user-friendly interface and complete functionality for browsing products, viewing details, and processing mock payments.

## Table of Contents
1. [Features](#features)
2. [Requirements](#requirements)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- **Homepage**: Displays featured products and categories.
- **Product Listing Page**: Allows users to browse through available products.
- **Product Detail Page**: Shows detailed information about a selected product.
- **Checkout Page**: Facilitates the selection of payment methods and order confirmation.
- **Mock Payment Success/Failure Page**: Provides feedback on payment processing.

## Requirements
- Use mock APIs to load product inventory.
- Complete the flow from product selection to checkout and payment success/failure.

## Technologies Used
- **MongoDB**: Database for storing product inventory and user data.
- **Express.js**: Web framework for Node.js to build APIs.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- Mock APIs (like JSONPlaceholder or your custom mocks) for loading product data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mock-ecommerce-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mock-ecommerce-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`.

## API Endpoints
- **Get Products**: `GET /api/products`
  - Fetches the list of available products.
  
- **Get Product Details**: `GET /api/products/:id`
  - Fetches details for a specific product by ID.

- **Checkout**: `POST /api/checkout`
  - Processes the checkout with payment information.

## Folder Structure
![image](https://github.com/user-attachments/assets/06ce0b6a-c813-42f7-ae2b-c1ed965a36a9)


## Contributing
If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
