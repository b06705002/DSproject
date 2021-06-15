import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api' })

const uploadNamed = (values) => {
    
    var Reporter = values.reporter
    var Mail = values.reporterMail
    var Person = values.reportedPerson
    var Date = values.date._d.toString().substring(4, 24)
    var Type = values.type
    var Content = ""

    if(values.content != null && values.content != ""){
        Content = values.content
    }
    axios.post('http://127.0.0.1:8000/query_result', {
        Reporter: Reporter,
        Mail: Mail,
        Person: Person,
        Date: Date,
        Type: Type,
        Content: Content
    })
    .then((response) => {
        //發送請求成功時
        var status = response.data.status;
        console.log(status)
        return('success')
      })
      .catch((error) => {
        //發送請求失敗時
        return('fail')
      });

    // console.log(values)
    // console.log(Content)
    // console.log(Reporter, Mail, Person, Date, Type)

    // console.log(values.date._d.toString().substring(4, 24))
    // values.reporter, values.reporterMail, values.reportedPerson, values.date, values.type
    
}

const uploadAnonymous = (values) => {
    console.log(values)
    var Reporter = ""
    var Mail = ""
    var Person = values.reportedPerson
    var Date = values.date._d.toString().substring(4, 24)
    var Type = values.type
    var Content = ""

    if(values.content != null && values.content != ""){
        Content = values.content
    }
    axios.post('http://127.0.0.1:8000/query_result', {
        Reporter: Reporter,
        Mail: Mail,
        Person: Person,
        Date: Date,
        Type: Type,
        Content: Content
    })
    .then((response) => {
        //發送請求成功時
        var status = response.data.status;
        console.log(status)
        return('success')
      })
      .catch((error) => {
        //發送請求失敗時
        return('fail')
      });
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