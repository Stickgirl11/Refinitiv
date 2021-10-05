import React, {useState,useEffect} from 'react'
import { getCategoryList } from '../service/category'
import { ListTable, InputField } from '../components'

const Category=()=>{
    const [input,setInput] = useState("")
    const [filterList,setFilterList] = useState([])
    const [mainList,setMainList] = useState([])
    
    const doFilter =(value)=>{
        const filteredList = mainList.reduce((t,cv)=>{
                const textInput = value.split(' ').join('').toLowerCase()
                const currentList = cv.toLowerCase()

                if(currentList.includes(textInput)){
                    t.push(cv)
                }
                return t    
            },[])
            setFilterList(filteredList)
    }

    useEffect(() => {
        const fetchCategory=async()=>{
            const {data=[]} = await getCategoryList()
            setMainList(data)
            setFilterList(data)
        }    

        fetchCategory()
        
    }, [])
    
    return(
        <div className="d-flex flex-column align-items-center" style={{margin:'auto 40%'}}>
            <div className='w-100 d-flex flex-row justify-content-end'>
                <div className='align-self-center' style={{marginRight:'5px'}}>
                    <div className='h-100'>Filter :</div>
                </div>
                <div>
                    <InputField 
                        value={input} 
                        onChange={(e)=>{
                            setInput(e.target.value)
                            doFilter(e.target.value)
                        }} 
                    />
                </div>
            </div>
            <div className='w-100'>
                <ListTable 
                    list={filterList}
                />
                {filterList.length===0 && 
                    <div className='text-center'>No Catagory</div>
                }
            </div>
        </div>
    )
}

export default Category