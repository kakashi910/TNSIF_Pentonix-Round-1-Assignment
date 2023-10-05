import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Table = ({ filter, search }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;