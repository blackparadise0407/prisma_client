import { AppState } from 'app/rootReducer';
import store from 'app/store';
import { createSelector } from 'reselect';
import { postListAdapter } from './postListSlice';

const { selectAll, selectEntities } = postListAdapter.getSelectors();

const postListSelector = (state: AppState) => state.postList;

export const selectAllPost = createSelector(postListSelector, selectAll);
