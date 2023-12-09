import React from "react";
import styles from "./filterDropdown.module.css";

const FilterDropdown = ({ value, onChange, options }) => (
	<div className={styles.filterDropdown}>
		<label className={styles.filterDropdown__label}>
			Filter by date:
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={styles.filterDropdown__select}
			>
				{options.map((option) => (
					<option className={styles.filterDropdown__option} key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</label>
	</div>
);

export default FilterDropdown;
