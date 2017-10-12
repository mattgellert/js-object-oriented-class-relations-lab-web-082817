let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {return this.id === trip.driverId})
  }

  passengers(){
    return this.trips().map(trip => {return trip.passengerId}).map(id => {return store.passengers.find(passenger => {return passenger.id === id})})
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {return this.id === trip.passengerId})
  }

  drivers(){
    return this.trips().map(trip => {return trip.driverId}).map(id => {return store.drivers.find(driver => {return driver.id === id})})
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId})
  }

  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId})
  }
}
