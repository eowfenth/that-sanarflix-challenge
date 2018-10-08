import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from './App';

test('renders correctly', () => {
	const tree = renderer.create(<App />);
	expect(tree).toBeDefined();
});
