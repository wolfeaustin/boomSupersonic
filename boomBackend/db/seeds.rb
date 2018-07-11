
Route.delete_all #start fresh with each run of seed file

#Boston Departures
Route.create(departure: 'Boston', arrival: 'Dublin', distance: 2980, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Paris', distance: 3440, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Madrid', distance: 3400, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Tokyo', distance: 6680, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Zurich', distance: 3730, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Dubai', distance: 6650, direction: 'W')

#Dublin Departures
Route.create(departure: 'Dublin', arrival: 'Boston', distance: 2980, direction: 'W')

#Paris Departures
Route.create(departure: 'Paris', arrival: 'Boston', distance: 3440, direction: 'W')
Route.create(departure: 'Paris', arrival: 'New York', distance: 3620, direction: 'W')

#Madrid Departures
Route.create(departure: 'Madrid', arrival: 'Boston', distance: 3400, direction: 'W')

#Doha Departures
Route.create(departure: 'Doha', arrival: 'Singapore', distance: 3860, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Melbourne', distance: 7430, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Chicago', distance: 7110, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Kuala Lumpur', distance: 3640, direction: 'W')

#Singapore Departures
Route.create(departure: 'Singapore', arrival: 'Doha', distance: 3860, direction: 'W')
Route.create(departure: 'Singapore', arrival: 'Hong Kong', distance: 1600, direction: 'W')
Route.create(departure: 'Singapore', arrival: 'Beijing', distance: 2770, direction: 'W')

#Melbourne Departures
Route.create(departure: 'Melbourne', arrival: 'Doha', distance: 7430, direction: 'W')

#Chicago Departures
Route.create(departure: 'Chicago', arrival: 'Doha', distance: 7110, direction: 'W')

#Hong Kong Departures
Route.create(departure: 'Hong Kong', arrival: 'Singapore', distance: 1600, direction: 'W')
Route.create(departure: 'Hong Kong', arrival: 'Honolulu', distance: 5540, direction: 'W')
Route.create(departure: 'Hong Kong', arrival: 'San Francisco', distance: 6900, direction: 'W')

#New York Departures
Route.create(departure: 'New York', arrival: 'Paris', distance: 3620, direction: 'W')
Route.create(departure: 'New York', arrival: 'London', distance: 3440, direction: 'W')

#Honolulu Departures
Route.create(departure: 'Honolulu', arrival: 'Hong Kong', distance: 5540, direction: 'W')

#London Departures
Route.create(departure: 'London', arrival: 'New York', distance: 3440, direction: 'W')

#Beijing Departures
Route.create(departure: 'Beijing', arrival: 'Singapore', distance: 2770, direction: 'W')
Route.create(departure: 'Beijing', arrival: 'Los Angeles', distance: 6250, direction: 'W')

#Los Angeles Departures
Route.create(departure: 'Los Angeles', arrival: 'Beijing', distance: 6250, direction: 'W')
Route.create(departure: 'Los Angeles', arrival: 'Sydney', distance: 7490, direction: 'W')
Route.create(departure: 'Los Angeles', arrival: 'Lima', distance: 4170, direction: 'W')

#Kuala Lumpur Departures
Route.create(departure: 'Kuala Lumpur', arrival: 'Doha', distance: 3640, direction: 'W')

#Tokyo Departures
Route.create(departure: 'Tokyo', arrival: 'Boston', distance: 6680, direction: 'W')

#Zurich Departures
Route.create(departure: 'Zurich', arrival: 'Boston', distance: 3730, direction: 'W')
Route.create(departure: 'Zurich', arrival: 'San Francisco', distance: 5820, direction: 'W')

#Dubai Departures
Route.create(departure: 'Dubai', arrival: 'Boston', distance: 6650, direction: 'W')

#San Francisco Departures
Route.create(departure: 'San Francisco', arrival: 'Hong Kong', distance: 6900, direction: 'W')
Route.create(departure: 'San Francisco', arrival: 'Zurich', distance: 5820, direction: 'W')

#Sydney Departures
Route.create(departure: 'Sydney', arrival: 'Los Angeles', distance: 7490, direction: 'W')

#Lima Departures
Route.create(departure: 'Lima', arrival: 'Los Angeles', distance: 4170, direction: 'W')
