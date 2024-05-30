var menu_bar = document.getElementById('menu_bar')


var side_nav = document.getElementById('side_nav')

var close_btn = document.getElementById('close_btn')

menu_bar.addEventListener('click', function(){


    side_nav.style.right=0

})


close_btn.addEventListener('click', function(){

    side_nav.style.right= "-50%"
})