# Leave Management System - SIMPLE VERSION

## 🎯 What is This?

A simple leave/vacation management app with 2 users:

- **Employee** - Can apply for leaves & see status
- **Admin** - Can approve or reject leave requests

## 🚀 How to Run

```bash
npm install
npm start
```

Go to: `http://localhost:4200`

## 📋 How to Use

### Step 1: Register

- Go to Register page
- Enter Email, Password, Choose Role (Employee or Admin)
- Click Register

### Step 2: Login

- Enter your Email & Password
- Click Login

### Step 3a: If You're Employee

- Click "Apply" → Fill Reason, From Date, To Date → Submit
- Click "My Leaves" → See your leave status

### Step 3b: If You're Admin

- Click "Manage" → See all leave requests
- Click "Approve" or "Reject"

## 📁 File Structure

```
src/
├── Services/
│   ├── auth.ts          (Login, Register)
│   └── leave.ts         (Leave operations)
├── components/
│   ├── login/           (Login form)
│   ├── register/        (Register form)
│   ├── apply-leave/     (Employee apply)
│   ├── my-leaves/       (Employee view)
│   ├── manage-leaves/   (Admin manage)
│   └── dashboard/       (Home)
└── app/                 (Main app)
```

## 🔐 Simple Role System

**Employee Role:**

- Apply for leave
- View own leaves
- See leave status

**Admin Role:**

- View all leaves
- Approve leaves
- Reject leaves

## 💾 Data Storage

Everything stored in browser `localStorage`:

- Users (email, password, role)
- Leaves (reason, dates, status)

## 🎯 Test Accounts

You create them during registration!

Example:

- Employee: `emp@test.com` / `123` / Employee
- Admin: `admin@test.com` / `123` / Admin

## ✨ Features

✅ Simple login/register
✅ Employee can apply leaves  
✅ Employee can view leaves
✅ Admin can manage all leaves
✅ Role-based access
✅ Data persists in browser

## 🐛 If Something Breaks

Clear browser storage:

```javascript
// Open browser console (F12) and run:
localStorage.clear();
```

Then refresh the page and register again.

---

**That's it! Simple and Easy! 🎉**
