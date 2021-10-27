import logo from './logo.png';
import RecipeLogo from './RecipeLogo.png';
import { useState } from 'react'; // importing useState from react
import Axios from "axios"; //using axios api
import styled from 'styled-components'; // using material styled-components
import { Header, AppNameConponent, AppIcon,SearchComponent,Searchbtn, SearchInput } from './components/headerComponents'; //importing all variables/constants from headerComponents
import { RecipeListContainer, RecipeContainer, RecipeName, CoverImg, IngredientsText,  SeeMoreText } from './components/recipeComponents'; // importing all variables/constants from recipeComponents
import './App.css'; 

const APP_ID = "60df7bee"; //edamam.com API app id
const APP_KEY = "738b2cece0020150f7313aabc9033431"; //edamam.com API app key
// declaring the variable and styling elements using styled-components
const Container = styled.div`
  isplay: flex;
flex-direction: column;
`;

const CoverText = styled.div`
  font-size: 35px;
  color: black;

`;
const DevInfo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
align-content: center;
flex-wrap: wrap;
`;
const DeveloperImg = styled.img`
  border-radius: 50%;
  
  height: 50px;
  width: 50px;
`;

const RecipeComponent = (props) =>{ 
  const { recipeObj } = props;  // creating object of data
  return(
    <>
    <RecipeContainer>
      <CoverImg src ={recipeObj.image} /> 
      <RecipeName>{recipeObj.label}</RecipeName>
      
      <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </>
  );
};// display all data in perticular div and responsive div
const App = () => {
  const [timeoutId, updateTimeoutId] = useState(); // setting timeout so data fetch will be stoped after user stopped typing
  const [recipeList, updateRecipeList] = useState([]); // setting upadte list data so once user stopped typing it will display the fetched data

const fetchRecipe = async(searchString)=>{
  const response = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`); // using Axios passing url with string, appid and app key
  console.log(response); // recording data
  updateRecipeList(response.data.hits); // updating data
};

  const onTextChange =(event) => {
    clearTimeout(timeoutId);// setting timeout 
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500 );
    updateTimeoutId(timeout);
  };
  return(
    <Container>
      <Header><AppNameConponent>
        <AppIcon src={RecipeLogo}/>Find Receipe In Pratik House </AppNameConponent> 
        </Header>
        <SearchComponent>
      <Searchbtn><img src="https://img.icons8.com/color/58/000000/search-more.png" alt="Search-icon"/></Searchbtn>
      <SearchInput placeholder="Searh For Recipe Here" onChange={onTextChange} />
        </SearchComponent>
      
        <RecipeListContainer>
          
        {recipeList.length ?( 
            // getting length and mapping data using the object recipeObj
              recipeList.map((recipeObj) => (
              <RecipeComponent recipeObj={recipeObj.recipe} />
              ))
         ):(
         <CoverText>Search For Your Food Now....</CoverText>
         )}
          </RecipeListContainer>  
          <DevInfo>
            <DeveloperImg src={logo}/>
            <h1>Developer</h1> 
             <h1>Pr@tik More</h1> Please visit<a href="https://www.pratikmore.info"> Pr@tikMore.info</a> for more information/projects
          </DevInfo>
      </Container>
      
  )}

export default App;
