const container = document.getElementById('container');

// const main = document.createElement('div');
// container.classList.add('container')

const world_countries = (countries) => {

    //fetch the whole data from API to data object
    fetch(countries).then(res => res.json()).then(data => {
    
        //itarates all data until its length
        for (let index = 0; index < data.length; index++) {
    
           //console.log(data[index].name.common);
           if (data[index].name.common !== undefined) {
               
                
                
                //span
                const span = document.createElement('span');
                span.classList.add('block');
                container.appendChild(span);
                // block
                const block = document.createElement('div');
                block.classList.add('card');
                container.appendChild(block);
                

               
                //h2 country name
                countryName = document.createElement('h2');
                countryName.classList.add('countryH1');
                countryName.append(data[index].name.common);

                span.appendChild(countryName);
                

                

                const para = document.createElement('p');
                para.classList.add('continent');
                
                para.append('Located in '+data[index].region);
                span.appendChild(para);
                
                
                
                language(data[index].languages, span);
                block.appendChild(span);
            }else{
                //h2 country name
                countryName = document.createElement('h2');
                countryName.classList.add('countryH1');
                countryName.append('No official Name');

                span.appendChild(countryName);

            }
                
        }
        
        
    })
}

const weather = (place) => {
    const api = 'https://api.weatherapi.com/v1/current.json?key=5fa17638870a431d9b282255220403&q='+place+'&aqi=no';
    
    Object.entries(place).forEach(([key, value]) => {
        console.log(value);
    });

    return api;

}

const language = (langs,span) => {
   

    if (langs === undefined) {
        return 'No Official Language'
    }else{
        Object.entries(langs).forEach(([key, value]) => {
            //console.log(value);

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
weather('Pretoria');
//getLetter('https://restcountries.com/v3.1/all')
// letters.appendChild(container);