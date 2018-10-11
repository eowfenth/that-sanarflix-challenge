import React from 'react';
import { FlatList, Image } from 'react-native';
import {
	Button,
	List,
	ListItem,
	Body,
	Right,
	Left,
	Icon,
	Text,
} from 'native-base';

interface Data {
	id: number;
	titulo: string;
	tipio: 'video';
}

interface IProps {
	data: Data[];
	module: string;
	selected: any;
	onPress: (id: string, index: number) => void;
}

class ContentItems extends React.Component<IProps> {
	state = {
		selected: {},
	};

	keyExtractor = (item: Data) => item.id.toString();

	handlePlayButton = (moduleId: string, index: number) => {
		this.props.onPress(moduleId, index);
	};

	render() {
		const { module: moduleId, data, selected } = this.props;
		console.log('props 12', this.props);
		const flatListData = data.map((x, index) => ({
			...x,
			selected: selected[`${moduleId}_${index}`],
		}));
		return (
			<FlatList
				data={flatListData}
				keyExtractor={this.keyExtractor}
				renderItem={({ item, index }) => (
					console.log('oi', selected[`${moduleId}_${index}`]),
					(
						<List style={{}}>
							<ListItem
								noIndent
								onPress={() =>
									this.handlePlayButton(moduleId, index)
								}
							>
								<Body style={{ flexDirection: 'row' }}>
									<Text>{item.titulo}</Text>
								</Body>
								<Right>
									<Button
										transparent
										icon
										onPress={() =>
											this.handlePlayButton(
												moduleId,
												index
											)
										}
									>
										<Icon
											style={
												item.selected
													? styles.grayIcon
													: styles.blueIcon
											}
											name="play"
										/>
									</Button>
								</Right>
							</ListItem>
						</List>
					)
				)}
			/>
		);
	}
}

const styles = {
	image: {
		height: 200,
		flex: 1,
	},
	blueIcon: {
		color: 'blue',
	},
	grayIcon: {
		color: '#CCCCCC',
	},
};

export default ContentItems;
