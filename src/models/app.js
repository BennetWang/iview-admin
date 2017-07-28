import axios from 'axios'
export default {
  namespace: 'app',
  subscriptions: {
    setup ({ dispatch }) {
      axios.get('/user.json?ID=1234').then(res => {
        console.log(res)
      })
    }
  }
}
