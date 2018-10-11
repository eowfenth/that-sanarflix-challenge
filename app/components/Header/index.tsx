import React from 'react';
import { Image, View } from 'react-native';

interface IProps {}
const Header = (props: IProps) => (
	<View
		style={{ alignItems: 'center', backgroundColor: 'rgba(12,29,41,0.8)' }}
	>
		<Image
			style={{ height: 56, width: 200 }}
			resizeMode="contain"
			source={{
				uri:
					'https://d9hhrg4mnvzow.cloudfront.net/med.e-sanar.com.br/5fdbbebb-layer-1_03j01d03j01d000000.png',
			}}
		/>
	</View>
);

export default Header;
