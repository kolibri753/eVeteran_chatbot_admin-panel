import React from 'react';
import styles from './table.module.css';

const Table = ({ columns, data }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key} className={styles.table__header}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className={styles.table__row}>
          {columns.map((column) => (
            <td key={column.key} className={styles.table__cell}>
              {row[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
