# 🛒 Cloud-Based E-Commerce App

## 📌 Project Summary

This project is a cloud-enabled e-commerce platform that provides basic product management functionalities such as adding, listing, and deleting products. It uses a modular architecture with a RESTful API and is deployed on Google Cloud Platform using App Engine. Data is securely stored using MongoDB Atlas.

The system allows users to manage product entries through a React-based user interface, while the backend handles data processing and persistence via Express.js.

---

## 🧪 Technologies & Tools Used

| Layer       | Technologies / Tools                          |
|-------------|-----------------------------------------------|
| Frontend    | React.js (Component-based, Fetch API)         |
| Backend     | Node.js, Express.js                           |
| Database    | MongoDB Atlas (Cloud-based NoSQL)             |
| Cloud       | Google Cloud App Engine (Standard Environment)|
| Others      | CORS, dotenv (env management), YAML config    |

---

## 🧱 Architecture & System Design

### 🔄 3.1 General Architecture

- **Frontend:** Enables users to add, list, and delete products via forms and lists.
- **Backend:** A RESTful API built with Express.js manages business logic and data operations.
- **MongoDB Atlas:** Secure and flexible cloud-based NoSQL database.
- **App Engine:** Hosts and scales the application efficiently in the cloud.

---

### 📋 3.2 Data Structure

#### 📦 Product Object

| Field        | Type    | Description                       |
|--------------|---------|-----------------------------------|
| id           | string  | Unique ID assigned by MongoDB     |
| name         | string  | Product name                      |
| description  | string  | Product description               |
| price        | number  | Product price (₺)                 |
| createdAt    | string  | Creation date (ISO 8601 format)   |

---

## 🌐 API Endpoints

### 🔧 Product APIs

#### ➕ POST `/api/products`

Creates a new product.  
**Request Body:**

```json
{
  "name": "Shampoo",
  "description": "Organic hair care shampoo",
  "price": 120
}
