import axios from 'axios'

const uploadNamed = (values) => {
    
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
    axios.post('http://127.0.0.1:8000/query_result', {
        Reporter: Reporter,
        Mail: Mail,
        Person: Person,
        Date: Date,
        Type: Type,
        Content: Content,
        Evidence: Evidence
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

const uploadAnonymous = (values) => {
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
    axios.post('http://127.0.0.1:8000/query_result', {
        Reporter: Reporter,
        Mail: Mail,
        Person: Person,
        Date: Date,
        Type: Type,
        Content: Content,
        Evidence: Evidence
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

export { uploadNamed, uploadAnonymous }