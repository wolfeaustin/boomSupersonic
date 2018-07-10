
Route.delete_all #start fresh with each run of seed file

#Boston Departures
Route.create(departure: 'Boston', arrival: 'Dublin', distance: 0, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Paris', distance: 0, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Madrid', distance: 0, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Tokyo', distance: 0, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Zurich', distance: 0, direction: 'W')
Route.create(departure: 'Boston', arrival: 'Dubai', distance: 0, direction: 'W')

#Dublin Departures
Route.create(departure: 'Dublin', arrival: 'Boston', distance: 0, direction: 'W')

#Paris Departures
Route.create(departure: 'Paris', arrival: 'Boston', distance: 0, direction: 'W')
Route.create(departure: 'Paris', arrival: 'New York', distance: 0, direction: 'W')

#Madrid Departures
Route.create(departure: 'Madrid', arrival: 'Boston', distance: 0, direction: 'W')

#Doha Departures
Route.create(departure: 'Doha', arrival: 'Singapore', distance: 0, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Melbourne', distance: 0, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Chicago', distance: 0, direction: 'W')
Route.create(departure: 'Doha', arrival: 'Kuala Lumpur', distance: 0, direction: 'W')

#Singapore Departures
Route.create(departure: 'Singapore', arrival: 'Doha', distance: 0, direction: 'W')
Route.create(departure: 'Singapore', arrival: 'Hong Kong', distance: 0, direction: 'W')
Route.create(departure: 'Singapore', arrival: 'Beijing', distance: 0, direction: 'W')

#Melbourne Departures
Route.create(departure: 'Melbourne', arrival: 'Doha', distance: 0, direction: 'W')

#Chicago Departures
Route.create(departure: 'Chicago', arrival: 'Doha', distance: 0, direction: 'W')

#Hong Kong Departures
Route.create(departure: 'Hong Kong', arrival: 'Singapore', distance: 0, direction: 'W')
Route.create(departure: 'Hong Kong', arrival: 'Honolulu', distance: 0, direction: 'W')
Route.create(departure: 'Hong Kong', arrival: 'San Francisco', distance: 0, direction: 'W')

#New York Departures
Route.create(departure: 'New York', arrival: 'Paris', distance: 0, direction: 'W')
Route.create(departure: 'New York', arrival: 'London', distance: 0, direction: 'W')

#Honolulu Departures
Route.create(departure: 'Honolulu', arrival: 'Hong Kong', distance: 0, direction: 'W')

#London Departures
Route.create(departure: 'London', arrival: 'New York', distance: 0, direction: 'W')

#Beijing Departures
Route.create(departure: 'Beijing', arrival: 'Singapore', distance: 0, direction: 'W')
Route.create(departure: 'Beijing', arrival: 'Los Angeles', distance: 0, direction: 'W')

#Los Angeles Departures
Route.create(departure: 'Los Angeles', arrival: 'Beijing', distance: 0, direction: 'W')
Route.create(departure: 'Los Angeles', arrival: 'Sydney', distance: 0, direction: 'W')
Route.create(departure: 'Los Angeles', arrival: 'Lima', distance: 0, direction: 'W')

#Kuala Lumpur Departures
Route.create(departure: 'Kuala Lumpur', arrival: 'Doha', distance: 0, direction: 'W')

#Tokyo Departures
Route.create(departure: 'Tokyo', arrival: 'Boston', distance: 0, direction: 'W')

#Zurich Departures
Route.create(departure: 'Zurich', arrival: 'Boston', distance: 0, direction: 'W')
Route.create(departure: 'Zurich', arrival: 'San Francisco', distance: 0, direction: 'W')

#Dubai Departures
Route.create(departure: 'Dubai', arrival: 'Boston', distance: 0, direction: 'W')

#San Francisco Departures
Route.create(departure: 'San Francisco', arrival: 'Hong Kong', distance: 0, direction: 'W')
Route.create(departure: 'San Francisco', arrival: 'Zurich', distance: 0, direction: 'W')

#Sydney Departures
Route.create(departure: 'Sydney', arrival: 'Los Angeles', distance: 0, direction: 'W')

#Lima Departures
Route.create(departure: 'Lima', arrival: 'Los Angeles', distance: 0, direction: 'W')
