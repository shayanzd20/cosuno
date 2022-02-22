import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../CheckBox';
import { configure, shallow, mount, simulate } from 'enzyme';
import { render, cleanup, act } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

afterEach(cleanup);

const initialProps = {
	term: "'type anything here !!!'",
};

describe('Check Box', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<CheckBox />);
	});

	it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CheckBox />, div);
	});

	it('check data-testid', () => {
		expect(wrapper.find('div#data-testid')).toBeTruthy();
	});

	const { term } = initialProps;
	it('check place holder', () => {
		expect(wrapper.find(<CheckBox term={term} />)).toBeTruthy();
	});

	// it('matches snapshot', () => {
	// 	const tree = renderer.create(<CheckBox />).toJSON();
	// 	expect(tree).toMatchSnapshot();
	// });
});
