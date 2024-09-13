const inputDOM = document.querySelector('input');
const photoBtnDOM = document.querySelector('.getPhotoBtn');
const dogBtnDOM = document.querySelector('.getDogBtn');
const dogListDOM = document.querySelector('ul');
const errorDOM = document.querySelector('.error');

photoBtnDOM.addEventListener('click', getDog)

function getDog() {
    const inputVal = inputDOM.value.toLowerCase;


    const url = `https://dog.ceo/api/breed/${inputVal}/images`;

    async function getImage() {
        try {
            const respone = await fetch(url);

            if (!respone.ok) {
                throw new Error('Ivyko klaida.');
            }

            const imgJason = await respone.json();
            const image = imgJason.message;

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

    getImage()
}



