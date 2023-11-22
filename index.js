const icon = document.querySelector('.search-icon');
console.log(icon);
const search = document.querySelector('.search');
console.log(search);

icon.onclick = function() {
    search.classList.toggle('active');
};