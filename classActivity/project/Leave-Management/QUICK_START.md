# ⚡ Quick Start Guide - Leave Management System

## 🎯 Super Easy Setup!

### What's New?

✅ **Role-Based Access Control** - Employees vs Admins  
✅ **Route Guards** - Automatic permission checking  
✅ **Dynamic Navigation** - Shows different menus per role  
✅ **Admin Dashboard** - Manage all leave requests  
✅ **Employee Dashboard** - Track your leaves

---

## 🚀 How to Test (Easy Steps)

### **Step 1: Start the app**

```bash
npm install
npm start
```

### **Step 2: Register as Employee**

```
1. Click "Register" or go to /register
2. Email: emp@gmail.com
3. Password: 123456
4. Role: Employee (select from dropdown)
5. Click "Register"
6. Login with same credentials
```

**You'll see:**

- 📝 Apply Leave button
- 📋 My Leaves button
- Employee Dashboard

### **Step 3: Apply a Leave**

```
1. Click "📝 Apply Leave"
2. Reason: "Medical Checkup"
3. From: 2025-02-01
4. To: 2025-02-03
5. Submit
```

### **Step 4: Check Status**

```
1. Click "📋 My Leaves"
2. You'll see: Status = "Pending" (waiting for admin approval)
```

### **Step 5: Logout and Register as Admin**

```
1. Click "Logout"
2. Click "Register"
3. Email: admin@gmail.com
4. Password: 123456
5. Role: Admin/Manager
6. Click "Register"
7. Login
```

**You'll see:**

- ✓ Manage Requests button (Employee menu disappears)
- Admin Dashboard

### **Step 6: Approve/Reject Leaves**

```
1. Click "✓ Manage Requests"
2. See all employee leave requests
3. Click "Approve" or "Reject"
4. Status changes immediately!
```

### **Step 7: Verify as Employee**

```
1. Logout
2. Login as emp@gmail.com
3. Click "📋 My Leaves"
4. Status now shows: "Approved" or "Rejected"
```

---

## 🔐 Role Comparison

| Action          | Employee | Admin |
| --------------- | -------- | ----- |
| See Dashboard   | ✅       | ✅    |
| Apply Leave     | ✅       | ❌    |
| View Own Leaves | ✅       | ❌    |
| Access /manage  | ❌       | ✅    |
| Approve Leaves  | ❌       | ✅    |
| Reject Leaves   | ❌       | ✅    |

---

## 📁 Key Files

| File                                  | Purpose                        |
| ------------------------------------- | ------------------------------ |
| `src/Services/auth.ts`                | Role checking & authentication |
| `src/Guards/role.guard.ts`            | Route protection               |
| `src/app/app.routes.ts`               | Routes with role guards        |
| `src/app/app.html`                    | Dynamic navigation             |
| `src/components/register/register.ts` | Role selection                 |
| `src/components/manage-leaves/`       | Admin panel                    |

---

## 🎓 How Role-Based Access Works

### **1. During Registration**

```
User selects: "Employee" or "Admin"
↓
Role stored in localStorage
↓
Role attached to user object
```

### **2. During Login**

```
User logs in
↓
Current user stored with role
↓
Auth service can check role anytime
```

### **3. Route Protection**

```
Try to access /manage (admin only)
↓
Role guard checks: isAdmin()?
↓
If YES → Allow access
If NO → Show alert & redirect to home
```

### **4. Navigation Update**

```
App checks user role
↓
If Employee → Show Apply/My Leaves buttons
If Admin → Show Manage Requests button
```

---

## 💡 Code Examples

### **Check if User is Admin**

```typescript
if (this.auth.isAdmin()) {
  // Do admin stuff
}
```

### **Check if User is Employee**

```typescript
if (this.auth.isEmployee()) {
  // Do employee stuff
}
```

### **Protect a Route**

```typescript
{
  path: 'manage',
  component: ManageLeaves,
  canActivate: [RoleGuard],
  data: { role: 'admin' }  // Only admins!
}
```

### **Show Different Content Based on Role**

```html
<div *ngIf="auth.isEmployee()">
  <!-- Show employee options -->
</div>

<div *ngIf="auth.isAdmin()">
  <!-- Show admin options -->
</div>
```

---

## 🔍 Testing Access Control

### **Employee trying to access /manage**

```
1. Login as employee
2. Type in URL: localhost:4200/manage
3. Result: ❌ Access Denied message
4. Redirects to home
```

### **Admin accessing /manage**

```
1. Login as admin
2. Type in URL: localhost:4200/manage
3. Result: ✅ Manage page loads
```

---

## 📊 Leave Status Flow

```
Employee applies leave
         ↓
Status = "Pending"
         ↓
Admin sees in /manage
         ↓
Admin clicks Approve/Reject
         ↓
Status = "Approved" or "Rejected"
         ↓
Employee sees updated status in /my
```

---

## 🐛 Troubleshooting

| Problem                            | Solution                       |
| ---------------------------------- | ------------------------------ |
| Can't access /manage               | Login as admin                 |
| Can't see Apply button             | Login as employee              |
| Lost access (localStorage cleared) | Register & login again         |
| Wrong role selected                | Delete user data & re-register |

---

## 📝 Data Structure

### **User Object**

```javascript
{
  id: 1234567890,
  email: "emp@gmail.com",
  password: "123456",
  role: "employee"  // or "admin"
}
```

### **Leave Object**

```javascript
{
  id: 9876543210,
  userId: 1234567890,
  reason: "Sick Leave",
  from: "2025-02-01",
  to: "2025-02-03",
  status: "Pending"  // or "Approved" or "Rejected"
}
```

---

## ✨ Features

- ✅ Two-role system (Employee & Admin)
- ✅ Route protection with guards
- ✅ Automatic role checking
- ✅ Dynamic navigation menus
- ✅ Beautiful dashboard for both roles
- ✅ Easy leave application
- ✅ Admin management panel
- ✅ Real-time status updates
- ✅ Employee tracking

---

## 🎉 You're All Set!

The role-based access control is now fully functional. Employees can apply and track leaves, while Admins can manage all requests.

**Enjoy! 🚀**
