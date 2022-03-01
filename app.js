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
            
        }






    }

}
