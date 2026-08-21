# C9-Marketing

| Repository metadata | Details |
|---|---|
| Repository | [nexuss0781/C9-Marketing](https://github.com/nexuss0781/C9-Marketing) |
| Visibility | Public |
| Fork | No |
| Archived | No |
| Default branch | `main` |
| Primary language | TypeScript |
| Topics | None listed |
| Repository description | Not provided |

---
## C9-Marketing Platf## ✨ Implemented Features

### 🔐 Authentication System
- Secure user registration with required fields:
  - Full Name
  - Username (unique)
  - Phone number (unique)
  - Email (unique)
  - Password (with minimum length validation)
  - Address
- JWT-based authentication with 1-day token expiration
- Phone number and password-based login
- Protected routes using JWT middleware

### 👤 User Management
- Unique constraints on username, email, and phone
- Password hashing using Bcrypt
- User-product relationship (one-to-many)
- User profile with contact information

### �️ Product Management
- Product creation with required details:
  - Product name
  - Multiple photos (JSON array)
  - Category
  - Condition
  - Price (with validation)
  - Address
- Product listing with seller information
- Product availability status
- Chronological product display
- Product-seller relationship

### 🎨 User Interface
- Modern dark theme implementation
- Responsive design using TailwindCSS
- Grid-based product display layout
- Loading states and error handling
- Empty state handling for products
- Clean and intuitive landing page
- Dynamic product cards

### 🔌 API Integration
- CORS enabled API endpoints
- Axios-based API service
- Automatic JWT token injection
- Environment variable configuration
- Error handling and validation


A modern, full-stack e-commerce platform built with React, TypeScript, Flask, and TailwindCSS. C9-Marketing provides a seamless shopping experience with real-time updates and secure user authentication.


## 🚀 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Axios

### Backend
- Flask
- SQLAlchemy
- Flask-JWT-Extended
- Flask-CORS
- Flask-Bcrypt
- SQLite database

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.12 or higher
- npm or yarn
- pip

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nexuss0781/C9-Marketing.git
   cd C9-Marketing
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file in the backend directory
   DATABASE_URL="sqlite:///database.db"
   JWT_SECRET_KEY="your-secret-key"
   PORT=5000
   ```

4. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   python app.py
   ```
   The backend will start on http://localhost:5000

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on http://localhost:5173

### Production Deployment

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Configure production environment**
   ```bash
   # Set production environment variables
   export FLASK_ENV=production
   export DATABASE_URL=your_production_db_url
   export JWT_SECRET_KEY=your_production_secret
   ```

3. **Start the production server**
   ```bash
   cd backend
   gunicorn app:app
   ```

## 🔧 Technical Details

### Backend Implementation
- SQLite database with SQLAlchemy ORM
- JWT token-based authentication
- CORS middleware for cross-origin requests
- Password hashing with Bcrypt
- Input validation and error handling

### Frontend Implementation
- React components with TypeScript
- TailwindCSS for responsive design
- Axios for API communication
- Protected routes with React Router
- Loading and error states management

## � API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
  - Required fields: fullName, username, phone, email, password, address
  - Returns: JWT access token

- `POST /api/auth/login` - User login
  - Required fields: phone, password
  - Returns: JWT access token

### Products
- `GET /api/products` - Get all available products
  - Public endpoint
  - Returns: List of products with seller information

- `POST /api/products` - Create new product (Protected)
  - Required fields: name, photos, category, condition, price, address
  - Requires: JWT authentication
  - Returns: Created product details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team
- Flask Team
- TailwindCSS Team
- All contributors

## 📁 Project Structure

```
C9-Marketing/
├── backend/
│   ├── app.py               # Main Flask application
│   └── requirements.txt     # Python dependencies
└── frontend/
    ├── src/
    │   ├── components/      # Reusable UI components
    │   │   ├── Header.tsx
    │   │   └── ProductCard.tsx
    │   ├── pages/          # Page components
    │   │   ├── DashboardPage.tsx
    │   │   ├── LandingPage.tsx
    │   │   ├── LoginPage.tsx
    │   │   ├── SignupPage.tsx
    │   │   └── SellItemPage.tsx
    │   ├── contexts/       # React contexts
    │   ├── services/       # API services
    │   └── routes/         # Route definitions
    └── package.json        # Project dependencies
```

## 👥 Authors

- **nexuss0781** - *Initial work*

---

Made with ❤️ by C9-Marketing Team
