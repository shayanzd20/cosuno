import React, { useRef } from 'react';

import './SearchBar.css';

/**
 *
 * @description Search Bar Component
 * @param {string} term - term to search
 * @param {function} searchKeyword - function to filter Company
 * @returns {component}
 */
const SearchBar = ({ term, searchKeyword }) => {
	const inputEl = useRef('');

	const getSearchTerm = () => {
		searchKeyword(inputEl.current.value);
	};

	return (
		<div data-testid="search" className="ui search">
			<div className="ui icon input">
				<input id="data-inputid" ref={inputEl} type="text" placeholder="Search Companies" className="prompt" value={term} onChange={getSearchTerm}></input>
				<i className="search icon-search"></i>
			</div>
		</div>
	);
};

export default React.memo(SearchBar);
