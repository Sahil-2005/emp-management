<div align="center">

# 🎯 Employee Management System

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-brightgreen?style=for-the-badge)](https://emps-management.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)

<p align="center">
  <strong>A modern, role-based task management application built with React</strong>
</p>

<p align="center">
  <a href="https://emps-management.netlify.app/">View Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-contributing">Contributing</a>
</p>

</div>

---

## 📖 About

**Employee Management System (EMS)** is a sleek, role-based React web application that allows **Admins** to assign tasks and manage employees, while **Employees** can view and update their task progress in real-time.

This project uses **localStorage** for data persistence, making it lightweight and easy to run without any backend setup. Perfect for React beginners and aspiring frontend developers! 🚀

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 👨‍💼 **Role-Based Auth** | Separate login flows for Admin and Employee |
| 📋 **Admin Dashboard** | Assign, monitor, and manage all tasks |
| 🧑‍💻 **Employee Dashboard** | View, accept, and update assigned tasks |
| ✅ **Task Status Tracking** | New, Accepted, Completed, and Failed states |
| 📦 **Persistent Data** | Uses localStorage for seamless data storage |
| 🧠 **Context API** | Centralized state management |
| 📱 **Responsive Design** | Beautiful UI across all devices |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Build Tools** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) |
| **Deployment** | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white) |

</div>

---

## 📂 Project Structure

```
ems/
├── 📄 index.html
├── 📦 package.json
├── ⚙️ vite.config.js
├── 🎨 tailwind.config.js
├── 📝 README.md
└── 📁 src/
    ├── App.jsx
    ├── main.jsx
    ├── 📁 components/
    │   ├── 🔐 Auth/
    │   │   └── Login.jsx
    │   ├── 📊 Dashboard/
    │   │   ├── AdminDashboard.jsx
    │   │   └── EmployeeDashboard.jsx
    │   ├── 🔧 other/
    │   │   ├── AllTask.jsx
    │   │   ├── CreateTask.jsx
    │   │   ├── Header.jsx
    │   │   └── TaskListNumbers.jsx
    │   └── 📋 TaskList/
    │       ├── AcceptTask.jsx
    │       ├── CompleteTask.jsx
    │       ├── FailedTask.jsx
    │       ├── NewTask.jsx
    │       └── TaskList.jsx
    ├── 📁 context/
    │   └── AuthProvider.jsx
    └── 📁 utils/
        └── localStorage.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/Sahil-2005/emp-management.git
cd emp-management/ems
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Start the development server**
```bash
npm run dev
```

4️⃣ **Open your browser**

Visit 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@example.com` | `123` |
| **Employee** | `employee1@example.com` | `123` |

---

## 📈 Roadmap

- [ ] 🔗 Add backend with Node.js and MongoDB
- [ ] 🔑 JWT-based authentication
- [ ] ⏰ Task deadlines and priority filters
- [ ] 📧 Email notifications for tasks
- [ ] 📊 Admin analytics dashboard
- [ ] 📱 Mobile app version with React Native

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add: amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

---

## 🧑‍💻 Author

<div align="center">

**Sahil Gawade**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://sahil-gawade.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sahil-gawade-920a0a242)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sahil-2005)

</div>

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify it for your own projects.

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

<p>Made with ❤️ by <a href="https://github.com/Sahil-2005">Sahil Gawade</a></p>

</div>
