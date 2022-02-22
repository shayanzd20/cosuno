import React from 'react';

import './CompaniesList.css';
import Company from './Company';

const CompaniesList = ({ corps }) => (
	<section className="companies">
		{corps.map((corp) => (
			<Company key={corp._id} corp={corp} />
		))}
	</section>
);

export default CompaniesList;
