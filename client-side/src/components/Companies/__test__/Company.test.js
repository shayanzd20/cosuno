import React from 'react';
import ReactDOM from 'react-dom';
import Company from '../Company';
import { configure, mount } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

afterEach(cleanup);

const initialProps = {
	company: 'company',
	phone: '+49 178 3099457',
	specialties: ['plumbing', 'excavation'],
};

describe('Company', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Company corp={initialProps} />);
	});

	it('render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Company corp={initialProps} />, div);
	});

	it('check place holder', () => {
		expect(wrapper.find(<Company prop={initialProps} />)).toBeTruthy();
	});
});
