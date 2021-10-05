import axios from "axios"

const parameter = process.argv[2]

const regGroupingTable = /<tr[\s\S]*?<\/tr>/g
const regGroupingRow = /<td[\s\S]*?<\/td>/g
const regTargetNumber = /[/t<\/d>]/g
const target = 'Nav'


const callApi = async()=>{
    const response =  await axios('https://codequiz.azurewebsites.net/',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie' : 'hasCookie=true',
            "Cache": 'no-cache',
          },

    })
    //get data from reponse
    const { data } = response
    //create table array from text
    const groupingTable = data.replace(/\n/g,"").replace(/\t/g,"").match(regGroupingTable)
    //select only Row that match to parameter
    const targetRow = groupingTable.find(el=>el.includes(parameter)) || false

    if(!targetRow){
        console.log('not match')
        return 
    }else {
        //grouping target Row to array
        const groupingTargetRow = targetRow.match(regGroupingRow)
        
        let value='00.0000';
        //get only target string number from Row 
        if(target === 'Nav'){
            value = groupingTargetRow[1].replace(regTargetNumber,"")
        }
        //expression
        console.log(value)
    }
    
}
if (!parameter){
    console.log('No Parameter')
}else {
    await callApi()
}

console.log('----------END OF PROCESS---------')

// console.log(data.replace(regex,""))

  