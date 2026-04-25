# 🏗️ System Architecture & Data Flow

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    LEAVE MANAGEMENT SYSTEM                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                   APP COMPONENT                          │  │
│  │  (main.ts, app.ts, app.html, app.routes.ts)            │  │
│  │  - Route definitions                                     │  │
│  │  - Dynamic navigation based on role                      │  │
│  │  - User display in navbar                                │  │
│  └────────────┬───────────────────────┬─────────────────────┘  │
│               │                       │                         │
│         ┌─────▼──────┐          ┌─────▼──────┐                │
│         │ RoleGuard  │          │  Services  │                │
│         └─────┬──────┘          └─────┬──────┘                │
│               │                       │                         │
│     ┌─────────┴────────┐      ┌───────┴────────┐              │
│     │                  │      │                │              │
│  ┌──▼──────┐     ┌─────▼──┐ ┌▼──────────┐ ┌──▼──────┐      │
│  │Protected│     │Protected│ │AuthService│ │LeaveServ│      │
│  │Routes   │     │Routes   │ └──────┬────┘ │ ice     │      │
│  └─────────┘     └─────────┘        │      └──────┬──┘      │
│                                      │             │          │
│  ┌────────────────────────────────────▼─────────────▼──────┐  │
│  │              localStorage (Data Storage)               │  │
│  │  ┌────────────────────┐     ┌──────────────────────┐  │  │
│  │  │ users (with roles) │     │ leaves (with status) │  │  │
│  │  │ currentUser        │     │                      │  │  │
│  │  └────────────────────┘     └──────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## User Flow Diagram

```
START
  │
  ▼
┌─────────────┐
│   LOGIN     │
│  PAGE (/... │
└──────┬──────┘
       │
   ┌───▼────────────────────┐
   │ User credentials valid? │
   └───┬────────────────────┘
       │ YES
       ▼
   ┌──────────────────┐
   │ Check User Role  │
   └────┬──────────┬──┘
        │          │
    EMPLOYEE    ADMIN
        │          │
     ┌──▼──┐   ┌───▼──┐
     │  /  │   │  /   │
     │(emp)│   │(admin)│
     └──┬──┘   └───┬──┘
        │          │
   ┌────▼────┐ ┌───▼────────┐
   │EMPLOYEE │ │ ADMIN PAGE │
   │DASHBOARD│ │(all leaves)│
   └─────┬───┘ └────┬───────┘
         │          │
      ┌──▼──┬───┐ ┌──▼────────────────────┐
      │View │App│ │Approve │ Reject │ View │
      │Own  │ly │ │Leaves  │ Leaves │ All  │
      │Sts  │Lv │ └────────────────────────┘
      └─────┴───┘
```

---

## Role-Based Access Matrix

```
┌────────────────────────────────────────────────────────────────┐
│                   ROUTE PROTECTION                            │
├──────────────┬───────────────┬──────────────┬────────────────┤
│   Route      │   Component   │   Requires   │   Guard        │
├──────────────┼───────────────┼──────────────┼────────────────┤
│ /            │ Dashboard     │ Login        │ RoleGuard      │
│ /login       │ Login         │ None         │ None           │
│ /register    │ Register      │ None         │ None           │
│ /apply       │ ApplyLeave    │ Employee     │ RoleGuard      │
│ /my          │ MyLeaves      │ Employee     │ RoleGuard      │
│ /manage      │ ManageLeaves  │ Admin        │ RoleGuard      │
└──────────────┴───────────────┴──────────────┴────────────────┘

Legend:
  Guard = RoleGuard component checks permission
  Login = Must be logged in
  Employee = Must have employee role
  Admin = Must have admin role
```

---

## Registration & Login Flow

