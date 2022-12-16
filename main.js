// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll(".like-glyph");
const errorMessage = document.getElementById('modal');

for (const like of likeHearts) {
  like.addEventListener("click", () => {
    mimicServerCall(url="http://mimicServer.example.com")
    .then(() => {
      if(like.innerHTML === EMPTY_HEART){
        like.innerHTML = FULL_HEART;
        like.className = "activated-heart";

      }else {
        like.innerText = ERROR;
      }
    })
    .catch(err => {
      errorMessage.className = "";
      errorMessage.innerText = err;
      setTimeout(() => errorMessage.className = "hidden", 3000);

    })
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
