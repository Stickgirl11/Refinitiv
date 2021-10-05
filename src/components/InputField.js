import { Input } from 'reactstrap'

const InputField =({ onChange, value})=>{
    return(
        <> 
            <Input 
                placeholder="text here"
                type='text'
                value={value}
                onChange={(e)=> onChange(e)}
            />     
                   
        </>
    )

}


export default InputField 