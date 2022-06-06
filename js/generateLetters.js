


const container = document.getElementById('container');

// const main = document.createElement('div');
// container.classList.add('container')

const world_countries = (countries) => {
    //fetch the whole data from API to data object
    fetch(countries).then(res => res.json()).then(data => {
    //console.log(data);
        //itarates all data until its length
        
        for (let index = 0; index < data.length; index++) {

           const capit = data[index].capital;

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

                if(capit === undefined)
                {
                    console.log('No Capital City');

                }else{

                    weather('https://api.weatherapi.com/v1/current.json?key=5fa17638870a431d9b282255220403&q='+capit+'&aqi=no&', span);
                    
                }

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



const weather = (place, span) => {

    //console.log(place);
    fetch(place).then(res => { return res.json(); }).then(data => {
       // console.log(data);
        //console.log(data.current.temp_f);

        const weatherDis = document.createElement('p');
        weatherDis.classList.add('weatherAPI');
        
        
        weatherDis.append('Temperature C:'+data.current.temp_c+` / F`+data.current.temp_f+`  `+data.current.condition.text +`
         `+data.location.localtime);
        span.appendChild(weatherDis);
        // return data.location.country;
        
    });
    
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
world_countries('https://restcountries.com/v3.1/all');

//getLetter('https://restcountries.com/v3.1/all')
// letters.appendChild(container);