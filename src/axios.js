import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api' })

const uploadNamed = (values) => {
    console.log(values)
    return('success')
}

const uploadAnonymous = (values) => {
    console.log(values)
    return('success')
}
// const signup = async (values) => {
//     try {
//       const {
//         data: { msg, mail, name }
//       } = await instance.post('/signup', {values})
//       if (msg === 'success') {
//           return({mail, name})
//       } else {
//           return('failure')
//       }
//     } catch (err) {
//       console.log(err.message)
//       return('failure')
//     }
// }

export { uploadNamed, uploadAnonymous }