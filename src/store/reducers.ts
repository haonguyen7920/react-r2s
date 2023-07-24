const initialState = {
    recipes: [
        {
            id: 1,
            name: "Hamburger",
            description: "Hamburger",
            image: "https://tinyurl.com/5n829bb7"
        }
    ]
}
export const recipesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD":
            const length = state.recipes.length;
            const id = state.recipes[length-1].id + 1;
            const {name,description,image} = action.payload;
            const newRecipe = {id,name,description,image}
            state.recipes.push(newRecipe)
            return {...state}
    
        default:
          return state
    }
}