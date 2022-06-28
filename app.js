const form = document.querySelector(".subscription_form");
let input = document.querySelector("input")
let small = document.querySelector("small")

form.addEventListener("submit", (e) => {
   e.preventDefault()
   const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (regEx.test(input.value.trim())) {
      input.classList.remove("error")
      input.classList.add("success")
      small.classList.remove("error")
   } else {
      input.classList.add("error")
      small.classList.add("error")
      input.classList.remove("success")
   }
})