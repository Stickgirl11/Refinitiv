import axios from 'axios'

export const getCategoryList=async()=>{
    const response = await axios.get('https://api.publicapis.org/categories')
    return response
}


