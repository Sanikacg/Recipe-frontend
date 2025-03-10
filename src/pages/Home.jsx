import React from 'react'

const  Home = () => {
  return(
    <div class= "first">
      <input placeholder='search' class="search=input"></input>

      <div class= "row row-cols-1 row-cols-md-2 g-4 m-2">
        <div class="col">
          <div class="card">
            <img src="download.jpg" class="card-img-top"alt="..."/>
            <div class ="card-body">
              <h5 class="card-title">Pasta</h5>
              <p class ="card-text">Red sauce pasta is a delicious pasta dish made with tomatoes, garlic, dried herbs and seasoning.</p>
            </div>
          </div>
        </div>  
        <div class="col">
          <div class="card">
            <img src="brownie.jpg" class="card-img-top"alt="..."/>
            <div class ="card-body">
              <h5 class="card-title">Chewy Brownies</h5>
              <p class ="card-text">BEST Ever Chewy Brownies are just as chewy as boxed brownies but with better chocolate flavor.</p>
            </div>
          </div>
        </div>  
        <div class="col">
          <div class="card">
            <img src="methi.jpg" class="card-img-top"alt="..."/>
            <div class ="card-body">
              <h5 class="card-title">Methi paratha</h5>
              <p class ="card-text">Methi paratha is a shallow fried or roasted Indian flatbread that is made with whole-wheat flour, ...</p>
            </div>
          </div>
        </div>  
        <div class="col">
          <div class="card">
            <img src="mocktail1.jpg" class="card-img-top"alt="..."/>
            <div class ="card-body">
              <h5 class="card-title">Tequila Sunrise Mocktail</h5>
              <p class ="card-text">My Tequila Sunrise Mocktail has all of the flavor and fun of the original vibrantly layered cocktail ...</p>
            </div>
          </div>
        </div>  
        <div class="col">
          <div class="card">
            <img src="chips.jpg" class="card-img-top"alt="..."/>
            <div class ="card-body">
              <h5 class="card-title">Chips</h5>
              <p class ="card-text">potato chips are crunchy and highly addictive snacks prepared with baked potato and a premium mix of spices</p>
            </div>
          </div>
        </div>  



        </div>
      </div>
    
  )
};     
export default Home;