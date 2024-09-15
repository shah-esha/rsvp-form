function dietaryDetails() {
    const dropdown = document.getElementById("dropdown");
    const dietaryDetails = document.getElementById("dietary-details");

    if (dropdown.value === "yes") {
      dietaryDetails.style.display = "block";
    } else {
      dietaryDetails.style.display = "none";
    }
  }

  function submitForm(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      dietary: document.getElementById("dropdown").value === "yes" ? document.getElementById("dietary-text").value : "None",
      indoorOutdoor: document.querySelector('input[name="indoor-outdoor"]:checked')?.value || "None",
      interactions: Array.from(document.querySelectorAll('input[name="interact"]:checked')).map(input => input.value).join(", "),
      extraInfo: document.getElementById("best-part").value
    };
  
    const url = "https://script.google.com/macros/s/AKfycbwUd91Z5KBcflPJAk2FTd7ApzBU8CDtkk7D_bBceaswgtD2jNfRxLry2mFPKm48l-prQQ/exec";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData)
    })
    .then(response => {
        console.log("Response received:", response);
      if (response.ok) {
        console.log("Submission successful, redirecting to thanks page...");
        window.location.href = "thanks.html"; 
      } else {
        console.error("Response was not OK:", response.status, response.statusText);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
  
  