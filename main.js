import { cocktails } from "./data.js";
const main = document.querySelector(".cocktails")
const search = document.getElementById("search");




function renderData(cocktails){
  main.innerHTML = "";
 cocktails.map(el=>{
    return displayCocktail(el)

 })

}
renderData(cocktails)


   


detailsBtn.addEventListener("click", function(){
  console.log("im clicked")
})



function displayCocktail(item){
    const el = `
        <div class="item" id ='${item.idDrink}'>
        <img src='${item.strDrinkThumb}'>
        <div class="description">
        <h2>${item.strDrink}</h2>
        <h4>${item.strCategory}</h4>
        <p>${item.strAlcoholic}</p>
        <button onclick() class="details">Details</button>
        
        </div> `
       
       main.innerHTML += el
}
       
search.addEventListener('keyup', function (e){
    const searchString = e.target.value
    const filteredItems =  cocktails.filter(item => {
        return (
          item.strDrink.toLowerCase().toUpperCase().includes(searchString)

        );


      });
      console.log(filteredItems)
      renderData(filteredItems)
    })

// function cocktailSection(item) {
//     const el = `
//     <div class = "cocktail-section">
//     <button class="back-to-home">Back to home</button>
//     <h2 class="title-section">${item.strDrink}</h2>
//     <div class="drink">
//       <img src="${item.strDrinkThumb}" alt="">
//     <div class="drink-info">
//       <p><span class="drink-data">Name:</span>${item.strDrink}</p>
//       <p><span class="drink-data">Category:</span>${item.strCategory}</p>
//       <p><span class="drink-data">Info:</span>${item.strAlcoholic}</p>
//       <p><span class="drink-data">Glass:</span>${item.strGlass}</p>
//       <p><span class="drink-data">Instructions:</span>${item.strInstructions}</p>
//       <p><span class="drink-data">Ingredients:</span>${item.strIngredient1} ${item.strIngredient2} ${item.strIngredient3} ${item.strIngredient4}</p>
//     </div>
//     </div> 
//     `
//     main.innerHTML += el

// }



// const deleteComplete = (event) => {
//     const item = event.target;
//     if(item.classList.contains('delete-btn')){
//        const todo = item.parentElement;
//        todo.classList.add('fall')
//        removeLocalTodos(todo) 
//        todo.addEventListener('transitionend', () => {
//             todo.remove()
//        })
//     } else if (item.classList.contains('completed-btn')){
//        const todo = item.parentElement;
//        todo.classList.toggle('completed')
//     }
// }

