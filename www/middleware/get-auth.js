export default ({ app, store }) => { 
    const token = app.$cookies.get('livesteam-token')

    if (!token) {
      store.commit("auth/logout")
    }
    else {
        store.commit("auth/login", token)
        store.commit("auth/isAuth", true)
    }
}