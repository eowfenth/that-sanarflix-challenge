import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
	seamlessImmutableReconciler,
	seamlessImmutableTransformCreator,
} from './reconciler';

import { reducer } from './main';

export const reducers = combineReducers({
	main: reducer,
});

const transformerConfig = {
	whitelistPerReducer: {
		reducerA: ['keyA', 'keyB'],
	},
	blacklistPerReducer: {
		reducerB: ['keyC', 'keyD'],
	},
};

const rootReducer = persistReducer(
	{
		storage,
		version: 1,
		key: 'storage',
		stateReconciler: seamlessImmutableReconciler,
		transforms: [seamlessImmutableTransformCreator(transformerConfig)],
	},
	reducers
);
const store = createStore(rootReducer, undefined);
const persistor = persistStore(store);

export default () => ({
	store,
	persistor,
});
