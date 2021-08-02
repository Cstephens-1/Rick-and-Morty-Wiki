fetch("https://rickandmortyapi.com/api/character")
.then(resp=> resp.json())
.then(data=> someFunction(data))
    




function someFunction(data){
    const shortCharArray = data.results.splice(0, 9)
    shortCharArray.forEach(element => {

    //create an input field for a new comment with id pf comment-form
        const newForm = document.createElement("form")
        newForm.id = "comment-form"
        
        //create a new button for submitting a comment
        const formBtn = document.createElement("button")
        formBtn.innerText = "Submit"

        //add event listener to the submit button that appends the users text to the character card.
        newForm.addEventListener("submit", (event) =>{
            
            event.preventDefault();
            //append the users text to a new paragraph element to the card.
            cardAppender(event)
            // card.append(newP)
            console.log(event.target)
        })
        
        

        const comment = document.createElement("input");
        comment.className = "commentForm"
        comment.placeholder = "Enter comment"

        

        newForm.append(comment,formBtn)


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
    // forEach item in shortCharArray = card render name, status, gender, comments, create image with char's id

    
}

