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
export const deleteRecipe = (id: number) => {
    return {
        type: "DELETE",
        payload: {
            id
        }
    }
}