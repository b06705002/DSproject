import axios from 'axios'

const uploadSearch = (values) => {
    
    let Mail = ""
    let Person = ""
    let StartDate = ""
    let EndDate = ""
    let Type = values.type

    if(values.reporterMail) {
        Mail = values.reporterMail
    }
    if(values.reportedPerson) {
      Person = values.reportedPerson
    }
    if(values.rangeDate) {
      StartDate = values.rangeDate[0]._d.toString().substring(4, 24)
      EndDate = values.rangeDate[1]._d.toString().substring(4, 24)
    }
    
    // TODO (全部都修好了，改完api網址幫我把最下面的return success改掉)
    axios.post('http://127.0.0.1:8000/query_search', {
        Mail: Mail,
        Person: Person,
        StartDate: StartDate,
        EndDate: EndDate,
        Type: Type
    })
    .then((response) => {
        //發送請求成功時
        let data = response.data;

        //return data is an array of dic, data[0] means the first dictionary element, data[0].Reporter means the Reporter in first dictionary element

        console.log(data)
        // console.log(data[2].Reporter)
        return('success')
    }).catch((error) => {
        //發送請求失敗時
        return('fail')
    });

    return("success")
}

export { uploadSearch }