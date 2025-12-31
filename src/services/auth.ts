import api from './api'

export interface LoginCredentials {
  email: string
  password: string
}

export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  role: string
  organization_id: number
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const response = await api.post('/auth/login', credentials)
    return response.data
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/auth/me')
    return response.data
  },

  logout() {
    localStorage.removeItem('token')
  },
}
