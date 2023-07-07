// Search button click event handler
document.getElementById("search-button").addEventListener("click", function() {
    // Get values from the form
    var name = document.getElementById("search-name").value.toLowerCase();
    var lastName = document.getElementById("search-lastname").value.toLowerCase();
  
    // Fetch data from data.json
    fetch("data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Find the matching user based on the form values
        var matchingUser = data.find(function(user) {
          return (
            user.name.toLowerCase() === name &&
            user.last_name.toLowerCase() === lastName
          );
        });
  
        // Update the ID card with the user data
        if (matchingUser) {
          updateIDCard(matchingUser);
        } else {
          // If no matching user found, display an error message or take appropriate action
          console.log("User not found");
        }
      })
      .catch(function(error) {
        console.log("Error fetching data:", error);
      });
  
    // Clear the form values
    document.getElementById("search-name").value = "";
    document.getElementById("search-lastname").value = "";
  });
  
  // Function to update the ID card with user data
  function updateIDCard(user) {
    // Update the ID card with the user data
    document.querySelector(".id-card .name").textContent = user.name + " " + user.last_name;
    document.querySelector(".id-card .desi").textContent = user.country;
    document.querySelector(".id-card .no").textContent = "ID " + user.id;
    document.querySelector(".id-card .address").textContent = user.address;
  
    document.getElementById("card-avatar").src = user.avatar;
    document.getElementById("card-date-of-birth").textContent = user.date_of_birth;
    document.getElementById("card-phone-number").textContent = user.phone_number;
    document.getElementById("card-office-address").textContent = user.address;
    document.getElementById("card-driver-license").textContent = user.driver_license;
    document.getElementById("card-social-media").textContent = user.social_media;
  
    // Show the ID card and the 'back' div
    document.querySelector(".id-card").style.display = "block";
    document.getElementById("back").style.display = "block";
  
    // Set a timer to hide the ID card and the 'back' div after 10 seconds
    setTimeout(function() {
      document.querySelector(".id-card").style.display = "none";
      document.getElementById("back").style.display = "none";
    }, 10000); // 10 seconds in milliseconds
  }
  