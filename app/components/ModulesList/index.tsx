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
				<List style={{ marginTop: 15 }}>
					<ListItem
						noIndent
						onPress={() => onPress(index.toString())}
					>
						<Body>
							<Text>{item.nome}</Text>
							<Text note numberOfLines={1}>
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
								<Icon name="arrow-forward" />
							</Button>
						</Right>
					</ListItem>
				</List>
			)}
		/>
	);
};

export default ModulesList;
