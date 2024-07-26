const axios = require('axios');

/**
 * @param {{day: number; month: number}} goTripDate
 * @param {{day: number; month: number}} returnTripDate
 * @returns {Promise<FlightResponse>}
 */
module.exports.getFlights = async (goTripDate, returnTripDate) => {
	const data = {
		cabinClass: 'ECONOMY',
		childAges: [],
		adults: 1,
		legs: [
			{
				legOrigin: {
					'@type': 'entity',
					entityId: '27547373'
				},
				legDestination: {
					'@type': 'everywhere'
				},
				dates: {
					'@type': 'date',
					year: 2024,
					month: goTripDate.month,
					day: goTripDate.day
				}
			},
			{
				legOrigin: {
					'@type': 'everywhere'
				},
				legDestination: {
					'@type': 'entity',
					entityId: '27547373'
				},
				dates: {
					'@type': 'date',
					year: 2024,
					month: returnTripDate.month,
					day: returnTripDate.day
				}
			}
		],
		options: {
			includeOriginNearbyAirports: true
		}
	};

	const config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://www.skyscanner.it/g/radar/api/v2/web-unified-search/',
		headers: {
			accept: 'application/json',
			'accept-language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
			'cache-control': 'no-cache',
			'content-type': 'application/json',
			origin: 'https://www.skyscanner.it',
			pragma: 'no-cache',
			priority: 'u=1, i',
			referer:
				'https://www.skyscanner.it/trasporti/voli-da/veni/240731/240807/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&originentityid=27547373&outboundaltsenabled=false&preferdirects=true&ref=home&rtn=1',
			'sec-ch-ua':
				'"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-model': '""',
			'sec-ch-ua-platform': '"macOS"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'user-agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
			'x-radar-combined-explore-generic-results': '1',
			'x-radar-combined-explore-unfocused-locations-use-real-data': '1',
			'x-skyscanner-channelid': 'banana',
			'x-skyscanner-combined-results-hotel-polling': 'true',
			'x-skyscanner-combined-results-rail': 'true',
			'x-skyscanner-consent-adverts': 'true',
			'x-skyscanner-currency': 'EUR',
			'x-skyscanner-devicedetection-ismobile': 'false',
			'x-skyscanner-devicedetection-istablet': 'false',
			'x-skyscanner-locale': 'it-IT',
			'x-skyscanner-market': 'IT'
		},
		data: JSON.stringify(data)
	};
	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		if (error.response) {
			console.log(error.response.data);
			console.log(error.response.status);
		} else if (error.request) {
			console.log(error.request);
		} else {
			console.log('Error', error.message);
		}
		process.exit(1);
	}
};
