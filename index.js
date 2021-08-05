fetch("https://rickandmortyapi.com/api/character")
    .then(resp => resp.json())
    .then(chars => {
        renderChars(chars)
    })



function renderChars(chars) {
    const shortCharArray = chars.results
    shortCharArray.forEach(element => {

        //create an input field for a new comment with id of comment-form
        const newForm = document.createElement("form")
        newForm.id = "comment-form"

        //create a new button for submitting a comment
        const formBtn = document.createElement("button")
        formBtn.innerText = " Submit"

        //add event listener to the submit button that appends the users text to the character card.
        newForm.addEventListener("submit", (event) => {
            event.preventDefault();
            //append the users text to a new paragraph element to the card.
            cardAppender(event)
        })



        const comment = document.createElement("input");
        comment.className = "commentForm"
        comment.placeholder = "Enter comment"

        newForm.append(comment, " ", formBtn)

        //create an individual card for each character
        const charContainer = document.querySelector("#char-container")
        const card = document.createElement("div")
        card.className = "char-card";
        card.id = element.id

        const name = document.createElement("h2")
        name.textContent = element.name

        const species = document.createElement("p")
        species.textContent = `Species: ${element.species}`

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${element.gender}`

        const status = document.createElement("p")
        status.textContent = `Status: ${element.status}`

        const location = document.createElement("p")
        location.className = "location"
        location.textContent = element.location.name

        const charImage = document.createElement('img')
        charImage.src = `${element.image}`

        card.append(name, species, gender, status, location, charImage, newForm)
        charContainer.appendChild(card)

        card.addEventListener("mouseenter", (event)=> {
            event.target.style.color = "yellow";


        })
        card.addEventListener("mouseleave", (event)=> {
            event.target.style.color = "black";

        })

        submitFormListener()

        function submitFormListener(){
            const submitForm = document.querySelector("#submitForm")

            submitForm.addEventListener("submit", (e) => {
                e.preventDefault()
                let speciesOptions = document.querySelector(".speciesName").value
                let genderOptions = document.querySelector(".genderName").value
                let statusOptions = document.querySelector(".statusName").value
    
                let charArray = chars.results
                const result = charArray.filter(character => character.species === `${speciesOptions}` && character.gender === `${genderOptions}` && character.status === `${statusOptions}`)
    
                const theseAreTheSelectedFilters = result.filter(element => element.id === parseInt(card.id))
    
                //change this to clear the html, and create only the cards that come back
                
                if (theseAreTheSelectedFilters.length === 0) {
                    card.innerHTML = ""
                } else {
                    card.style.visibility = "visible"
                }
                console.log(theseAreTheSelectedFilters)
    
            })
        }
            //function to append a new comment to the card.
            function cardAppender() {
                const newP = document.createElement("p")
                newP.textContent = comment.value
                card.append(newP)
            }
            cardAppender()

            function changeVisibility() {
                card.addEventListener("click", () => {
                    location.style.visibility = "visible"
                })
            }
            changeVisibility()
        }
    )
}