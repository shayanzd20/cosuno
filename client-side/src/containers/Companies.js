import React, { useState, useEffect } from 'react';

import Navbar from '../components/NavBar/NavBar';
import SearchBar from '../components/SearchBar/SearchBar';
import CheckBox from '../components/CheckBox/CheckBox';

import CompaniesList from '../components/Companies/CompaniesList';
import './Companies.css';

import { getCompanies } from '../utiles/request';
import { applyFilters } from '../utiles/filters';

function Companies() {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState();
  const [companies, setCompanies] = useState([]);
  const [resultsFound, setResultsFound] = useState(false);

  useEffect(() => {
    async function fetchCompanies() {
      let companiesData = await getCompanies();
      setCompanies(companiesData.data);
      let updatedList = applyFilters(companiesData.data, searchTerm, filters);
      setList(updatedList);
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    }
    fetchCompanies().catch(console.error);
  }, []);

  useEffect(() => {
    let updatedList = applyFilters(companies, searchTerm, filters);
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }, [filters, searchTerm]);

  return (
    <>
      <Navbar />
      <div className="Layout-main">
        <div className="container">
          <SearchBar searchKeyword={setSearchTerm} term={searchTerm} />
          <CheckBox handleFilters={(filters) => setFilters(filters)} />
          <CompaniesList corps={resultsFound ? list : []} />
        </div>
      </div>
    </>
  );
}

export default Companies;
