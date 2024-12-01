const colorSelector = document.getElementById('colorSelector');

colorSelector.addEventListener("change", function() {
 document.body.style.backgroundColor = this.value;
});