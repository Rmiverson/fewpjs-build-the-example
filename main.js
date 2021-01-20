// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('modal')
  const errorMsg = document.getElementById ('modal-message')

  mimicServerCall()
  .then(() => {
    likeListener()
  })
  .catch((error) => {
    modal.classList.remove('hidden')
    errorMsg.innerHTML = error
  })
  
})

const likeListener = () => {
  const likes = document.getElementsByClassName('like')

  Array.from(likes).forEach(like => {
    like.addEventListener('click', () => {
      likeHandler(like)
    })
  })
}

const likeHandler = (like) => {
  if (like.classList.contains('activated-heart')) {
    like.classList.remove('activated-heart')
  } else {
    like.classList.add('activated-heart')
  }

}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
