
import { SET_USER_DATA, SET_RECIPE_DATA, SET_NEVIGATE, SET_STEP, SET_FAVID, SET_CATEGORY, SET_PAGINATION, SET_SINGLE_RECIPE_DATA, SET_RESPONSE } from '../Actions/AuthAction'

const initialState = {
    doc: null,
    pagination: { page: 1, limit: 10, search: {} },
    categories: null,
    recipeDoc: null,
    singleRecipe: null,
    step: null,
    favId: null,
    navigationProp: null,
    response :null,
    timestamp: Date.now()
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_RECIPE_DATA:
            return ({ ...state, recipeDoc: action.value, timestamp: Date.now() })
        case SET_NEVIGATE:
            return ({ ...state, navigationProp: action.value, timestamp: Date.now() })
        case SET_STEP:
            return ({ ...state, step: action.value, timestamp: Date.now() })
        case SET_FAVID:
            return ({ ...state, favId: action.value, timestamp: Date.now() })
        case SET_CATEGORY:
            return ({ ...state, categories: action.value, timestamp: Date.now() })
        case SET_PAGINATION:
            return ({ ...state, pagination: action.value, timestamp: Date.now() })
        case SET_SINGLE_RECIPE_DATA:
            return ({ ...state, singleRecipe: action.value, timestamp: Date.now() })
        case SET_RESPONSE:
            return ({ ...state, response: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default AuthReducer;