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

    const url = "https://script.google.com/macros/s/AKfycbxAaIoZztf7JIFBeHjzmJeEhmNddtI20QBfuuyVpvOWFPdp415fGR-f0rZ33d_3IfycmA/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData)
    }).then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        window.location.href = "thanks.html";
      } else {
        console.error("Submission failed:", data);
      }
    }).catch(error => {
      console.error("Error:", error);
    });
}

  