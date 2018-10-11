import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';

interface IProps {}

const VideoPlayer = (props: IProps) => {
	return (
		<Image
			source={{
				uri:
					'https://d9hhrg4mnvzow.cloudfront.net/med.e-sanar.com.br/551ec283-player.png',
			}}
			style={styles.image}
		/>
	);
};

export default VideoPlayer;

const styles = {
	image: {
		height: 200,
		flex: 1,
	},
};
