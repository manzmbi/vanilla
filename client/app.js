const access_key = '34acd100c5a6485e4819f3ea7d4cbb9fba59f9d37c3192944169d020c37bbce1';
const API_URL = "https://api.unsplash.com/search/photos/?page=1&per_page=8";
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', formSubmitted);
function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    // console.log(searchTerm);
   search(searchTerm);
}

function search(searchTerm) {
    const url = `${API_URL}&query=${searchTerm}&client_id=${access_key}`;
    // console.log(url);
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.results[4].urls.small);
        });
}

