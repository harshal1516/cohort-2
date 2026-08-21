var chutki = document.querySelector('img');
var msg = document.querySelector('h2 span')
var body = document.body
chutki.addEventListener('mouseenter', function() {
msg.innerHTML='bheem se door hato'
    body.style.backgroundColor='red'

})

chutki.addEventListener('mouseleave', function() {
    msg.innerHTML='door hi rehna'
    body.style.backgroundColor='black'

})

