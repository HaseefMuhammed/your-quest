document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchInput").submit();
    }
});

console.log("This website made by Haseef Muhammed PC");