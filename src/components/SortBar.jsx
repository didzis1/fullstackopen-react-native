import React from 'react';
import { Picker } from '@react-native-picker/picker';

const SortBar = ({ selectedValue, setSelectedValue, sortByValues }) => {
	return (
		<Picker
			selectedValue={selectedValue}
			onValueChange={(itemValue) => setSelectedValue(itemValue)}>
			<Picker.Item
				label='Latest repositories'
				value={sortByValues.latest}
			/>
			<Picker.Item
				label='Highest rated repositories'
				value={sortByValues.highest}
			/>
			<Picker.Item
				label='Lowest rated repositories'
				value={sortByValues.lowest}
			/>
		</Picker>
	);
};

export default SortBar;
