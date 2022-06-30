const firstForm = document.querySelector('#first-form')
const selectElement = document.getElementById('select-breed')
const picWrapper = document.getElementById('pic-wrapper')
const imgElement = document.getElementById('dog-pic')

function searchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breed => {
        let breeds = breed.message
        for(const breed in breeds){
            let optionElement = document.createElement('option')
            optionElement.textContent = breed
            selectElement.append(optionElement)
        }
        
    })

    firstForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const form = e.target
        const select = form.querySelector('select').value
    
            fetch(`https://dog.ceo/api/breed/${select}/images`)
            .then(res => res.json())
            .then(pic => {
                
                let randomNumber = Math.floor(Math.random() * 150)   
                let picLinks = pic.message
                imgElement.src = picLinks[randomNumber]
                picWrapper.append(imgElement)
               
            })
        })
}

searchBreed()

// 1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.
// 2. Jeigu šuns veislė yra išvestinė (sub-breed), tai šalia ji turėtų būti atvaizduojama parašant pagrindinės veislės pavadinimą (breed) ir šalia išvestinės veislės pavainimą (sub-breed).
// viena kategorija
// antra kategorija
// Bulldog (French)
// Bulldog (English)
// Bulldog (Boston)
// ketvirta kategorija