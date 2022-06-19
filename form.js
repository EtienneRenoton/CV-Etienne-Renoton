/**
 * Je récupère mon bouton
 */

const button = document.querySelector(".contact_form button")
const formControls = document.querySelectorAll(".contact_form .form-control")

console.log(formControls)
button.addEventListener("click",function(){
    formControls.forEach(function(formControl){
        const input = formControl.querySelector("input,select,textarea")
        const error = formControl.querySelector(".error")
            if(input.value === "" || input.value === " "){
                //alert("remplissez les champs")
                error.style.display="block"
            }

        })

        
})
