import {
  MENU_LOADED,
  PAGE1_LOADED,
  PAGE2_LOADED
} from "../constants/constants"

const initialState = {
  page1: {
    title: "",
    reviews: []
  },
  page2: {
    title: "",
    description: ""
  },
  menu: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADED: {
      console.log("menu", action.payload)
      return Object.assign({}, state, {
        menu: action.payload.menu.items
      })
    }
    case PAGE1_LOADED: {
      console.log("page1", action.payload)
      return Object.assign({}, state, {
        page1: {
          title: action.payload.slider.title,
          reviews: action.payload.slider.reviews
        }
      })
    }
    case PAGE2_LOADED: {
      console.log("page2", action.payload)
      return Object.assign({}, state, {
        page2: {
          title: action.payload.calculator.title,
          description: action.payload.calculator.description
        }
      })
    }
    default:
      return state
  }
}

export default rootReducer