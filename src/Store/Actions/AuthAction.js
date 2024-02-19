export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_RECIPE_DATA = 'SET_RECIPE_DATA'
export const SET_NEVIGATE = 'SET_NEVIGATE'
export const SET_STEP= 'SET_STEP'
export const SET_FAVID= 'SET_FAVID'
export const SET_CATEGORY= 'SET_CATEGORY'
export const SET_PAGINATION= 'SET_PAGINATION'
export const SET_SINGLE_RECIPE_DATA= 'SET_SINGLE_RECIPE_DATA'
export const SET_RESPONSE= 'SET_RESPONSE'







export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        value: data
    }
}

export const setCategories = (data) => {
    return {
        type: SET_CATEGORY,
        value: data
    }
}

export const setSingleRecipe = (data) => {
    return {
        type: SET_SINGLE_RECIPE_DATA,
        value: data
    }
}
export const setRecipeData = (data) => {
    return {
        type: SET_RECIPE_DATA,
        value: data
    }
}

export const setStepNo = (data) => {
    return {
        type: SET_STEP,
        value: data
    }
}

export const setFavID = (data) => {
    return {
        type: SET_FAVID,
        value: data
    }
}
export const setNavigationProp = (data) => {
    return {
        type: SET_NEVIGATE,
        value: data
    }
}

export const setPagination = (data) => {
    return {
        type: SET_PAGINATION,
        value: data
    }
}
export const setResponse = (data) => {
    return {
        type: SET_RESPONSE,
        value: data
    }
}