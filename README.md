# Actual Appetite — Client Side Food Ordering Web Application

A responsive food ordering frontend built using React, Vite, and CSS, featuring interactive menu browsing, shopping cart management, and a checkout interface.

## Features

- **Food Menu:** Browse and filter food items by category.
- **Shopping Cart:** Add, remove, and update item quantities.
- **Price Calculation:** Calculate subtotal and delivery charges.
- **Authentication UI:** Sign In and Sign Up popups.
- **Checkout:** Enter delivery details and review the order summary.
- **Responsive Design:** Supports desktop and mobile screens.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI development |
| JavaScript (ES6+) | Application logic and interactivity |
| HTML5 & JSX | UI structure |
| CSS3 | Styling and responsive layouts |
| Vite | Development server and build tool |
| npm | Installs and manages project dependencies and scripts. |
| React Router DOM v6 | Supports client-side navigation between application pages. |
| React Icons| Provides reusable icons for interface elements. |
| React Context API  | Shares application state, including shopping cart data, across components. |
| Git & GitHub | Supports version control and source code management. |

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/code-bysakhana/actual-appetite-client.git
```

**2. Navigate to the frontend directory**

```bash
cd actual-appetite-client/frontend
```

**3. Install dependencies**

```bash
npm install
```

**4. Run the application**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Cart/
│   │   └── PlaceOrder/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Previews the production build locally. |

## Future Enhancements

- Integrate REST APIs to retrieve menu items dynamically.
- Implement secure authentication and user account management.
- Connect a database through a backend service.
- Integrate an online payment gateway.
- Add order history and order tracking.
- Develop an administrative interface for menu and order management.

## Author

**Sakhana S S**

GitHub: [@code-bysakhana](https://github.com/code-bysakhana)

---

*Actual Appetite — An interactive frontend experience for online food ordering.*
