const getSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    

    // empty Search Error
    const seachError = document.getElementById('search-error');
    const resultValue = document.getElementById('search-result');
    const resultContainer = document.getElementById('display-api');
    if (searchField.value == "") {
        seachError.innerText = 'Please type to find';
        resultValue.innerText = "";
        resultContainer.textContent = "";
        
    }
    else{
        seachError.innerText = "";
        

        // Load Phone api
        const loadPhone = () => {
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchField.value}`;
            fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.data))
            
        };
        
        const resultValue = document.getElementById('search-result');
        const displayData = data =>{
            const resultContainer = document.getElementById('display-api');
            if (data.length > 1) {
                resultValue.innerHTML = `${data.length} Result found for "<strong>${searchField.value}</strong>"`;
            }
            else if(data.length == 1){
                resultValue.innerHTML = `${data.length} Result found for "<strong>${searchField.value}</strong>"`;
            }
            else if(data == ""){
                let noResult = `${searchField.value} Result not Found`;

                document.getElementById('search-result').innerText = noResult;
                
            }
            searchField.value = "";
            resultContainer.textContent = "";

            // Show Data
            data.forEach(phoneData=>{
                // console.log(phoneData);
                const parentDiv = document.getElementById('display-api');
                const div = document.createElement('div');
                div.classList.add("col");
                div.innerHTML = `
                
                <div class="card">
                <img src="${phoneData.image}" class="card-img-top img-thumbnail" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Brand Name : ${phoneData.brand}</h5>
                  <p class="card-text">Name : ${phoneData.phone_name}</p>
                </div>
                <div class="btn-details">
                    <button onclick="findDetails('${phoneData.slug}')" class="btn btn-primary px-2 fw-bolder">Find More</button>

                </div>
              </div>
            </div>

                `;
                parentDiv.appendChild(div);

            });

        }

        loadPhone();

    }

}
    const findDetails =(data) =>{
        const url = `https://openapi.programming-hero.com/api/phone/${data}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayDetailsInfo(data.data))
    };
    const displayDetailsInfo = (data) =>{
        console.log(data);
        const phoneDetails = document.getElementById('phone-details');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.releaseDate}</p>
            <p class="card-text">${data.mainFeatures}</p>
             
        </div>
    `;
    phoneDetails.appendChild(div);
}
 
