# Shopverse

Shopverse is a modern, responsive e-commerce application built with React, Redux Toolkit, and Bootstrap. It offers a seamless shopping experience with features like product filtering, cart management, and secure checkout simulation.

## Features

-   **Responsive Design**: Fully responsive UI built with Bootstrap 5 and custom CSS.
-   **Dynamic Animations**: Scroll-reveal animations using AOS (Animate On Scroll) library.
-   **Product Management**:
    -   Browse products by category.
    -   **Search Functionality**: Filter products by title instantly.
-   **Shopping Cart**:
    -   Add/Remove items.
    -   Adjust quantities.
    -   Real-time total calculation.
-   **Checkout Flow**:
    -   **Payment Method Selection**: Credit Card, PayPal, or Cash on Delivery.
    -   **Order Confirmation**: Visual confirmation page displaying the selected payment method.
-   **Global Styling**: consistent color palette (Success Green theme) and typography.

## Tech Stack

-   **Frontend Framework**: React (Vite)
-   **State Management**: Redux Toolkit
-   **Routing**: React Router DOM v6
-   **styling**: Bootstrap 5, React Icons, Custom CSS
-   **Animations**: AOS
-   **HTTP Client**: Axios

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/aliabdelaziz268/Shopverse-e-commerce-website.git
    cd Shopverse-e-commerce-website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm start
    ```

## Project Structure

-   `src/components`: Reusable UI components (Header, Footer, Product Cards).
-   `src/pages`: Main application pages (Home, Cart, Products, OrderShipped).
-   `src/store`: Redux slices for state management.
-   `src/API`: API integration logic.
