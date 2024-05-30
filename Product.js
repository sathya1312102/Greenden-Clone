var menu_bar = document.getElementById('menu_bar')


var side_nav = document.getElementById('side_nav')

var close_btn = document.getElementById('close_btn')



menu_bar.addEventListener('click', function () {


    side_nav.style.right = 0

})


close_btn.addEventListener('click', function () {

    side_nav.style.right = "-50%"
})



//Product search

var serach_ele = document.getElementById("Search_ele")
var Product_container = document.getElementById("Product_container")


console.log(Product_container)

var h1list = Product_container.querySelectorAll("div")
console.log(h1list)


var result = document.createElement("p")
serach_ele.addEventListener('keyup', function () {

    var enteredvalue = event.target.value.toUpperCase()
   for(count=0 ; count<h1list.length; count=count+1){
var productName = h1list[count].querySelector("h1").textContent

    if(productName.toUpperCase().indexOf(enteredvalue)<0)
    {

        h1list[count].style.display="none"
        result.textContent = "No result founded"

        Product_container.append(result)

        
    }

    else {

        h1list[count].style.display= "block"
    }

   }


})