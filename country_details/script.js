let searchbtn = document.getElementById('search-btn')
let countryinp =document.getElementById('country-inp')

searchbtn.addEventListener("click",()=>{
    let countryName = countryinp.value;
    const url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(url)

    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data[0])
        console.log(data[0].capital[0])
        console.log(data[0].flags.svg)
        console.log(data[0].name.common)
        console.log(data[0].continents[0])
        console.log(Object.keys(data[0].currencies)[0])
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        console.log(Object.values(data[0].languages).toString().split(",").join(", "))

        result.innerHTML =`<img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        
        <div className="output">
                <div className="output-data">
                <h4>Capital: </h4><span>${data[0].capital[0]}</span>
                 </div>
        </div>
        
        
        <div className="output">
                <div className="output-data">
                 <h4>Continent: </h4><span>${data[0].continents[0]}</span>
                </div>
        </div>
        

         
        <div className="output">
                <div className="output-data">
                 <h4>Currency: </h4><span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>
                </div>
        </div>
        <div className="output">
        <div className="output-data">
         <h4>Language: </h4><span>${Object.values(data[0].languages).toString().split(",").join(", ")} </span>
        </div>
</div>

        `

           
    })
    .catch(()=>{
        if(countryName.length == 0){
            
            result.innerHTML="<h3 Input field can not be empty</h3>"
        }
        else{
            result.innerHTML="<h3>Please enter a valid country name</h3>"
        }
    })
})