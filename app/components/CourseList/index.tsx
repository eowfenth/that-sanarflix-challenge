import React from 'react';
import { FlatList, Image } from 'react-native';
import { Card, CardItem, Icon, Right, Text } from 'native-base';

interface Course {
	id: number;
	nome: string;
	image: string;
	area: 'CICLO BASICO' | 'CICLO CLINICO' | 'CICLO AVANÇADO';
}

interface IProps {
	data: Course[];
	onPress: (id: string) => void;
}

const keyExtractor = (item: Course) => item.id.toString();

const areaFormatter = (area: string) => {
	switch (area) {
		case 'CICLO BASICO':
			return 'Ciclo Básico';
		case 'CICLO CLINICO':
			return 'Ciclo Clínico';
		case 'CICLO AVANÇADO':
			return 'Ciclo Avançado';
		default:
			return null;
	}
};


const CoursesList = (props: IProps) => {
	return (
		<FlatList
			data={props.data}
			keyExtractor={keyExtractor}
			renderItem={({ item }) => (
				<Card>
					<CardItem bordered button header onPress={() => props.onPress(item.id.toString())}>
						<Text>{item.nome}</Text>
					</CardItem>
					<CardItem cardBody button onPress={() => props.onPress(item.id.toString())}>
						<Image
							source={{
								uri:
									'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/324/4671538161298.medium.jpg?1538161298',
							}}
							style={styles.image}
						/>
					</CardItem>
					<CardItem footer button onPress={() => props.onPress(item.id.toString())}>
						<Text>{areaFormatter(item.area)}</Text>
					</CardItem>
				</Card>
			)}
		/>
	);
};

const styles = {
	image: {
		height: 200,
		flex: 1,
	},
};

export default CoursesList;
