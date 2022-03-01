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
            const displayApi = document.getElementById('display-api');
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



            data.forEach(phoneData=>{
                // console.log(phoneData);
                
            });
        }
        loadPhone();






    }

}
