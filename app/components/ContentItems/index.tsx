import React from 'react';
import { FlatList } from 'react-native';
import { Button, List, ListItem, Body, Right, Icon, Text } from 'native-base';

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
		const flatListData = data.map((x, index) => ({
			...x,
			selected: selected[`${moduleId}_${index}`],
		}));
		return (
			<FlatList
				data={flatListData}
				keyExtractor={this.keyExtractor}
				renderItem={({ item, index }) => (
					<List style={styles.listItem}>
						<ListItem
							noIndent
							onPress={() =>
								this.handlePlayButton(moduleId, index)
							}
						>
							<Body style={{ flexDirection: 'row' }}>
								<Text style={styles.title}>{item.titulo}</Text>
							</Body>
							<Right>
								<Button
									transparent
									icon
									onPress={() =>
										this.handlePlayButton(moduleId, index)
									}
								>
									<Icon
										style={
											item.selected
												? styles.white
												: styles.redIcon
										}
										name="play"
									/>
								</Button>
							</Right>
						</ListItem>
					</List>
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
	redIcon: {
		color: 'rgba(255,0,0,7)',
	},
	white: {
		color: '#ffffff',
	},
	text: {
		color: '#ffffff',
	},
	title: {
		color: '#ffffff',
	},
	listItem: {
		backgroundColor: 'rgba(12,29,41,0.7)',
	},
};

export default ContentItems;
