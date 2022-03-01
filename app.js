const getSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    

    // empty Search Error
    const seachError = document.getElementById('search-error');
    if (searchField.value == "") {
        seachError.innerText = 'Please type to find';
        
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
                resultValue.innerText = `${data.length} Result found for ${searchField.value}`;
            }
            else if(data.length == 1){
                resultValue.innerText = `${data.length} Result found for ${searchField.value}`;
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
                div.classList.add('col');
                div.innerHTML = `
                
                <div class="card">
                <img src="${phoneData.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Brand Name : ${phoneData.brand}</h5>
                  <p class="card-text">Name : ${phoneData.phone_name}</p>
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
