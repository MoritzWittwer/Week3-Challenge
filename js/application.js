console.log("JavaScript successfully loaded!")

document.addEventListener("DOMContentLoaded", function(){
    var jet = document.getElementById("fighter-jet")
    console.debug(jet)

    jet.addEventListener("mouseover", function(){
        jet.style.color="gold"
        /*alert("hoffentlich hesch gärn gold")*/
    })
    jet.addEventListener("mouseleave", function(){
        jet.style.color="white"
    })
})



document.addEventListener("DOMContentLoaded",function(){
    var mailButton = document.getElementById("mailButton")
    console.debug(mailButton)

    var mailField = document.getElementById('mailField')
    console.debug(mailField)

    mailButton.addEventListener("click", function(){
        alert("Thanks for contacting us! Check your inbox at " + mailField.value)
    })
})
