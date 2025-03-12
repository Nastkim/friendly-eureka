// Handle star rating selection
document.querySelector("#rating").addEventListener("click", function(event) {
    let stars = "☆☆☆☆☆".split(""); // Default empty stars
    let index = event.target.innerText === "★" ? 4 : event.target.innerText === "☆" ? 1 : 3;
    stars.fill("★", 0, index);
    this.innerHTML = stars.join("");
});

// Handle submitting vote
document.querySelector("#submit-btn").addEventListener("click", function() {
    alert("Vote submitted!"); // Later, send to Google Sheets
});
