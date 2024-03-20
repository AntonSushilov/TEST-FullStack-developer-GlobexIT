import { combineReducers } from 'redux';
import { peopleInfoReducer } from 'services/PeopleInfo/reducer';

export const rootReducer = combineReducers({
  peopleInfoReducer,
});