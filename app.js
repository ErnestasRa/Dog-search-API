const firstForm = document.querySelector('#first-form')
const selectElement = document.getElementById('select-breed')
const picWrapper = document.getElementById('pic-wrapper')
const imgElement = document.getElementById('dog-pic')

function searchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breed => {
        let breeds = breed.message
        let breedValues = Object.values(breeds)
        for(let breed in breeds){
            
            let mainBreed = breed
            let subBreeds = breeds[breed]
            
            if(subBreeds.length === 0) {
                let optionElement = document.createElement('option')
                optionElement.textContent = mainBreed
                optionElement.value = mainBreed

                selectElement.append(optionElement)
            } else {
                subBreeds.map(subBreed => {
                    let optionElement = document.createElement('option')
                    let optionText = `${subBreed} (${mainBreed})`
                    optionElement.textContent = optionText
                    optionElement.value = mainBreed+'/'+subBreed
                    
                    selectElement.append(optionElement)
                })
            }
        }

    firstForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const form = e.target
        const select = form.querySelector('select').value
            fetch(`https://dog.ceo/api/breed/${select}/images`)
            .then(res => res.json())
            .then(pic => {
                let randomNumber = Math.floor(Math.random() * 15)   
                let picLinks = pic.message
                imgElement.src = picLinks[randomNumber]
                picWrapper.append(imgElement)
            })
        })
})}

searchBreed()
