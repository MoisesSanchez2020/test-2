// Search button click event handler
document.getElementById("search-button").addEventListener("click", function() {
    // Get values from the form
    var name = document.getElementById("search-name").value;
    var lastName = document.getElementById("search-lastname").value;
    var address = document.getElementById("search-address").value;
    var country = document.getElementById("search-country").value;
    var phone = document.getElementById("search-phone").value;
  
    // Create the JSON object with the form values
    var json = {
      "id": "1a3f4c",
      "name": name,
      "last_name": lastName,
      "address": address,
      "country": country,
      "phone_number": phone,
      "avatar": "https://www.gannett-cdn.com/media/USATODAY/None/2014/10/09/635484412619522719-D06-John-Lennon-older-07.jpg?width=390&format=pjpg&auto=webp&quality=70",
      "date_of_birth": "1990-01-01",
      "driver_license": "A123456789",
      "social_media": "john_doe"
    };
  
    // Update the ID card with the JSON data
    document.querySelector(".id-card .name").textContent = json.name + " " + json.last_name;
    document.querySelector(".id-card .desi").textContent = json.country;
    document.querySelector(".id-card .no#card-id").textContent = "ID " + json.id;
    document.querySelector(".id-card .address").textContent = json.address;
  
    document.getElementById("card-avatar").src = json.avatar;
    document.getElementById("card-date-of-birth").textContent = json.date_of_birth;
    document.getElementById("card-phone-number").textContent = json.phone_number;
    document.getElementById("card-office-address").textContent = json.address;
    document.getElementById("card-driver-license").textContent = json.driver_license;
    document.getElementById("card-social-media").textContent = json.social_media;
  
  // Hide other elements
var elementsToHide = document.querySelectorAll("header, nav, .container, footer, .main-page-content, .jumbotron");
elementsToHide.forEach(function(element) {
  element.style.display = "none";
});

// ...



    // Show the ID card and the 'back' div
    document.querySelector(".id-card").style.display = "block";
    document.getElementById("back").style.display = "block";
  
    // Change the background color to white
    document.body.style.backgroundColor = "white";
  
    // Set a timer to hide the ID card, the 'back' div, and reset the background color after 10 seconds
    setTimeout(function() {
      // Show other elements
      elementsToHide.forEach(function(element) {
        element.style.display = "block";
      });
  
      // Hide the ID card and the 'back' div
      document.querySelector(".id-card").style.display = "none";
      document.getElementById("back").style.display = "none";
  
      // Reset the background color
      document.body.style.backgroundColor = "";
    }, 5000); // 5 seconds in milliseconds
  
    // Clear the form values
    document.getElementById("search-name").value = "";
    document.getElementById("search-lastname").value = "";
    document.getElementById("search-address").value = "";
    document.getElementById("search-country").value = "";
    document.getElementById("search-phone").value = "";
  });
  


