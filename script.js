const inputDom = document.querySelector('input');
const btnPhoto = document.querySelector('.getPhotoBtn');
const btnBreeds = document.querySelector('.getDogBtn');
const dogListDOM = document.querySelector('ul');
const errorDOM = document.querySelector('.error');

btnPhoto.addEventListener('click', getDog)

function getDog() {
    const inputVal = inputDom.value.toLowerCase();

    const url = `https://dog.ceo/api/breed/${inputVal}/images/random`;

    async function getImage() {
        try {
            const respone = await fetch(url);

            if (!respone.ok) {
                throw new Error('Ivyko klaida.');
            }

            const imgJson = await respone.json();
            const image = imgJson.message;

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



