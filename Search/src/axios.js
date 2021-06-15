import axios from 'axios'

const uploadSearch = (values) => {
    
    var Mail = ""
    var Person = ""
    var Startdate = ""
    var Enddate = ""
    var Type = values.type

    if(!values.reporterMail) {
        Mail = values.reporterMail
    }
    if(!values.reportedPerson) {
      Person = values.reportedPerson
    }
    if(!values.rangeDate[0]._d.toString().substring(4, 24)) {
      Startdate = values.rangeDate[0]._d.toString().substring(4, 24)
    }
    if(!values.rangeDate[1]._d.toString().substring(4, 24)) {
      Enddate = values.rangeDate[1]._d.toString().substring(4, 24)
    }
    
    // TODO (全部都修好了，改完api網址幫我把最下面的return success改掉)
    // axios.post('http://127.0.0.1:8000/query_result', {
    //     Mail: Mail,
    //     Person: Person,
    //     Startdate: Startdate,
    //     Enddate: Enddate,
    //     Type: Type
    // })
    // .then((response) => {
    //     //發送請求成功時
    //     var status = response.data.status;
    //     console.log(status)
    //     return('success')
    // }).catch((error) => {
    //     //發送請求失敗時
    //     return('fail')
    // });

    return("success")
}

export { uploadSearch }