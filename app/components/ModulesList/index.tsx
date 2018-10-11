import React from 'react';
import { FlatList, Image } from 'react-native';
import { Button, List, Icon, ListItem, Text, Body, Right } from 'native-base';

interface Module {
	id: number;
	nome: string;
	conteudos: {
		id: number;
		titulo: string;
		tipio: 'video';
	}[];
}

interface IProps {
	data: Module[];
	onPress: (id: string) => void;
}

const keyExtractor = (item: Module) => item.id.toString();

const ModulesList = (props: IProps) => {
	const { onPress } = props;
	return (
		<FlatList
			data={props.data}
			keyExtractor={keyExtractor}
			renderItem={({ item, index }) => (
				<List style={styles.listItem}>
					<ListItem
						noIndent
						onPress={() => onPress(index.toString())}
					>
						<Body>
							<Text style={styles.title}>{item.nome}</Text>
							<Text note numberOfLines={1} style={styles.text}>
								{item.conteudos.length > 1
									? `${item.conteudos.length} aulas`
									: `${item.conteudos.length} aula`}
							</Text>
						</Body>
						<Right>
							<Button
								transparent
								icon
								onPress={() => onPress(index.toString())}
							>
								<Icon
									name="arrow-forward"
									style={{ color: 'rgba(255,0,0,1)' }}
								/>
							</Button>
						</Right>
					</ListItem>
				</List>
			)}
		/>
	);
};

const styles = {
	image: {
		height: 200,
		flex: 1,
	},
	text: {
		color: '#ffffff',
	},
	title: {
		color: '#ffffff',
	},
	listItem: {	
		backgroundColor: 'rgba(12,29,41,0.5)',
	},
};

export default ModulesList;
