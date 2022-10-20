const cinema = {
    name: "Mladost-1",
    address: "fake address 1",
    phone: "+359878888999",
    id: 'cin2',
    image: "https://img.freepik.com/premium-photo/cinema-theater-screen-front-seat-rows-movie-theater-showing-white-screen-projected-from-cinematograph_31965-11323.jpg",
    workHours: "12:00 - 22:00",
    halls: {

        1: {
            "12:30": {
                availableSeats: 100,
                takenSeats: 34,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {},
                "15:00": {
                    availableSeats: 100,
                    takenSeats: 21,
                    freeSeats: this.availableSeats - this.takenSeats,
                    movie: {}
                },
                "17:30": {
                    availableSeats: 100,
                    takenSeats: 9,
                    freeSeats: this.availableSeats - this.takenSeats,
                    movie: {}
                },
                "19:30": {
                    availableSeats: 100,
                    takenSeats: 43,
                    freeSeats: this.availableSeats - this.takenSeats,
                    movie: {}
                },
                "21:00": {
                    availableSeats: 100,
                    takenSeats: 71,
                    freeSeats: this.availableSeats - this.takenSeats,
                    movie: {}
                }
            }

        },
        2: {
            "12:30": {
                availableSeats: 100,
                takenSeats: 21,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "15:00": {
                availableSeats: 100,
                takenSeats: 41,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "17:30": {
                availableSeats: 100,
                takenSeats: 27,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "19:30": {
                availableSeats: 100,
                takenSeats: 61,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "21:00": {
                availableSeats: 100,
                takenSeats: 61,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            }
        },
        3: {
            "12:30": {
                availableSeats: 100,
                takenSeats: 31,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "15:00": {
                availableSeats: 100,
                takenSeats: 20,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "17:30": {
                availableSeats: 100,
                takenSeats: 88,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "19:30": {
                availableSeats: 100,
                takenSeats: 100,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "21:00": {
                availableSeats: 100,
                takenSeats: 67,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            }
        },
        4: {
            "12:30": {
                availableSeats: 100,
                takenSeats: 31,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "15:00": {
                availableSeats: 100,
                takenSeats: 20,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "17:30": {
                availableSeats: 100,
                takenSeats: 88,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "19:30": {
                availableSeats: 100,
                takenSeats: 100,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            },
            "21:00": {
                availableSeats: 100,
                takenSeats: 67,
                freeSeats: this.availableSeats - this.takenSeats,
                movie: {}
            }
        }

    }
}