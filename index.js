
fetch("https://rickandmortyapi.com/api/character")
.then(resp=> resp.json())
.then(chars=> {
    renderChars(chars)
    filterChars(chars)
})
    

// 
    
    
    
    
// })

function filterChars(chars){

    const submitForm = document.querySelector("#submitForm")
    submitForm.addEventListener("submit", (e)=>{
        e.preventDefault()
//     
    let speciesOptions = document.querySelector(".speciesName").value
    let firstLetterSpecies = speciesOptions.charAt(0).toUpperCase() + speciesOptions.slice(1)
    let genderOptions = document.querySelector(".genderName").value
    let firstLetterGender = genderOptions.charAt(0).toUpperCase() + genderOptions.slice(1)
    let statusOptions = document.querySelector(".statusName").value
    let firstLetterStatus = statusOptions.charAt(0).toUpperCase() + statusOptions.slice(1)

    let charArray = chars.results
    const result = charArray.filter(character => character.species === `${firstLetterSpecies}` && character.gender === `${firstLetterGender}` && character.status === `${statusOptions}`)
    console.log(result)
})
}

    



function renderChars(chars){
    const shortCharArray = chars.results
    shortCharArray.forEach(element => {

    //create an input field for a new comment with id of comment-form
        const newForm = document.createElement("form")
        newForm.id = "comment-form" 
        
        //create a new button for submitting a comment
        const formBtn = document.createElement("button")
        formBtn.innerText = " Submit"

        //add event listener to the submit button that appends the users text to the character card.
        newForm.addEventListener("submit", (event) =>{
            event.preventDefault();
            //append the users text to a new paragraph element to the card.
            cardAppender(event)
        })
        
        

        const comment = document.createElement("input");
        comment.className = "commentForm"
        comment.placeholder = "Enter comment"

        newForm.append(comment, " ",formBtn)

        //create an individual card for each character
        const charContainer = document.querySelector("#char-container")
        const card = document.createElement("div")
        card.className="char-card";
        card.id= element.id

        const name = document.createElement("h2")
        name.textContent= element.name

        const species = document.createElement("p")
        species.textContent = `Species: ${element.species}`

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${element.gender}`

        const status = document.createElement("p")
        status.textContent = `Status: ${element.status}`

        const location= document.createElement("p")
        location.className="location"
        location.textContent = element.location.name

        card.append(name, species, gender, status, location, newForm)
        charContainer.appendChild(card)
        console.log(chars)


    //function to append a new comment to the card.
        function cardAppender(){
            const newP = document.createElement("p")
            newP.textContent = comment.value
            card.append(newP)
        }

        function changeVisibility(){

    
            card.addEventListener("click", ()=>{
                location.style.visibility= "visible"
            })
        }
        changeVisibility()  
           
})
}


