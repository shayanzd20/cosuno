import React from 'react';
import PropTypes from 'prop-types'

import './CompaniesList.css';
import Company from './Company';

const CompaniesList = ({ corps }) => (
	<section className="companies">
		{corps.map((corp) => (
			<Company key={corp._id} corp={corp} />
		))}
	</section>
);

CompaniesList.propTypes = {
	corps: PropTypes.array.isRequired
  }

export default CompaniesList;
