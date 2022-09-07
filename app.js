let cat_btn = document.getElementById('cat_btn');
let dog_btn = document.getElementById('dog_btn');
let cat_result = document.getElementById('cat_result');
let dog_result = document.getElementById('dog_result');


cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click',getRandomDog);

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img  src="${data.file}"/>`
       
    });
}
function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}