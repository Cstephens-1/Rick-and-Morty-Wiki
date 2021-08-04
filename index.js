
fetch("https://rickandmortyapi.com/api/character")
.then(resp=> resp.json())
.then(chars=> {
    renderChars(chars)
    // filterChars(chars)
})
    

// const submitForm = document.querySelector("#submitForm")
// submitForm.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     filterChars(chars)
    
    
    
    
// })

// function filterChars(chars){
//     let speciesOptions = document.querySelector(".speciesName")
//     let genderOptions = document.querySelector(".genderName")
//     let statusOptions = document.querySelector(".statusName")
//     const optionSelectors = `${speciesOptions.value} && ${genderOptions.value} && ${statusOptions.value}`

    

//     let charArray = chars.results
//     // const charsSelectors = 
//     charArray.forEach(element => {
//         return 
//     })
//     const result = charArray.filter(character => console.log(character)); 
//        character.species === `${speciesOptions.value}`,
//     // && character.status === `${statusOptions.value}` && character.gender=== `${genderOptions}`)
//     console.log(result)
// }
    

    

    



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
        card.id = `${element.id}`

        const charImage = document.createElement('img')
        charImage.src = `${element.image}`

        const name = document.createElement("h2")
        name.textContent= element.name

        const species = document.createElement("p")
        species.textContent = `Species: ${element.species}`

        const gender = document.createElement("p")
        gender.textContent = `Gender: ${element.gender}`

        const status = document.createElement("p")
        status.textContent = `Status: ${element.status}`

        card.append(name, species, gender, status, charImage, newForm)
        charContainer.appendChild(card)

        charImage.addEventListener("click", (event)=>{
          
            charQuoteCardAppender(card);
            
        })
        charImage.removeEventListener("click", ()=> {
            charQuoteCardAppender(card);
        })

        card.addEventListener("mouseenter", (event)=> {
            event.target.style.color = "yellow";
            
            
        })
        card.addEventListener("mouseleave", (event)=> {
            event.target.style.color = "black";
              
        })
        // card.addEventListener("click", (event)=> {
        //     videoAppender();
              
        // })
        // function videoAppender(){
        //     const video = document.createElement('video')
        //     video.src = "https://www.youtube.com/watch?v=hQdp7rN6vUs&ab_channel=AdultSwimUK"
        //     const card1 = document.getElementById('1')
        //     card1.append(video)
        // }
        


    //function to append a new comment to the card.
        function cardAppender(){
            const newP = document.createElement("p")
            newP.textContent = comment.value
            card.append(newP)
        }
        function charQuoteCardAppender(card){
           
            const rickQuote = `"Listen Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science."`
            const mortyQuote = `"Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV."`
            const summerQuote = `"You're Holding Me Verbally Hostage."`
            const bethQuote = `"You can’t make people like you. You just have to wait for hating you to bore them."`
            const jerryQuote = `"Innocent people are going to die because of me. Why am I so mediocre?"`
            const abadangoQuote = `N/A`
            const abradolfQuote = `"Rick! You brought me into this world. The suffering abomination. Tortured by the duality of it’s being. But I shall finally know peace when I watch the life drain from your wretched body!"`
            const adjudicatorRQuote = `N/A`
            const agencyDirectorQuote = `"We have 34 armed guards, and we can't kill a pickle?"`
            const alanRailsQuote = `"All aboard, motherf*****!"`
            const albertEQuote = `N/A`
            const alexanderQuote = `"Waaaah! Don't let me die!"`
            const alienGoogahQuote = `N/A`
            const alienMortyQuote = `N/A`
            const alienRickQuote = `N/A`
            const amishCyborgQuote = `"Remember it, Rick?"`
            const annieQuote = `"Actually, I studied Dr. Bloom's work. I believe I have the knowledge necessary to create a new, much safer park!"`
            const antennaMorty = `N/A`
            const antennaRick = `N/A`
            const antsInMyEyesJQuote = `"I'm Ants-In-My-Eyes Johnson, Here at Ants-in-My-Eyes Johnson's Electronics. I mean, there's so many ants in my eyes! And there's so many TVs, microwaves, radios I think, I can't-- I'm not 100% sure what we have here in stock, because I can't see anything"`
            
            // rickQuote.className = "quote"
            const card1 = document.getElementById('1')
            const card2 = document.getElementById('2')
            const card3 = document.getElementById('3')
            const card4 = document.getElementById('4')
            const card5 = document.getElementById('5')
            const card6 = document.getElementById('6')
            const card7 = document.getElementById('7')
            const card8 = document.getElementById('8')
            const card9 = document.getElementById('9')
            const card10 = document.getElementById('10')
            const card11 = document.getElementById('11')
            const card12 = document.getElementById('12')
            const card13 = document.getElementById('13')
            const card14 = document.getElementById('14')
            const card15 = document.getElementById('15')
            const card16 = document.getElementById('16')
            const card17 = document.getElementById('17')
            const card18 = document.getElementById('18')
            const card19 = document.getElementById('19')
            const card20 = document.getElementById('20')

            card1.append(`quote: ${rickQuote}`)
            card2.append(`quote: ${mortyQuote}`)
            card3.append(`quote: ${summerQuote}`)
            card4.append(`quote: ${bethQuote}`)
            card5.append(`quote: ${jerryQuote}`)
            card6.append(`quote: ${abadangoQuote}`)
            card7.append(`quote: ${abradolfQuote}`)
            card8.append(`quote: ${adjudicatorRQuote}`)
            card9.append(`quote: ${agencyDirectorQuote}`)
            card10.append(`quote: ${alanRailsQuote}`)
            card11.append(`quote: ${albertEQuote}`)
            card12.append(`quote: ${alexanderQuote}`)
            card13.append(`quote: ${alienGoogahQuote}`)
            card14.append(`quote: ${alienMortyQuote}`)
            card15.append(`quote: ${alienRickQuote}`)
            card16.append(`quote: ${amishCyborgQuote}`)
            card17.append(`quote: ${annieQuote}`)
            card18.append(`quote: ${antennaMorty}`)
            card19.append(`quote: ${antennaRick}`)
            card20.append(`quote: ${antsInMyEyesJQuote}`)

            // function quoteVisibility(){
            //     card.addEventListener("click", ()=> {
            //         quote.style.visibility = "visible";
            //     })
            // }
            // quoteVisibility();
            

            // const quoteCard = document.createElement('div')
            // const liQuote = document.createElement('li')
            // liQuote.className = "Quote-li"
            // quoteCard.className = "Quote-card"
            // quoteCard.append()
            
            // liQuote.textContent = rickQuote
            // quoteCard.append(liQuote)
            
        }
        
        
    });
    
}

