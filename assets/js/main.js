// // SELECTOR OPTION
// const selected = document.querySelector(".selected")
// const optionsContainer = document.querySelector(".option-container")
// const optionsList = document.querySelectorAll(".option")

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active")
// })
// optionsList.forEach( option => {
//   option.addEventListener("click", () => {
//     selected.innerHTML = option.querySelector("label").innerHTML
//     optionsContainer.classList.remove("active")
//   })
// })

// PAUSE REPRODUCTION WHEN PLAY ANOTHER video container
var medias = Array.prototype.slice.apply(document.querySelectorAll('audio,video'));
medias.forEach(function(media) {
  media.addEventListener('play', function(event) {
    medias.forEach(function(media) {
      if(event.target != media) media.pause()
    })
  })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// CHANGE COLOR INFO POINTER
// const linkToInfo = document.querySelector(".link-to-info")
// const infoDetailContainer = document.querySelector(".info-detail-container")
// const infoNotificationBox = document.querySelector(".info-notification-box")

// // const infoNotificationBoxNoActive = document.querySelector(".info-notification-no-active")

// linkToInfo.addEventListener("click", () => {
//   infoNotificationBox.classList.remove("info-notification-no-active")
// })