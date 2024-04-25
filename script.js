document.getElementById('body-color').addEventListener('change', function() {
    document.querySelector('.shirt-body').style.backgroundColor = this.value;
});

document.getElementById('sleeves-color').addEventListener('change', function() {
    document.querySelector('.shirt-sleeves').style.backgroundColor = this.value;
});

document.getElementById('collar-color').addEventListener('change', function() {
    document.querySelector('.shirt-collar').style.backgroundColor = this.value;
});

// Function to update shirt preview
function updateShirtPreview() {
    var bodyColor = document.getElementById('body-color').value;
    var sleevesColor = document.getElementById('sleeves-color').value;
    var collarColor = document.getElementById('collar-color').value;

    document.querySelector('.shirt-body').style.backgroundColor = bodyColor;
    document.querySelector('.shirt-sleeves').style.backgroundColor = sleevesColor;
    document.querySelector('.shirt-collar').style.backgroundColor = collarColor;
}

// Event listeners for color inputs
document.getElementById('body-color').addEventListener('input', updateShirtPreview);
document.getElementById('sleeves-color').addEventListener('input', updateShirtPreview);
document.getElementById('collar-color').addEventListener('input', updateShirtPreview);

// Initial call to update shirt preview
updateShirtPreview();