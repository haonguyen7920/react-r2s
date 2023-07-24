export const addRecipe = (name: string, description: string, image: string) => {
    return {
        type: "ADD",
        payload: {
            name,
            description,
            image
        }
    }
}