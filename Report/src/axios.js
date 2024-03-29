import axios from 'axios'

const uploadNamed = async (values) => {
    
    let Reporter = values.reporter
    let Mail = values.reporterMail
    let Person = values.reportedPerson
    let Date = values.date._d.toString().substring(4, 24)
    let Type = values.type
    let Content = ""
    let Evidence = values.evidence

    if(values.content !== null && values.content !== ""){
        Content = values.content
    }
    // axios.post('http://127.0.0.1:8000/query_result', {
    //     Reporter: Reporter,
    //     Mail: Mail,
    //     Person: Person,
    //     Date: Date,
    //     Type: Type,
    //     Content: Content,
    //     Evidence: Evidence
    // })
    // .then((response) => {
    //     //發送請求成功時
    //     const status = response.data.status;
    //     console.log(status)
    //     return('success')
    //   })
    //   .catch((error) => {
    //     //發送請求失敗時
    //     return('fail')
    //   });
    try {
        const response = await axios.post('http://35.229.185.178:8000/query_result', {
            Reporter: Reporter,
            Mail: Mail,
            Person: Person,
            Date: Date,
            Type: Type,
            Content: Content,
            Evidence: Evidence
        })
        if (response.data.status === 'Success'){
          return('success')
        }
        return('failure')
    } catch (err) {
        return('failure')
    }
}

const uploadAnonymous = async (values) => {
    let Reporter = ""
    let Mail = ""
    let Person = values.reportedPerson
    let Date = values.date._d.toString().substring(4, 24)
    let Type = values.type
    let Evidence = values.evidence
    let Content = ""

    if(values.content !== null && values.content !== ""){
        Content = values.content
    }
    // axios.post('http://127.0.0.1:8000/query_result', {
    //     Reporter: Reporter,
    //     Mail: Mail,
    //     Person: Person,
    //     Date: Date,
    //     Type: Type,
    //     Content: Content,
    //     Evidence: Evidence
    // })
    // .then((response) => {
    //     //發送請求成功時
    //     const status = response.data.status;
    //     console.log(status)
    //     return('success')
    //   })
    //   .catch((error) => {
    //     //發送請求失敗時
    //     return('fail')
    //   });
    try {
      const response = await axios.post('http://35.229.185.178:8000/query_result', {
          Reporter: Reporter,
          Mail: Mail,
          Person: Person,
          Date: Date,
          Type: Type,
          Content: Content,
          Evidence: Evidence
      })
      if (response.data.status === 'Success'){
        return('success')
      }
      return('failure')
  } catch (err) {
      return('failure')
  }
}

export { uploadNamed, uploadAnonymous }