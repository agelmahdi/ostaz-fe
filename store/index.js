export const state = () => ({
  locales: ['en', 'ar'],
  locale: 'en',
  selectedSpeciality: '',
  categories: [],
  lang: 'en',
  reirectedLogin: false,
  appointment: 0,
  dir: 'ltr',
  home: null,
  menu: null,
  client: {},
  token: ''
})

export const getters = {
  redirectable (state) {
    return state.reirectedLogin
  },
  specialitySelected (state) {
    return state.selectedSpeciality
  },
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}

export const mutations = {
  setSpecialitySelected (state, payload) {
    state.selectedSpeciality = payload
  },
  setLangEn (state, payload) {
    state.lang = payload
  },
  setDirEn (state, payload) {
    state.dir = payload
  },
  setLangAr (state, payload) {
    state.lang = payload
  },
  setDirAr (state, payload) {
    state.dir = payload
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  fillClient (state, payload) {
    state.client = payload
  },
  SetToken (state, payload) {
    state.token = payload
  },
  reirected_login (state, payload) {
    state.reirectedLogin = payload
  },
  SetAppointment (state, payload) {
    state.appointment = payload
  },
  setStateLogin (state, payload) {
    state.auth.loggedIn = payload
    this.$router.push('/')
  }
}

export const actions = {
  setLangEn ({ commit }, payload) {
    commit('setLangEn', payload)
  },
  setSpeciality ({ commit }, payload) {
    commit('setSpecialitySelected', payload)
  },
  setDirEn ({ commit }, payload) {
    commit('setDirEn', payload)
  },
  setLangAr ({ commit }, payload) {
    commit('setLangAr', payload)
  },
  setDirAr ({ commit }, payload) {
    commit('setDirAr', payload)
  },
  fillClient ({ commit }, payload) {
    commit('fillClient', payload)
  },
  setToken ({ commit }, payload) {
    commit('SetToken', payload)
  },
  reirectedLogin ({ commit }, payload) {
    commit('reirected_login', payload)
  },
  setAppointment ({ commit }, payload) {
    commit('SetAppointment', payload)
  },
  setStateLogin ({ commit }, payload) {
    commit('setStateLogin', payload)
  }
}
