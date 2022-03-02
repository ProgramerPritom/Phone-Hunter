const getSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    

    // empty Search Error
    const seachError = document.getElementById('search-error');
    const resultValue = document.getElementById('search-result');
    const resultContainer = document.getElementById('display-api');
    const phoneDetails = document.getElementById('phone-details');
    if (searchField.value == "") {
        seachError.innerText = 'Please type to find';
        resultValue.innerText = "";
        resultContainer.textContent = "";
        phoneDetails.textContent ="";
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
        const phoneDetails = document.getElementById('phone-details');
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
                phoneDetails.textContent = "";
                
            }
            searchField.value = "";
            resultContainer.textContent = "";
            phoneDetails.textContent = "";
            // Show Data
            data.slice(0,20).forEach(phoneData=>{
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
                    <button onclick="findDetails('${phoneData.slug}')" class="btn btn-primary px-2 fw-bolder">More Info</button>

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
        // declared sensor section
        const sensorList = data.mainFeatures.sensors;
        const listNumber = name => name;
        const arraySensorList = sensorList.map(listNumber);
        // console.log(arraySensorList);

        //declared others section 
        if(data.others){
            console.log(data.others);
        }else{
            console.log("hello");
        }

        const release = data.releaseDate;
        const phoneDetails = document.getElementById('phone-details');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${data.image}" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Name: ${data.name}</h5>
            <p class="card-text"><b>Release-date:</b> ${data.releaseDate = "" ? "No release Date Found" :release}</p>
            <h5><b>Features:</b></h5>
            <p class="card-text"><span><i><b>Storage:</b></i> ${data.mainFeatures.storage}</span><span><i><b> Display-Size:</b></i> ${data.mainFeatures.displaySize}</span>
            <span><i><b> Chip-set:</b></i> ${data.mainFeatures.chipSet}</span>
            <span><i><b> Memory:</b></i> ${data.mainFeatures.memory}</span></p>
            <h5><b>Sensors:</b></h5>
            <p class="card-text">${arraySensorList}</p>
            
             
        </div>
        </div>
        </div>
    `;
    window.scroll(0,0);
    phoneDetails.textContent = "";
    phoneDetails.appendChild(div);
    
}

 
