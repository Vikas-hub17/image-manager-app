## 📷 Image Manager Web Application
A secure web application that allows users to upload and manage images with optional AI-based image analysis using the ChatGPT API.

🚀 Project Overview
This project includes:

✅ User Authentication – Secure login, registration, and logout.
✅ Image Management – Upload, view, and manage images stored in Cloudflare (replacing AWS S3).
✅ AI Image Analysis (Optional) – Uses ChatGPT API to generate image descriptions.
✅ PostgreSQL Database – For user data and image metadata.
✅ Secure API Endpoints – Protected routes requiring authentication.

🛠️ Technology Stack
Frontend: Vite + React (TypeScript)
Backend: Python Flask
Database: PostgreSQL
File Storage: Cloudflare (Previously Amazon S3)
AI Integration (Optional): ChatGPT API

📋 Core Features
🔐 User Authentication
Register, Login, and Logout.
Secure password handling with hashing.
🖼️ Image Management
Users can upload images securely.
View uploaded images in the dashboard.
Images are stored securely in Cloudflare.
🤖 AI Image Analysis (Bonus Feature)
Generate AI-generated descriptions for uploaded images using the ChatGPT API.

📂 Project Structure
```bash
/image-manager-app
│
├── /backend
│   ├── /app
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── db.py
│   │   ├── imageController.py
│   │   ├── emailController.py
│   │   └── utils
│   │       └── errorHandler.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── /frontend
│   ├── /src
│   │   ├── /api
│   │   │   ├── imageApi.ts
│   │   │   └── authApi.ts
│   │   ├── /components
│   │   │   ├── ImageUpload.tsx
│   │   │   ├── ImageList.tsx
│   │   │   ├── ProfilePage.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── /styles
│   │   │   ├── ImageStyles.ts
│   │   │   ├── ProfileStyles.ts
│   │   │   └── GlobalStyles.ts
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── theme.ts
│
├── .env
├── .gitignore
├── README.md
└── package.json
```

⚙️ Setup Instructions
Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/image-manager-app.git
cd image-manager-app
```

Step 2: Install Dependencies
Backend

```bash
cd backend
pip install -r requirements.txt
```

Frontend

```bash
cd frontend
npm install
```
Step 3: Environment Variables Configuration
Create a .env file in both /backend and /frontend with the following keys:

Backend .env
```bash
POSTGRES_URI=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

Frontend .env
```bash
VITE_API_BASE_URL=http://localhost:5000
```

Step 4: Run the Application
Backend

```bash
python main.py
```

Frontend

```bash
npm run dev
```

🔐 Security Features
✅ Enforced HTTPS for secure communication.
✅ Passwords securely stored with hashing techniques.
✅ Cloudflare bucket security ensuring only image owners can access their content.

🧪 Testing Instructions
Ensure PostgreSQL is running locally or via a cloud provider.
Test the API endpoints using Postman or ThunderClient.
For frontend testing, use Jest or React Testing Library.

🚀 Deployment
For production deployment:

Deploy Backend using Railway, Render, or Cloudflare Workers.
Deploy Frontend using Vercel, Netlify, or Cloudflare Pages.

🎯 Bonus Features for Extra Credit
✅ Improved UI with Styled-Components.
✅ Dark Mode support for better UX.
✅ Email verification for enhanced security.
✅ AI-powered image descriptions using ChatGPT API.
