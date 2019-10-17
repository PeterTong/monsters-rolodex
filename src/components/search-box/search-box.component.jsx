import React from 'react';

import './search-box.styles.css';

// this is functional components unlike class components, it don't have access to this.state
// because it don't have access to constructor, and also it don't access to lifecycle methods.
// it just a component that gets some props and returns some HTML
export const SearchBox = ({ placeholder, handleChange}) => (

	<input
		className='search' 
		type='search' 
		placeholder={placeholder} 
		onChange={handleChange}>
	</input>
)