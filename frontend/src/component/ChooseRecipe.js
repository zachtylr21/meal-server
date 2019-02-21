import React from 'react'
import StyledButton from './StyledButton'
import '../stylesheets/ChooseRecipe.css'

class ChooseRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: props.location.state.data
    }
  }

  handleRecipeClick = idx => {
    console.log(this.state.recipes[idx])
  }

  render() {
    console.log("Choose Recipe state:", this.state.recipes)
    if (this.state.recipes.length === 0) {
      return (
        <div>
          <h1 className="choose-title">Choose a Recipe</h1>
          Sorry, we couldn't find any recipes that you can make with those ingredients!<br/>
          <StyledButton page="/findrecipe" text="Back to Ingredient List" class="button-back"/>
        </div>
      )
    }

    return (
      <div>
        <h1 className="choose-title">Choose a Recipe</h1>
        <div className="choose-scrollmenu">
        {this.state.recipes.map((recipe, i) =>
          <div key={i} onClick={() => this.handleRecipeClick(i)}>
            {recipe.name}
          </div>
        )}
        </div>
        <StyledButton page="/findrecipe" text="Back to Ingredient List" class="button-back"/>
      </div>
    )
  }
}

export default ChooseRecipe








/* <ul>
<li>{recipe.instructions}</li>
<li>
  Ingredients:
  <ul>
    {recipe.ingredients.map((item, j) => <li key={j}>{item.name}</li>)}
  </ul>
</li>
</ul> */