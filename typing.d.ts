interface FlightResponse {
    everywhereDestination: EverywhereDestination;
    context: Context;
}

interface EverywhereDestination {
    context: Context;
    features: Features;
    buckets: Bucket[];
    results: Result[];
}

interface Context {
    status: string;
    sessionId: string;
    totalResults: number;
}

interface Features {
    flightsIndicative: string;
    images: string;
    ads: string;
}

interface Bucket {
    id: string;
    label: string;
    category: string;
    resultIds: string[];
    flightQuotes: string;
    hotelQuotes: string;
}

interface Result {
    id: string;
    type: string;
    content: Content;
}

interface Content {
    location: Location;
    flightQuotes: FlightQuotes;
    image: Image;
    flightRoutes: FlightRoutes;
}

interface Location {
    id: string;
    skyCode: string;
    name: string;
    type: string;
}

interface FlightQuotes {
    cheapest: Cheapest;
    direct: Direct;
}

interface Cheapest {
    price: string;
    rawPrice: number;
    direct: boolean;
}

interface Direct {
    price: string;
    rawPrice: number;
    direct: boolean;
}

interface Image {
    url: string;
}

interface FlightRoutes {
    directFlightsAvailable: boolean;
}