const dropdownOption = ['isPrime','isFibonacci']

window.onload=()=>{
    generateDropdown()
}

//---------------------- generation part --------------------//
const generateDropdown=()=>{
    const selector = document.getElementById('dropdown-selector')
    dropdownOption.forEach((el,i) => {
        if(i === 0){
            select = el
        }
        const option = document.createElement('option')
        option.setAttribute('value', el)
        option.innerHTML = el
        selector.appendChild(option)
    });
    
}

//-------------------- calculation part --------------------//

const onChangeDropdown=()=>{
    calculation()
} 

const onChangeInput=()=>{
    const inputNumber = document.getElementById('inputNumber')
    const { value } = inputNumber
    //if its "-" at first index --> do nothing
    if(value.length === 1 && value === "-"){ 
        return 
    }
    //["-12"] = do nothing
    //["-12/"] -> pass to function
    const isNumber =  Number(value)
    if(!isNumber){
       const list = value.split("") // ["1","2","/"]
       inputNumber.value = list.slice(0,list.length-1).join("");//["1","2"]
    }
}

const onBlurInput=()=>{
    const inputNumber = document.getElementById('inputNumber')
    if(+inputNumber.value < 0){
        inputNumber.value = 1
    }else{ //case decimal
        inputNumber.value = Math.round(+inputNumber.value)
    }
    calculation()
}

const calculation=()=>{
        const inputNumber = document.getElementById('inputNumber')
        const expression = document.getElementById('expression')
        const select = document.getElementById('dropdown-selector')
        // -1231- (onchange)
        // -123 no (onblur)
        // ""   yes 
        // 123 yes 
        // 12.3 no (onblur)
        if(inputNumber.value === ""){
            expression.innerHTML = ""
            return
        }
        
        if(select.value === 'isPrime' ){
            expression.innerHTML = calPrime(inputNumber.value)
        }else if(select.value === 'isFibonacci'){
            expression.innerHTML = calFibonacci(inputNumber.value)
        }
}

//--------------------- Utility --------------------------//

const calPrime=(inputNumber)=>{
    const num = +inputNumber
    for(let i = 2; i < num; i++)
      if(num % i === 0) {
          return false
      }
    return num > 1;
  }

const calFibonacci=(inputNumber)=>{
    const num = +inputNumber
    let first = 1
    let second = 1
    let temp
    if(num === 0 || num === 1){
        return true
    }else {
        while(num >= first){
            temp = first + second
            second = first
            first = temp
       }
       return num === second 
    }
    
}

