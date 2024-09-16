const inputDom = document.querySelector('input');
const btnPhoto = document.querySelector('.getPhotoBtn');
const btnBreeds = document.querySelector('.getDogBtn');
const dogListDOM = document.querySelector('ul');
const errorDOM = document.querySelector('.error');

btnPhoto.addEventListener('click', getDog);
btnBreeds.addEventListener('click', getDogList);

function getDog() {
    const inputVal = inputDom.value.toLowerCase();

    const url = `https://dog.ceo/api/breed/${inputVal}/images/random`;

    async function getImage() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Ivyko klaida.');
            }

            const imgJson = await response.json();
            const image = imgJson.message;
            console.log(imgJson);
            
            const img = document.createElement("img");
            img.src = image;
            
            document.querySelector('.dogPhotos').appendChild(img);
        }

        catch (error) {
            console.error("klaida:", error.message);
            errorDOM.style.display = 'block';
            errorDOM.textContent = "Klaida:" + error.message;

            setTimeout(() => {
                errorDOM.style.display = 'none';
            },(1000 * 4))
        }
    }

    getImage();
}
function getDogList() {
    const url = 'https://dog.ceo/api/breeds/list/all'

    async function list() {       
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ivyko klaida.');
            }
            const allDogs = await response.json();
            const dogList = allDogs.message
            for (const key in dogList) {
                console.log(key);
            }




        } catch (error) {
            console.error("klaida:", error.message);
            errorDOM.style.display = 'block';
            errorDOM.textContent = "Klaida:" + error.message;

            setTimeout(() => {
                errorDOM.style.display = 'none';
            },(1000 * 4))
        }
    }
    list()
}


