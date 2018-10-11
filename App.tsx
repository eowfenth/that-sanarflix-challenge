import React from 'react';
import { View } from 'react-native';
import Navigator from './app/navigator';
import { Provider } from 'react-redux';

import createStore from './app/redux/redux';
import PersistGate from './app/redux/persist';
import Immutable from 'seamless-immutable';

const { store, persistor } = createStore();
export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Navigator />
				</PersistGate>
			</Provider>
		);
	}
}
