
let production = false


const urlBase = production ? 'https://sore-gray-hare-hat.cyclic.app/api/' : 'http://192.168.0.115:3001/api/';
// const urlBase = production ? 'https://sore-gray-hare-hat.cyclic.app/api/' : 'http://10.0.2.2:3001/api';

console.log("urlBase", urlBase)


// User
export const createuser = urlBase + 'user/register'
export const loginuser = urlBase + 'user/login'



// Category
export const getCategory = urlBase + 'category/getCategory'

// Recipe
export const getRecipe = urlBase + 'recipe/getRecipe'

//Favrouite
export const addFavrouite = urlBase + 'favrouite/addFavrouite'
export const getFavrouite = urlBase + 'favrouite/getFavrouite'
export const deleteFavrouite = urlBase + 'favrouite/deleteFavrouite'




