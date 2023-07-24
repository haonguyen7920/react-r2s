export const addOrUpdateRecipe = (id: number, name: string, description: string, image: string) => {
    return {
        type: "ADD_OR_UPDATE",
        payload: {
            id,
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