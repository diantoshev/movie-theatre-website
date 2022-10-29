import moment from "moment/moment";

export function programDates() {
    const programDates = []
    const dateStart = moment();
    const dateEnd = moment().add(7, 'days');
    while (dateEnd.diff(dateStart, 'days') >= 0) {
        programDates.push(dateStart.format('DD/MM-(ddd)'))
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
export function getRandomSubSetFromArr(number, arr) {
    const result = [];

    do {
        // debugger;
        const currentItem = arr[Math.floor(Math.random() * arr.length)];

        if (!result.includes(currentItem)) {
            result.push(currentItem);
        }

    } while (result.length < number);

    return result;

}