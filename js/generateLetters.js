const container = document.getElementById('container');

// const main = document.createElement('div');
// container.classList.add('container')

const world_countries = (countries) => {
    // data.forEach(i => {
            
    // });


    fetch(countries).then(res => res.json()).then(data => {
    
        for (let index = 0; index < data.length; index++) {
    
           //console.log(data[index].name.common);
           if (data[index].name.common !== "") {  
               
                
                
                //block
                const span = document.createElement('span');
                span.classList.add('block');
                container.appendChild(span);


                //h2 country name
                countryName = document.createElement('h2');
                countryName.classList.add('countryH1');
                countryName.append(data[index].name.official);

                span.appendChild(countryName);
                

                

                const para = document.createElement('p');
                para.classList.add('continent');
                
                para.append('Located in '+data[index].region);
                span.appendChild(para);
                
                language(data[index].languages, span);
                
                
                
            }
                
        }
        
    })
}

const language = (langs,span) => {
   

    if (langs === undefined) {
        return 'No Official Language'
    }else{
        Object.entries(langs).forEach(([key, value]) => {
            console.log(value);

            const languagesDis = document.createElement('p');
            languagesDis.classList.add('language');
            
            languagesDis.append( value);
            span.appendChild(languagesDis);
        });
    }
    //return langArray;
}

//getLetter('./js/data/alphas.json')
world_countries('https://restcountries.com/v3.1/all')
//getLetter('https://restcountries.com/v3.1/all') 
letters.appendChild(container)