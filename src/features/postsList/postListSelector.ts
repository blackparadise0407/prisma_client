import { AppState } from 'app/rootReducer';
import { createSelector } from 'reselect';
import { postListAdapter } from './postListSlice';

const { selectAll, selectEntities: selectEntitiesAdapter } =
    postListAdapter.getSelectors();

const postListSelector = (state: AppState) => state.postList;

export const selectAllPost = createSelector(postListSelector, selectAll);

export const selectCanLoadMore = createSelector(
    postListSelector,
    (state) => state.canLoadMore,
);

export const selectEntities = createSelector(
    postListSelector,
    selectEntitiesAdapter,
);

export const selectEntityById = (id: number) =>
    createSelector(selectEntities, (entities) =>
        !!entities ? entities[id] : null,
    );

export const selectEnitityStatusById = (id: number) =>
    createSelector(selectEntities, (entities) =>
        !!entities ? entities[id].status : null,
    );
export const selectCanLoadMoreById = (id: number) =>
    createSelector(selectEntities, (entities) =>
        !!entities ? entities[id].canLoadMoreComment : null,
    );
