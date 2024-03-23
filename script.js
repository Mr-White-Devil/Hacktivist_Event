// Function to open the popup and show the overlay
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
// Function to close the popup and hide the overlay
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("websiteContent").style.display = "block";
}
function adjustParticleContainerHeight() {
    const container = document.getElementById('particles-js-container');
    var windowHeight = window.innerHeight;
    container.style.height = windowHeight + 'px';
}

// Call the function initially to set the correct height on page load
adjustParticleContainerHeight();

// Event listener for "Yes" button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmBtn").addEventListener("click", function () {
        const password = document.getElementById("passwordInput").value;
        if (password === "HACKTIVIST") {
            closePopup(); // Close the popup
            document.getElementById("websiteContent").style.display = "block";
            document.getElementById("video-content").style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
            // Optionally clear the input field
            document.getElementById("passwordInput").value = "";
        }
    });

    // Event listener for "No" button
    document.getElementById("cancelBtn").addEventListener("click", function () {
        closePopup(); // Close the popup
        // Prevent access to the website
        window.location.href = "about:blank"; // Redirect to a blank page
    });
});
window.addEventListener('resize', function() {
    adjustParticleContainerHeight();
});



// Show popup when the page loads
window.onload = function () {
    openPopup();
};
