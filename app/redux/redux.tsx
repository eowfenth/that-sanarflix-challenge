import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const reducers = combineReducers({});

const rootReducer = persistReducer(
	{
		storage,
		version: 1,
		key: 'storage',
	},
	reducers
);
const store = createStore(rootReducer, undefined);
const persistor = persistStore(store);

export default () => ({
	store,
	persistor,
});
