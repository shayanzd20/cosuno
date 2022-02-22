import React from 'react';

import './CompaniesList.css';

const Company = ({ corp }) => (
	<div className="corp" data-testid="corp-id">
		<div className="title">
			<img src="https://placekitten.com/200/200" alt="Girl in a jacket" className="company-img" />
			<div className="company-name">
				<span>{corp.company}</span>
			</div>
		</div>
		<div className="d-flex item">
			<div className="subitem">
				<i className="fa fa-phone pr-1 pl-4" />
				<span>{corp.phone}</span>
			</div>

			{corp.specialties && corp.specialties.length > 0 && corp.specialties.includes('excavation') && (
				<div className="subitem">
					<i className="fa fa-star pr-1" />
					<span>excavation</span>
				</div>
			)}
			{corp.specialties && corp.specialties.length > 0 && corp.specialties.includes('plumbing') && (
				<div className="subitem">
					<i className="fa fa-star pr-1" />
					<span>plumbing</span>
				</div>
			)}
			{corp.specialties && corp.specialties.length > 0 && corp.specialties.includes('electrical') && (
				<div className="subitem">
					<i className="fa fa-star pr-1" />
					<span>electrical</span>
				</div>
			)}
		</div>
	</div>
);

export default Company;
