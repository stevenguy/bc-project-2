let _user = JSON.parse(localStorage.getItem("user"))

fetch('/api/myPolls/' + _user.id)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let cardContainer = document.getElementById('cardContainer')
   
    data.forEach(polls => {
        let pollDiv = ""
        if (polls.type === "multiple") {
            polls.pollOptions.forEach(element => {
                pollDiv +=
               `<div>
               <h4 class="voteOptions">${element.name}</h4>
                <div class="progress" role="progressbar" tabindex="0">
                <span class="progress-meter" style="width: 25%">
                    <p class="progress-meter-text">25%</p>
                </span>
                </div>
                </div>
                `
            })
        } else if (polls.type === "stars") {
            pollDiv = `
            <div class="stars">
                <input class="star star-5" id="star-5" type="radio" name="star">
                <label class="star star-5" for="star-5"></label>
                <input class="star star-4" id="star-4" type="radio" name="star">
                <label class="star star-4" for="star-4"></label>
                <input class="star star-3" id="star-3" type="radio" name="star">
                <label class="star star-3" for="star-3"></label>
                <input class="star star-2" id="star-2" type="radio" name="star">
                <label class="star star-2" for="star-2"></label>
                <input class="star star-1" id="star-1" type="radio" name="star">
                <label class="star star-1" for="star-1"></label>
            </div>`
        } else {
            pollDiv = `
            <div class="left">${polls.pollOptions[0].name}</div>
            <div class="right">${polls.pollOptions[1].name}</div>
            `
        }
            cardContainer.insertAdjacentHTML('afterbegin',
            `<div class="medium-6 cell">
            <div class="card">
                <div class="card-divider">
                    <img class="avatar" src="${_user.photoURL}">
                    <div>
                        ${polls.name.trim()}
                    </div>
                </div>
                <div class="card-section">
                    ${pollDiv.trim()}
                </div>  
                <div class="button-group">
                <a class="secondary button details">View Details</a>
                <a class="warning button vote">Vote</a>
                <a class="alert button delete">Delete</a>
                </div>
            </div>
        </div>
            `)     
    });
  });

  // fetch('/poll/:id')
//   .then(function(response) {
//       console.log(response)
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson)
//     let max = 20
//     myJson.length < max ? max = myJson.length : null
//     for (i = 0 ; i < max ; i++) {
//         const element = myJson[i];

//         fetch(`/poll/${element.id}`)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(myJson2) {
//                 console.log(myJson2)

//                 fetch(`/api/user/${element.userId}`)
//                     .then(function(response) {
//                         return response.json();
//                     })
//                     .then(function(myJson3) {
//                         console.log(myJson3)

//                         switch(element.type){
//                             case 'stars':
//                                 $('.masonry-css').append(`
//                                     <div class="masonry-css-item">
//                                         <a href="/poll/${element.id}">
//                                         <div class="callout">
//                                             <h4 style="padding: 0px;">${element.name}</h4>
//                                             <p>
//                                                 &#0151; ${myJson3.name}
//                                             </p>
//                                             <p>
//                                                 <span>Rating: </span>
//                                                 <span style="font-size: 24px;">&#9734;   3.5</span>
//                                             </p>
//                                         </div>
//                                         </a>
//                                     </div>
//                                 `)
//                             break;
//                             case 'twoChoices':
//                                 $('.masonry-css').append(`
//                                     <div class="masonry-css-item">
//                                         <a href="/poll/${element.id}">
//                                         <div class="callout">
//                                             <h5 style="padding: 0px;">${element.name}</h5>
//                                             <h6>
//                                                 ${myJson2[0].name}
//                                             </h6>
//                                             <h6>
//                                                 ${myJson2[1].name}
//                                             </h6>
//                                             <p>
//                                                 &#0151; ${myJson3.name}
//                                             </p>
//                                         </div>
//                                         </a>
//                                     </div>
//                                 `)
//                             break;
//                             case 'multiple':
//                                 $('.masonry-css').append(`
//                                     <div class="masonry-css-item">
//                                         <a href="/poll/${element.id}">
//                                         <div class="callout">
//                                             <h5 style="padding: 0px;">${element.name}</h5>
//                                             <h6>
//                                                 ${myJson2[0].name}
//                                             </h6>
//                                             <h6>
//                                                 ${myJson2[1].name}
//                                             </h6>
//                                             <h6>
//                                                 ${myJson2[2].name}
//                                             </h6>
//                                             <p>
//                                                 &#0151; ${myJson3.name}
//                                             </p>
//                                         </div>
//                                         </a>
//                                     </div>
//                                 `)
//                             break;
//                         }
//                     })
//             })
//         }
//   });


