
fetch("https://rickandmortyapi.com/api/character")
.then(resp=> resp.json())
.then(chars=> {
    renderChars(chars)
    filterChars(chars)
})
    

// const submitForm = document.querySelector("#submitForm")
// submitForm.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     filterChars(chars)
    
    
    
    
// })

function filterChars(chars){
    let speciesOptions = document.querySelector(".speciesName")
    let genderOptions = document.querySelector(".genderName")
    let statusOptions = document.querySelector(".statusName")

    let charArray = chars.results
    const result = charArray.filter(character => character.species === `${speciesOptions.value}`)
    // && character.status === `${statusOptions.value}` && character.gender=== `${genderOptions}`)
    console.log(result)
    
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

        const name = document.createElement("h2")
        name.textContent= element.name

        const species = document.createElement("p")
        species.textContent = `Species: ${element.species}`

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${element.gender}`

        const status = document.createElement("p")
        status.textContent = `Status: ${element.status}`

        card.append(name, species, gender, status, newForm)
        charContainer.appendChild(card)


    //function to append a new comment to the card.
        function cardAppender(){
            const newP = document.createElement("p")
            newP.textContent = comment.value
            card.append(newP)
        }
    });
}


