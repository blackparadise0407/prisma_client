import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.scss';

const Search = () => {
    const { t } = useTranslation();
    return (
        <div className="search">
            <input placeholder={t('layout.header.search.placeholder')} />

            <AiOutlineSearch className="icon" />
        </div>
    );
};

export default Search;
