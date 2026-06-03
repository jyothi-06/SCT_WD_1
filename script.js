window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* Booking Form */
const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Booking Successful! Thank you for choosing HotelStay.");

    bookingForm.reset();

    document.getElementById("upiField").style.display = "none";
    document.getElementById("cardField").style.display = "none";
    document.getElementById("arrivalField").style.display = "none";

});

/* Payment Method Fields */
function showPaymentFields(){

    const payment = document.getElementById("paymentMethod").value;

    const upiField = document.getElementById("upiField");
    const cardField = document.getElementById("cardField");
    const arrivalField = document.getElementById("arrivalField");

    upiField.style.display = "none";
    cardField.style.display = "none";
    arrivalField.style.display = "none";

    if(payment === "upi"){
        upiField.style.display = "block";
    }

    else if(payment === "credit" || payment === "debit"){
        cardField.style.display = "block";
    }

    else if(payment === "arrival"){
        arrivalField.style.display = "block";
    }
}


/* Room Details Popup */
function showRoom(room){

    const popup = document.getElementById("roomPopup");
    const title = document.getElementById("popupTitle");
    const details = document.getElementById("popupDetails");

    if(room === "deluxe"){

        title.innerText = "Deluxe Room";

        details.innerHTML =
        "₹3,999 / Night <br>" +
        "King Size Bed <br>" +
        "Free WiFi <br>" +
        "Air Conditioning <br>" +
        "Smart TV <br>" +
        "Complimentary Breakfast";
    }

    else if(room === "suite"){

        title.innerText = "Suite Room";

        details.innerHTML =
        "₹6,999 / Night <br>" +
        "Luxury Suite <br>" +
        "Living Area <br>" +
        "Free WiFi <br>" +
        "Air Conditioning <br>" +
        "Complimentary Breakfast";
    }

    else if(room === "family"){

        title.innerText = "Family Room";

        details.innerHTML =
        "₹5,499 / Night <br>" +
        "Spacious Family Room <br>" +
        "Multiple Beds <br>" +
        "Free WiFi <br>" +
        "Air Conditioning <br>" +
        "Complimentary Breakfast";
    }

    popup.style.display = "flex";
}

function closePopup(){
    document.getElementById("roomPopup").style.display = "none";
}