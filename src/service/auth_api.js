import axios from 'axios';

const auth_host='http://localhost:3001';
axios.defaults.headers.common['session-token'] = localStorage.getItem("session-token");
var Auth = {
  session_token: localStorage.getItem("session-token"),
  isLoggedIn: function() {
    console.log(this.session_token)
    if (this.session_token) {
      return true;
    }
    return false;
  },

  login(user, password, success) {
    axios.post(`${auth_host}/oauth/token`, {
      grant_type: "password",
      username: user,
      password: password
    }).then((response) => {
      const access_token = response.data.access_token
      axios({method: 'POST',
             url: `${auth_host}/mshanken_auth`,
             data: { 'app_id': 'FPktnRUXanbkFpxSHpzi8sX9' },
             headers: {
               'Authorization': `Bearer ${access_token}`,
             }}).then((response) => {
               this.session_token = response.data.session_token;
               localStorage.setItem("session-token", this.session_token)
               axios.defaults.headers.common['session-token'] = this.session_token;
               success()
             })
    });
  },

  logout(success) {
    localStorage.removeItem("session-token")
    axios.defaults.headers.common['session-token'] = this.session_token;
    success()
  }
}

export default Auth
