const searchBar = document.querySelector('#searchBar');

const searchBarHandler = async (event) => {

    
    event.preventDefault();
    const input = document.querySelector('#autocomplete-input').value.trim();

        
        if (input) {
            const response = await fetch('/api/product/search', {
                method: 'POST',
                body: JSON.stringify({ input}),
                headers: {'Content-Type': 'application/json'},

            });
            console.log(response);
            if (response.ok) {
                document.location.replace(response.url);
            } else {
                alert('Search returned no result');
            }
        }
};

searchBar.addEventListener("submit", searchBarHandler);