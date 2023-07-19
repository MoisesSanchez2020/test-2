window.onload = function() {
    fetch('YOUR_JSON_ENDPOINT')
    .then(response => response.json())
    .then(data => {
        document.getElementById('svgfullname').textContent = data.fullname;
        document.getElementById('svgidnumber').textContent = data.idnumber;
        document.getElementById('svgdob').textContent = data.dob;
    });
};
