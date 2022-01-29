function findOutlier(integers){

    let arrOdd = integers.filter(value => (value % 2 !== 0));
    let arrEven = integers.filter(value => (value % 2 === 0));

    return (arrOdd.length > arrEven.length) ? arrEven[0] : arrOdd[0];

}