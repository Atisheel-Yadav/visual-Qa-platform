# 🚀 Advanced Automated Visual QA Platform

An AI-powered full-stack web application that automatically analyzes website UI/UX, detects design and accessibility issues, and generates detailed visual reports with highlighted problem areas.

---


---

## 📌 Project Overview

The **Advanced Automated Visual QA Platform** enables users to input any website URL and receive an intelligent analysis of UI quality, accessibility, responsiveness, and layout issues.

The system combines:

* **Playwright** for automated browser rendering & screenshots
* **Gemini AI (Google)** for intelligent UI analysis
* **FastAPI** backend for processing
* **React + Tailwind** frontend for interactive visualization
* **MongoDB** for report storage

---

## ✨ Key Features

### 🔍 Automated Website Analysis

* Captures full-page screenshots using Playwright
* Extracts HTML content for AI processing

### 🧠 AI-Powered Insights

* UI Score (0–100)
* Accessibility Score (0–100)
* Categorized issues:

  * Layout
  * Accessibility
  * Responsiveness

### 📍 Visual Issue Highlighting

* Bounding boxes drawn directly on screenshots
* Pinpoints exact UI problem areas

### 📊 Interactive Dashboard

* Clean, modern UI with Tailwind CSS
* Categorized issue cards with descriptions
* Real-time analysis results

### 📄 PDF Report Generation

* Download complete analysis report
* Includes scores, issues, and annotated screenshot

### ☁️ Cloud Deployment

* Backend deployed on Render
* Frontend deployed on Vercel

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* react-to-pdf

### Backend

* FastAPI
* Playwright
* Google Gemini API
* Motor (MongoDB async driver)

### Database

* MongoDB Atlas

---



---

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/visual-qa-platform.git
cd visual-qa-platform
```

---

### 🔹 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
playwright install
```

---

### 🔹 3. Environment Variables

Create `.env` inside `backend/`:

```
MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_api_key
```

---

### 🔹 4. Run Backend

```bash
uvicorn app.main:app --reload
```

👉 Open: http://localhost:8000/docs

---

### 🔹 5. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

👉 Open: http://localhost:5173

---

## 🌍 Deployment

### 🔹 Backend (Render)

* Build Command:

  ```
  pip install -r requirements.txt && playwright install chromium
  ```
* Start Command:

  ```
  playwright install chromium && uvicorn app.main:app --host 0.0.0.0 --port 10000
  ```

---

### 🔹 Frontend (Vercel)

* Root Directory: `frontend`
* Build Command: `npm run build`
* Output Directory: `dist`

---

## ⚠️ Challenges & Solutions

| Challenge                       | Solution                          |
| ------------------------------- | --------------------------------- |
| Playwright not working on cloud | Installed Chromium in runtime     |
| API key exposure                | Switched to environment variables |
| Slow backend response           | Optimized page load strategy      |
| Async conflicts                 | Used `asyncio.to_thread`          |

---

## 🧠 Key Learnings

* Full-stack system design and architecture
* AI integration in real-world applications
* Browser automation using Playwright
* Cloud deployment (Render + Vercel)
* Debugging production issues (timeouts, API failures)

---

## 🚀 Future Improvements

* User authentication (JWT)
* History dashboard (stored reports)
* CI/CD pipeline integration
* Migration to `google.genai` SDK
* Performance optimization with background jobs

---

## 👨‍💻 Author

**Atisheel Yadav**

* GitHub: https://github.com/Atisheel-Yadav
* LinkedIn: https://linkedin.com/in/Atisheel-Yadav
---

