jsx
import React, { useState } from 'react';
import Table from './Table';

const UserInterface = () => {
 const [filter, setFilter] = useState('');
 const [search, setSearch] = useState('');

 return (
    <div className="user-interface">
      <div className="user-interface-controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter by</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <Table filter={filter} search={search} />
    </div>
 );
};

export default UserInterface;