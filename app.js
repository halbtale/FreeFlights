const { getFlights } = require('./api');
const { eachDayOfInterval, addDays } = require('date-fns');

async function main() {
	const priceList = [];
	const startDate = new Date(2024, 8, 2);
	const endDate = new Date(2024, 8, 25);
	const tripDuration = 1;

	const dates = eachDayOfInterval({ start: startDate, end: endDate });

	for (let date of dates) {
		const startDate = date;
		const endDate = addDays(startDate, tripDuration);
		const goTripDate = {
			day: startDate.getDate(),
			month: startDate.getMonth(),
			year: startDate.getFullYear()
		};
		const returnTripDate = {
			day: endDate.getDate(),
			month: endDate.getMonth(),
			year: endDate.getFullYear()
		};

		const flightData = await getFlights(goTripDate, returnTripDate);

		for (let result of flightData.everywhereDestination.results) {
			if (result.content.flightQuotes) {
				const price = result.content.flightQuotes.cheapest.rawPrice;
				const locationName = result.content.location.name;

				if (price < 60) {
					priceList.push({ locationName, price, goTripDate, returnTripDate });
				}
			}
		}
	}
	console.log(priceList);
}

main();
