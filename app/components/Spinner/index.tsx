import React from 'react';
import { Spinner } from 'native-base';
import { StyleSheet, View } from 'react-native';

interface IProps {
	centered?: boolean;
}

const NSpinner = (props: IProps) => (
	<View style={props.centered && styles.centered}>
		<Spinner />
	</View>
);

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default NSpinner;
