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
interface Recipe{
    id: number
    name: string
    description: string
    image: string
}
export const recipesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_OR_UPDATE":
            const recipe : Recipe = action.payload;
            if(recipe.id === -1){
                const length = state.recipes.length;
                length === 0 ? recipe.id = 1 : recipe.id = state.recipes[length-1].id + 1;
                state.recipes = [...state.recipes,recipe]
            }
            else{
                const index = state.recipes.findIndex(item=>item.id === recipe.id)
                state.recipes[index] = recipe
            }
            return {...state}
        case "DELETE":
           state.recipes = state.recipes.filter(item => item.id !== action.payload.id)
            return {...state}
        default:
          return state
    }
}