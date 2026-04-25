# 🏢 Leave Management System - Role-Based Access Control

## System Overview

This Leave Management System has **two main roles** with easy-to-understand access control:

```
┌─────────────────────────────────────────────────────────┐
│         Leave Management System                         │
├──────────────────────┬──────────────────────────────────┤
│     EMPLOYEE         │          ADMIN/MANAGER           │
├──────────────────────┼──────────────────────────────────┤
│ • Apply for Leave    │ • View all leave requests        │
│ • View Own Status    │ • Approve leaves                 │
│ • Track Application  │ • Reject leaves                  │
│   (Pending/Approved/ │ • See employee information       │
│    Rejected)         │                                  │
└──────────────────────┴──────────────────────────────────┘
```

---

## 🔐 How Role-Based Access Control Works

### 1. **Authentication Service** (`src/Services/auth.ts`)

The `AuthService` manages all user authentication and role checking:

```typescript
// Role-based methods
isAdmin(); // Returns true if user is admin
isEmployee(); // Returns true if user is employee
hasRole(role); // Check specific role
isLoggedIn(); // Check if user is logged in
```

### 2. **Role Guard** (`src/Guards/role.guard.ts`)

Protects routes and checks user roles before allowing access:

```typescript
// Only users with 'admin' role can access /manage
{
  path: 'manage',
  component: ManageLeaves,
  canActivate: [RoleGuard],
  data: { role: 'admin' }
}
```

---

## 📋 User Roles

### **EMPLOYEE Role**

- **Default role** when registering
- **Permissions:**
  - ✅ Apply for leaves (`/apply`)
  - ✅ View own leave status (`/my`)
  - ✅ See dashboard (`/`)
- **Cannot:** Access admin manage page

### **ADMIN Role**

- **Assigned during registration**
- **Permissions:**
  - ✅ View all leave requests
  - ✅ Approve leave applications
  - ✅ Reject leave applications
  - ✅ See employee information
- **Cannot:** Apply for leaves as employee

---

## 🚀 How to Use

### 1. **Register as Employee**

```
1. Go to /register
2. Enter Email: employee@mail.com
3. Enter Password: 123456
4. Select Role: "Employee"
5. Click Register
6. Login with credentials
```

**What you see:**

- 📝 Apply Leave button
- 📋 My Leaves button
- Dashboard

### 2. **Register as Admin**

```
1. Go to /register
2. Enter Email: admin@mail.com
3. Enter Password: 123456
4. Select Role: "Admin/Manager"
5. Click Register
6. Login with credentials
```

**What you see:**

- ✓ Manage Requests button (shows all employee leaves)
- Dashboard

---

## 📁 Project Structure

```
src/
├── Services/
│   ├── auth.ts           (Handles authentication & roles)
│   └── leave.ts          (Handles leave operations)
│
├── Guards/
│   └── role.guard.ts     (Protects routes based on role)
│
├── components/
│   ├── login/
│   ├── register/         (Now includes role selection)
│   ├── apply-leave/      (Employee only)
│   ├── my-leaves/        (Employee only)
│   ├── manage-leaves/    (Admin only)
│   └── dashboard/
│
└── app/
    ├── app.ts            (Main component with role checks)
    ├── app.html          (Dynamic navigation by role)
    └── app.routes.ts     (Routes with role guards)
```

---

## 🔑 Key Files Explained

### **auth.ts** - Role Checking Methods

```typescript
// Check if user has specific role
hasRole(role: string): boolean

// Check if admin
isAdmin(): boolean

// Check if employee
isEmployee(): boolean

// Get all users (used by admin to see employees)
getAllUsers()
```

### **role.guard.ts** - Route Protection

```typescript
canActivate(route: any): boolean {
  // Checks if user is logged in
  // Checks if user has required role from route.data
  // Redirects if access denied
}
```

### **app.routes.ts** - Protected Routes

```typescript
// Protected routes with role guards
{
  path: 'apply',
  component: ApplyLeave,
  canActivate: [RoleGuard],
  data: { role: 'employee' }  // Only employees
}

{
  path: 'manage',
  component: ManageLeaves,
  canActivate: [RoleGuard],
  data: { role: 'admin' }     // Only admins
}
```

---

## 🎯 Example Workflow

### **Employee Workflow:**

```
1. Register as Employee
2. Login
3. Click "📝 Apply Leave"
4. Fill reason, from date, to date
5. Submit
6. Go to "📋 My Leaves" to check status
7. Status shows: Pending → Approved/Rejected (when admin acts)
```

### **Admin Workflow:**

```
1. Register as Admin
2. Login
3. Click "✓ Manage Requests"
4. See all employee leave requests
5. Click "Approve" or "Reject"
6. Status updates immediately
```

---

## 💾 Data Storage

All data is stored in **localStorage**:

```javascript
// Users stored in localStorage
users: [
  {
    id: 1234567890,
    email: "employee@mail.com",
    password: "123456",
    role: "employee",
  },
  {
    id: 1234567891,
    email: "admin@mail.com",
    password: "123456",
    role: "admin",
  },
];

// Leaves stored in localStorage
leaves: [
  {
    id: 9876543210,
    userId: 1234567890,
    reason: "Medical",
    from: "2025-01-15",
    to: "2025-01-17",
    status: "Pending", // or "Approved" or "Rejected"
  },
];
```

---

## 🛡️ Security Features

✅ **Routes are protected** - Cannot access admin pages without admin role
✅ **Role checking** - Every sensitive operation checks user role
✅ **Conditional navigation** - Shows different menus based on role
✅ **Access denial alerts** - Shows message when trying unauthorized access
✅ **Auto-redirect** - Redirects to login if not authenticated

---

## 📝 Summary

| Feature           | Employee | Admin |
| ----------------- | -------- | ----- |
| Apply Leave       | ✅       | ❌    |
| View Own Leaves   | ✅       | ❌    |
| Manage All Leaves | ❌       | ✅    |
| Approve/Reject    | ❌       | ✅    |
| See All Employees | ❌       | ✅    |

---

## 🚨 Troubleshooting

**Q: Why can't I access the manage page?**

- A: Only admins can access. Register as "Admin" role.

**Q: Why am I redirected to login?**

- A: Your session expired or you're not logged in.

**Q: How do I change my role?**

- A: Clear localStorage, register again with different role.

---

**Happy Leave Management! 🎉**
