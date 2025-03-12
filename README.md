# Amazon Clone Project

Welcome to the **Amazon Clone Project**! This project is a feature-rich e-commerce web application inspired by Amazon. It is built using **HTML**, **CSS**, and **JavaScript** with backend functionality, a dynamic cart system, and unit tests written in **Jasmine**. This project demonstrates proficiency in both **frontend development** and **backend integration**, making it a strong addition to your portfolio.

---

### Live Demo
You can view the live demo of this project here: [https://amazon.kennygarcia.net](https://amazon.kennygarcia.net)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

---

## Overview

The Amazon Clone Project replicates the core functionalities of an e-commerce website, including product listings, a dynamic shopping cart, a checkout page with order summary and shipping options, and order tracking. The project also includes **backend integrations** using **fetch requests** and **localStorage** for data persistence.

This project aims to provide users with a seamless shopping experience, similar to what they would encounter on Amazon, while showcasing modern web development practices and thorough unit testing.

---

## Features

### Shopping Cart
- Add products to the cart.
- Update product quantities.
- Remove products from the cart.
- Calculate total prices with tax and shipping.

### Checkout Page
- Dynamic order summary.
- Choose from multiple shipping options (free, standard, express).
- Calculate estimated delivery dates using **Day.js**.

### Order Tracking
- Displays detailed order summaries.
- Track the delivery status (Preparing, Shipped, Delivered).

### Unit Testing with Jasmine
- Includes test cases for key functionalities:
  - **formatCurrency**: Converts cents to dollars and rounds to the nearest cent.
  - **addToCart**: Adds new products to the cart or updates existing ones.
  - **renderOrderSummary**: Dynamically displays the cart and handles product removals.

### Backend Integration
- Uses **fetch requests** to load product data and submit orders.
- Stores cart and order data in **localStorage** for persistent state management.

---

## Tech Stack

- **HTML5**: For structuring the content.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: Core functionality and dynamic content.
- **Jasmine**: Unit testing framework.
- **Day.js**: For handling dates and delivery estimations.
- **LocalStorage**: For storing cart and order data.
- **Fetch API**: For backend communication.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bebopkenny/Amazon-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Amazon-Project
   ```
3. Open the `index.html` file in your browser to view the project.

---

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/ab78cb16-7265-429c-bea4-1afeff70dcca)

### Checkout Page
![image](https://github.com/user-attachments/assets/cb95091b-0eb6-487a-80b9-9aa7e39c2baa)

### Order Page
![image](https://github.com/user-attachments/assets/929b88b6-dc64-4797-8b9d-dd38cde21998)

### Order Tracking
![image](https://github.com/user-attachments/assets/6a676ca6-a71f-4331-a379-813df0be4610)

### Testing Page
![image](https://github.com/user-attachments/assets/48149c3d-b25a-46f6-b345-7545f5d7929d)


---

## Testing

This project uses **Jasmine** for unit testing. The following test suites are included:

- **formatCurrency**
  - Converts cents to dollars.
  - Rounds down/up to the nearest cent.
  - Works with zero values.

- **addToCart**
  - Adds a new product to the cart.
  - Updates the quantity of an existing product in the cart.

- **renderOrderSummary**
  - Displays the cart.
  - Removes a product from the cart.

To run the tests:
1. Open the `SpecRunner.html` file in your browser.
2. The test results will be displayed on the screen.

---

## Future Improvements

- Add user authentication (login/logout functionality).
- Implement a backend server with a database to store product and order data.
- Enhance the UI with additional animations and responsive design.
- Add more comprehensive test cases to cover all functionalities.

---

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

For any inquiries or feedback, please reach out:

- **Name**: Kenny Garcia
- **GitHub**: [github.com/bebopkenny](https://github.com/bebopkenny)
- **Portfolio**: [kennygarcia.net](https://kennygarcia.net)
- **Email**: [kennygarcia15@yahoo.com](mailto:kennygarcia15@yahoo.com)

---

### Acknowledgments

- The **Jasmine framework** for testing.
- **Day.js** for date handling.
- **Hostinger** for hosting services.

Thank you for checking out my project!