```
┌──────────────────────────────────────────────────────┐
│             REGISTRATION PROCESS                    │
├──────────────────────────────────────────────────────┤
│                                                      │
│  User fills form:                                   │
│  ┌──────────────────────────────────────┐          │
│  │ Email: user@email.com                │          │
│  │ Password: ****                       │          │
│  │ Role: [Employee ▼] or [Admin ▼]     │          │
│  └──────────────────────────────────────┘          │
│           │                                         │
│           ▼                                         │
│  AuthService.register(user)                        │
│           │                                         │
│           ▼                                         │
│  Save to localStorage with role attached           │
│           │                                         │
│           ▼                                         │
│  Redirect to /login                                │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│               LOGIN PROCESS                         │
├──────────────────────────────────────────────────────┤
│                                                      │
│  User enters:                                       │
│  ┌──────────────────────────────────────┐          │
│  │ Email: user@email.com                │          │
│  │ Password: ****                       │          │
│  └──────────────────────────────────────┘          │
│           │                                         │
│           ▼                                         │
│  AuthService.login(email, password)                │
│           │                                         │
│           ▼                                         │
│  Find user with matching credentials               │
│           │                                         │
│       ┌───┴────┐                                   │
│       │         │                                   │
│   FOUND    NOT FOUND                               │
│    │           │                                    │
│    ▼           ▼                                    │
│  Store in   Show "Invalid                          │
│  currentUser Credentials"                          │
│    │         error                                 │
│    │                                               │
│    ▼                                               │
│  Redirect to /                                     │
│  (Dashboard)                                       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Leave Application Flow

```
┌─────────────────────────────────────────────────────────┐
│         EMPLOYEE: APPLY LEAVE FLOW                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Employee clicks "Apply Leave"                         │
│           │                                             │
│           ▼                                             │
│  RoleGuard checks: Is employee? ──YES──▶  Show form   │
│           │                                │           │
│           │                              ┌─▼────────┐  │
│          NO                             │Fill form: │  │
│           │                            │ Reason    │  │
│           ▼                            │ From date │  │
│  Denied! "Access Denied"              │ To date   │  │
│           │                            └─┬────────┘  │
│           ▼                              │           │
│  Redirect to home                       ▼           │
│                                    Click "Submit"    │
│                                         │           │
│                                         ▼           │
│                              LeaveService.applyLeave()
│                                         │           │
│                                         ▼           │
│                              Create leave object:   │
│                              {                      │
│                                id: now(),           │
│                                userId: emp.id,      │
│                                reason: "...",       │
│                                from: "...",         │
│                                to: "...",           │
│                                status: "Pending"    │
│                              }                      │
│                                         │           │
│                                         ▼           │
│                              Save to localStorage   │
│                                         │           │
│                                         ▼           │
│                              Show: "Leave Applied"  │
│                              Redirect to dashboard  │
│                                                     │
└─────────────────────────────────────────────────────────┘
```

---

## Admin Leave Management Flow

```
┌──────────────────────────────────────────────────────────┐
│      ADMIN: MANAGE LEAVES FLOW                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Admin clicks "Manage Requests"                         │
│           │                                              │
│           ▼                                              │
│  RoleGuard checks: Is admin? ──YES──▶  Load all leaves │
│           │                              │              │
│           │                          ┌───▼──────────┐   │
│          NO                         │Display table: │   │
│           │                        │ Employee      │   │
│           ▼                        │ Reason        │   │
│  Denied! "Access Denied"          │ Dates         │   │
│                                    │ Status        │   │
│                                    │ Buttons:      │   │
│                                    │ Approve       │   │
│                                    │ Reject        │   │
│                                    └────┬────────┬─┘   │
│                                         │        │      │
│                      ┌──────────────────┘        │      │
│                      │                   ┌──────┴──┐   │
│                      ▼                   ▼         │   │
│                  Click          Click       Status  │   │
│                 "Approve"       "Reject"   already  │   │
│                      │              │      updated │   │
│                      ▼              ▼      (Button  │   │
│         updateStatus(id,   updateStatus(id, disabled)  │
│         "Approved")         "Rejected")               │
│                      │              │                 │
│                      └──────┬───────┘                 │
│                             │                         │
│                             ▼                         │
│                    Update localStorage                │
│                             │                         │
│                             ▼                         │
│                    Show: "[Status] completed"        │
│                    Reload table                       │
│                                                       │
└──────────────────────────────────────────────────────────┘
```

---

## AuthService Role Checking Methods

```
AuthService
│
├─ getUser()
│  └─ Returns: { id, email, password, role }
│
├─ hasRole(role)
│  └─ Checks: user.role === role
│
├─ isAdmin()
│  └─ Checks: hasRole('admin')
│
├─ isEmployee()
│  └─ Checks: hasRole('employee')
│
├─ isLoggedIn()
│  └─ Checks: getUser() !== null
│
├─ getAllUsers()
│  └─ Returns: [all users from localStorage]
│
└─ register(user)
   └─ Saves: user with role to localStorage
