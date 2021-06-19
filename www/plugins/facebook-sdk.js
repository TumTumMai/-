import Vue from 'vue'

const vueFB = {}

/* eslint-disable */
vueFB.install = function install(Vue, options) {
  ;(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
    // console.log('setting fb sdk')
  })(document, 'script', 'facebook-jssdk')

  window.fbAsyncInit = function onSDKInit() {
    // console.log('on sdk init')
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    this.console.log('Vue.FB', Vue.FB)
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vueFB, {
  appId: process.env.FACEBOOK_CLIENT_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9',
})
