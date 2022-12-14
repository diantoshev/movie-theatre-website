import moment from "moment/moment";

export function programDays() {
    const programDates = []
    const dateStart = moment();
    const dateEnd = moment().add(7, 'days');
    while (dateEnd.diff(dateStart, 'days') > 0) {
        programDates.push(dateStart.format('DD-MM-YYYY'))
        dateStart.add(1, 'days')
    }
    return programDates;
}

// Will get random item from a supplied arr, when screenings are generated:
export function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Will return random hall number when screenings are initially populated:
export function getRandomNumber(number) {
    return (Math.ceil(Math.random() * number))
}

// Function will return an array of occupied seat or random hours for screening,
//  when screenings are randomly generated:
export function getRandomSubSetFromArr(number, length) {
    const result = [];

    do {
        const currentItem = Math.floor(Math.random() * length);

        if (!result.includes(currentItem)) {
            result.push(currentItem);
        }

    } while (result.length < number);

    return result;

}

//  Debouncing function for search:
export function debounce(callback, delay = 0) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}