```

---

## Data Persistence

```
┌────────────────────────────────────────────┐
│         localStorage Structure            │
├────────────────────────────────────────────┤
│                                            │
│  KEY: "users"                             │
│  VALUE: [                                 │
│    {                                      │
│      id: 1234567890,                      │
│      email: "emp@mail.com",               │
│      password: "123456",                  │
│      role: "employee"                     │
│    },                                     │
│    {                                      │
│      id: 9876543210,                      │
│      email: "admin@mail.com",             │
│      password: "123456",                  │
│      role: "admin"                        │
│    }                                      │
│  ]                                        │
│                                            │
│  KEY: "leaves"                            │
│  VALUE: [                                 │
│    {                                      │
│      id: 5555555555,                      │
│      userId: 1234567890,                  │
│      reason: "Medical Leave",             │
│      from: "2025-02-01",                  │
│      to: "2025-02-03",                    │
│      status: "Pending"                    │
│    }                                      │
│  ]                                        │
│                                            │
│  KEY: "currentUser"                       │
│  VALUE: { (logged in user object) }       │
│                                            │
└────────────────────────────────────────────┘
```

---

## Component Communication

```
┌─────────────────────────────────────────────────────┐
│         COMPONENT DEPENDENCY GRAPH                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  App (main)                                         │
│   │                                                 │
│   ├─ AuthService                                   │
│   │  └─ Used by: All components                    │
│   │                                                 │
│   ├─ LeaveService                                  │
│   │  └─ Used by: Apply, My Leaves, Manage, Dashboard
│   │                                                 │
│   ├─ RoleGuard                                     │
│   │  └─ Used by: All protected routes              │
│   │                                                 │
│   └─ Components                                     │
│      ├─ Login                                       │
│      │  ├─ Uses: AuthService (login method)        │
│      │  └─ Router (navigate)                       │
│      │                                              │
│      ├─ Register                                    │
│      │  ├─ Uses: AuthService (register method)     │
│      │  └─ Router (navigate)                       │
│      │                                              │
│      ├─ Dashboard                                   │
│      │  ├─ Uses: AuthService (getUser, role check) │
│      │  └─ LeaveService (getAll, getUserLeaves)    │
│      │                                              │
│      ├─ ApplyLeave                                  │
│      │  ├─ Uses: AuthService (getUser)             │
│      │  └─ LeaveService (applyLeave)               │
│      │                                              │
│      ├─ MyLeaves                                    │
│      │  ├─ Uses: AuthService (getUser)             │
│      │  └─ LeaveService (getUserLeaves)            │
│      │                                              │
│      └─ ManageLeaves                                │
│         ├─ Uses: AuthService (getUser, isAdmin, getAllUsers)
│         ├─ LeaveService (getAll, updateStatus)     │
│         └─ Router (navigate)                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Summary

This architecture provides:

✅ **Separation of Concerns** - Services, guards, components
✅ **Single Source of Truth** - localStorage + AuthService
✅ **Clear Data Flow** - Easy to trace user actions
✅ **Scalable Design** - Easy to add new roles/routes
✅ **Role-Based Access** - Automatic permission checking
✅ **Secure by Default** - Guards on all sensitive routes

**Simple, Clean, and Secure! 🎉**
