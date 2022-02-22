import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './CheckBox.css';

const specialities = [
	{ _id: 0, name: 'excavation' },
	{ _id: 1, name: 'plumbing' },
	{ _id: 2, name: 'electrical' },
];

/**
 *
 * @description Checkbox Component
 * @returns {component}
 */
const CheckBox = (props) => {
	const [Checked, setChecked] = useState([]);

	const handleToggle = (value) => {
		const currentIndex = Checked.indexOf(value);
		const newChecked = [...Checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		props.handleFilters(newChecked);
	};

	const renderCheckboxLists = () =>
		specialities &&
		specialities.map((value, index) => (
			<React.Fragment key={index}>
				<Checkbox onChange={() => handleToggle(value.name)} type="checkbox" checked={Checked.indexOf(value.name) === -1 ? false : true} />
				&nbsp;&nbsp;
				<span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</React.Fragment>
		));
	return (
		<div data-testid="check-box" className="ui checkbox pt-3">
			{renderCheckboxLists()}
		</div>
	);
};

export default React.memo(CheckBox);
