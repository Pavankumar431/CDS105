function handleSearch() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    console.log("Searching for:", searchQuery);
}

document.getElementById("search-button").addEventListener("click", handleSearch);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}


setInterval(function() {
    plusSlides(1);
}, 3000); 

// function addEvent() {
//     const eventName = document.getElementById('event-name').value;
//     const eventDate = document.getElementById('event-date').value;

//     if (eventName && eventDate) {
//         const eventsList = document.getElementById('events-list');
//         const newEvent = document.createElement('li');
//         newEvent.innerHTML = `${eventName} - ${eventDate} <button onclick="deleteEvent(this)">Delete</button>`;
//         eventsList.appendChild(newEvent);

//         document.getElementById('event-name').value = '';
//         document.getElementById('event-date').value = '';
//     } else {
//         alert('Please enter both event name and date.');
//     }
// }

// function deleteEvent(button) {
//     button.parentElement.remove();
// }


