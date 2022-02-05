function fridayTheThirteenths(start, end = start) {
    let arrResult = [];
    for (let years = start; years <= end; years++){
        for (let month = 0; month < 12; month++){
            let weekDay = new Date(years, month, 13).getDay()
            if (weekDay === 5) arrResult.push(`${month+1}/13/${years}`);
        }
    }
    return arrResult.join(" ");
}