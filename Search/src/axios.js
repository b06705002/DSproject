import axios from 'axios'

const uploadSearch = async (values) => {
    
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
    
    try {
        const response = await axios.post('http://35.229.185.178:8000/query_search', {
            Mail: Mail,
            Person: Person,
            StartDate: StartDate,
            EndDate: EndDate,
            Type: Type
        })
        return({msg: 'success', data: response.data})
    } catch (err) {
        return({msg: 'failure'})
    }
}

export { uploadSearch }
