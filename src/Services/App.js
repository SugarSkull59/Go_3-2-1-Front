import axios from 'axios'

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup(newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },

  async login(user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },

  async getUserInfo() {
    const response = await API.get('/me', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },

  async getAllBoxes(country, province) {
    let url = '/boxes?'
    if (country && province) {
      url += `country=${country}&province=${province}`
    } else if (country) {
      url += `country=${country}`
    } else if (province) {
      url += `province=${province}`
    }
    const response = await API.get(url)
    return response.data
  },

  async getBox(boxId) {
    const response = await API.get(`/boxes/${boxId}`);
    return response.data;
  },

  async updateProfile(userUpdates) {
    const response = await API.put('/me', userUpdates, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },

  async deleteProfile(userId) {
    const response = await API.delete('/me', {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },

  async changePassword(newPassword) {
    const response = await API.put('/me/password', newPassword, {
      headers: {
        token: localStorage.token // eslint-disable-line
      }
    })
    return response.data
  },

  async getAllNoticias(date) {
    let url = '/news?'
    if (date) {
      url += `date=${date}`
    }
    const response = await API.get(url)
    return response.data
  },
  async getNoticia(noticiaId) {
    const response = await API.get(`/news/${noticiaId}`);
    return response.data;
  },
}
