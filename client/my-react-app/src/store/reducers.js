import { combineReducers } from 'redux';
import { organizationReducer } from '../reducers/organizationReducer';

const rootReducer = combineReducers({
  organizations: organizationReducer,
});

export default rootReducer;
