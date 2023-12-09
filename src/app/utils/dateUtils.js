export function isInSelectedPeriod(timestamp, selectedPeriod) {
	const currentDate = new Date();
	const selectedDate = new Date(currentDate);

	switch (selectedPeriod) {
		case "7 days":
			selectedDate.setDate(currentDate.getDate() - 7);
			break;
		case "14 days":
			selectedDate.setDate(currentDate.getDate() - 14);
			break;
		case "21 days":
			selectedDate.setDate(currentDate.getDate() - 21);
			break;
		case "1 month":
			selectedDate.setMonth(currentDate.getMonth() - 1);
			break;
		case "3 months":
			selectedDate.setMonth(currentDate.getMonth() - 3);
			break;
		case "6 months":
			selectedDate.setMonth(currentDate.getMonth() - 6);
			break;
		case "1 year":
			selectedDate.setFullYear(currentDate.getFullYear() - 1);
			break;
		default:
			break;
	}

	return new Date(timestamp) >= selectedDate;
}
