import { Injectable } from '@angular/core';

// Define User interface
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

// Mock users data
const USERS: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    password: "john123",
    role: "user"
  },
  {
    id: 3,
    name: "Sarah Lee",
    email: "sarah@example.com",
    password: "sarah123",
    role: "manager"
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() { }

  // Register a new user
  register(userData: { name: string; email: string; password: string; role: string }) {
    // Check if email already exists
    const existingUser = USERS.find(user => user.email === userData.email);
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }

    // Create new user
    const newUser: User = {
      id: USERS.length + 1,
      ...userData
    };
    USERS.push(newUser);
    
    return { success: true, message: 'Registration successful', user: newUser };
  }

  // Login user
  login(email: string, password: string) {
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, message: 'Invalid email or password' };
  }

  // Logout user
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  // Get currently logged in user
  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Get user role
  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  // Check if user has specific role
  hasRole(role: string): boolean {
    const userRole = this.getUserRole();
    return userRole === role;
  }
}