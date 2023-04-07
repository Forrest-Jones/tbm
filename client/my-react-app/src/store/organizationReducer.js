const initialState = {
    organizations: [],
  };
  
  export const organizationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ORGANIZATION':
        return {
          ...state,
          organizations: [...state.organizations, action.payload],
        };
      case 'REMOVE_ORGANIZATION':
        return {
          ...state,
          organizations: state.organizations.filter((org) => org.id !== action.payload),
        };
      case 'UPDATE_ORGANIZATION':
        return {
          ...state,
          organizations: state.organizations.map((org) => {
            if (org.id === action.payload.id) {
              return {
                ...org,
                ...action.payload.updates,
              };
            } else {
              return org;
            }
          }),
        };
      default:
        return state;
    }
  };
  