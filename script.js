const input = document.querySelector('#input') ; 
const result = document.querySelector('#result') ; 
const inputType = document.querySelector('#inputType') ; 
const resultType = document.querySelector('#resultType') ;

let inputTypeValue , resultTypeValue ; 

input.addEventListener('keyup',myResult) ; 
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value ; 
resultTypeValue = resultType.value ; 
function myResult(){

    inputTypeValue = inputType.value ; 
resultTypeValue = resultType.value ; 

    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer')
    {
        result.value = Number(input.value) * 0.001 ; 
    }
    else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter')
    {
        result.value = Number(input.value) * 100 ; 
    }
    else if(inputTypeValue === 'meter' && resultTypeValue === 'mile')
    {
        result.value = Number(input.value) * 0.000623171 ; 
    }
    else if(inputTypeValue === 'meter' && resultTypeValue === 'feet')
    {
        result.value = Number(input.value) * 3.28084 ; 
    }
    else if(inputTypeValue === 'meter' && resultTypeValue === 'meter')
    {
        result.value = input.value ; 
    }
//////////////////////////////
    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter')
        {
            result.value = Number(input.value) * 1000 ; 
        }
   else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter')
        {
            result.value = Number(input.value) * 100000 ; 
        }
   else if(inputTypeValue === 'kilometer' && resultTypeValue === 'mile')
        {
            result.value = Number(input.value) * 0.621271 ; 
        }
   else if(inputTypeValue === 'kilometer' && resultTypeValue === 'feet')
        {
            result.value = Number(input.value) * 3280.84 ; 
        }
   else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer')
        {
            result.value = input.value; 
        }
/////////////////////////
        if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter')
            {
                result.value = Number(input.value) * 0.01 ; 
            }
       else if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer')
            {
                result.value = Number(input.value) * 0.00001 ; 
            }
       else if(inputTypeValue === 'centimeter' && resultTypeValue === 'mile')
            {
                result.value = Number(input.value) * 0.0000062137 ; 
            }
       else if(inputTypeValue === 'centimeter' && resultTypeValue === 'feet')
            {
                result.value = Number(input.value) * 0.0328084 ; 
            }
       else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter')
            {
                result.value = input.value; 
            }
       ///////////////
       if(inputTypeValue === 'mile' && resultTypeValue === 'meter')
        {
            result.value = Number(input.value) * 1609.34 ; 
        }
   else if(inputTypeValue === 'mile' && resultTypeValue === 'kilometer')
        {
            result.value = Number(input.value) * 1.60934 ; 
        }
   else if(inputTypeValue === 'mile' && resultTypeValue === 'centimeter')
        {
            result.value = Number(input.value) * 0.0000062137 ; 
        }
   else if(inputTypeValue === 'mile' && resultTypeValue === 'feet')
        {
            result.value = Number(input.value) * 5280 ; 
        }
   else if(inputTypeValue === 'mile' && resultTypeValue === 'mile')
        {
            result.value = input.value; 
        }
        /////////////////
        if(inputTypeValue === 'feet' && resultTypeValue === 'meter')
            {
                result.value = Number(input.value) * 0.3048 ; 
            }
       else if(inputTypeValue === 'feet' && resultTypeValue === 'kilometer')
            {
                result.value = Number(input.value) * 0.000305 ; 
            }
       else if(inputTypeValue === 'feet' && resultTypeValue === 'centimeter')
            {
                result.value = Number(input.value) * 30.48 ; 
            }
       else if(inputTypeValue === 'feet' && resultTypeValue === 'mile')
            {
                result.value = Number(input.value) * 0.000189394 ; 
            }
       else if(inputTypeValue === 'feet' && resultTypeValue === 'feet')
            {
                result.value = input.value; 
            }
}