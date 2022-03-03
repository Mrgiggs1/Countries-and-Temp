const countries = `https://restcountries.com/v3.1/all`;

fetch(countries).then(res => res.json()).then(data => {
    
    for (let index = 0; index < data.length; index++) {

       //console.log(data[25].name.common);
       if (data[index].name.common == "South Africa") {

        for (let i = 0; i < 11; i++) {
            
            console.log(data[index].name);
        } 
           break;
       }
    }

})