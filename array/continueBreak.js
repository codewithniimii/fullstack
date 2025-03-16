function skipNumber(number){
    let evenNumbers = [    ]
     
    for(let i=0; i++ ){
        if(i % 2== 1){
            continue
        }

        if(i==number){
            continue
        }

        evenNumbers.push(i)
    }
        return evenNumbers
    
}