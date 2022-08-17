// Program to seprate lower and upper case.

const names = ['a', 'B', 'c', 'D', 'e', ];

function letter(names) {
    const lowercase=[];
    const uppercase=[];

    names.forEach(element => {
        //console.log(elements);
        if (element == element.toLowerCase())
        {
            lowercase.push(element)
        }
        else  
        {
            
             uppercase.push(element)

        }

        
    })
        console.log(lowercase)
        console.log(uppercase)
}

letter(names);

module.exports ={letter};