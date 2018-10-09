const access_key = '34acd100c5a6485e4819f3ea7d4cbb9fba59f9d37c3192944169d020c37bbce1';
const apiUrl = "https://api.unsplash.com/search/photos/?page=1&per_page=20";
const input = document.querySelector('input');
const form = document.querySelector('form');
const imageDiv = document.querySelector('#imageDiv');
const loadingImage = document.querySelector('#loadingImage');
loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    imageDiv.innerHTML = "";
    // loadingImage.style.display = "";
    const searchTerm = input.value;
    // console.log(searchTerm);
   search(searchTerm)
    .then(displayImages)

}

function search(searchTerm) {
    const url = `${apiUrl}&query=${searchTerm}&client_id=${access_key}`;
    return fetch(url, {method: 'GET'}) // retourne une promise
        .then(response => response.json())
        .then(data => {
            // console.log(data.results);
            return data.results
        });
}

function displayImages(images) {
    loadingImage.style.display = 'none';
   images.forEach(image => {
       // Create img tag
        const img = document.createElement('img');
       // Add image link from API unplash with src attribute
       img.src = `${image.urls.small}`
       // Append img tag to #imageDiv as child
       imageDiv.appendChild(img);
    //    console.log(image.urls.small);
   });

}

