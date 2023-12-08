import React from 'react';
import styles from './table.module.css';

const Table = ({ columns, data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>{column.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
