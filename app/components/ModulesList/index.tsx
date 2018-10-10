import React from 'react';
import { FlatList, Image } from 'react-native';
import {
	Button,
	List,
	Icon,
	ListItem,
	Text,
	Body,
	Right,
	Left,
} from 'native-base';

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
	onPress: () => void;
}

const keyExtractor = (item: Module) => item.id.toString();

const ModulesList = (props: IProps) => {
	const { onPress } = props;
	return (
		<FlatList
			data={props.data}
			keyExtractor={keyExtractor}
			renderItem={({ item }) => (
				<List style={{ marginTop: 15 }}>
					<ListItem noIndent onPress={onPress}>
						<Body>
							<Text>{item.nome}</Text>
							<Text note numberOfLines={1}>
								{item.conteudos.length > 1
									? `${item.conteudos.length} aulas`
									: `${item.conteudos.length} aula`}
							</Text>
						</Body>
						<Right>
							<Button transparent icon onPress={onPress}>
								<Icon name="arrow-forward" />
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
		height: 80,
		width: 120,
	},
};

export default ModulesList;
