# 🔗 URL Shortener API

A simple Node.js + Express.js REST API that shortens long URLs and redirects to the original one using a short code. MongoDB is used as the backend database.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (via Mongoose)**
- **Crypto** – to generate unique short codes
- **Nodemon** – for development

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SaxenaVaibhav80/url_shortner
cd url_shortner
```

2️⃣ Install dependencies
```
npm i nodemon --save-dev mongoose express crypto 
```

This installs:

express
mongoose
crypto
nodemon (as dev dependency)

⚙️ Add Scripts in package.json
```

"scripts": {
  "start":"node index.js"
  "dev": "nodemon index.js"
}
```

🔐 Environment Variables
Create a .env file in the root directory:
```
URL = your mongo url
PORT = 3000
```
Don’t forget to replace it with your actual MongoDB connection string.

▶️ Run the Server
```
npm run dev
```
Server will start at http://localhost:3000 or whatever PORT is defined in .env.

📮 API Endpoints

✅ 1. POST /shorten

Shortens the given long URL.

Request:

POST http://localhost:3000/shorten
Content-Type: application/json
{
  "url": "https://example.com/some/very/long/link"
}

Response:
```

{
  "shortCode": "a1b2c3d4e5f6"
}

```

🔁 2. GET /:code

Redirects to the original long URL using the short code.

Request:
GET http://localhost:3000/a1b2c3d4e5f6

Action:
Redirects to:
https://example.com/some/very/long/link

If short code is invalid, it returns:
```
{
  "message": "Please send existed URL or correct url"
}
```
🧪 API Testing (Postman Screenshots)'

📸 1. POST Request to /shorten

![POST Request to /shorten](https://github.com/user-attachments/assets/7668ab4f-d66e-4f9e-87e2-131863c62865)

📸 2. GET Request to /:code

Redirecting user to original website using code.

![GET Request to /:code](https://github.com/user-attachments/assets/4dee7043-b2f6-4dd0-89f0-794349b36e37)

📸 3. Wrong code request

![Wrong code request](https://github.com/user-attachments/assets/83032523-fc0f-483f-a073-de9f4ae11995)




