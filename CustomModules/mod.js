function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,                        //The codule.exports object contains a func. called average, name Aman and repo...
    name:"Aman",
    repo:"WebDev for beginners"
};

module.exports.name="Gaur"               //module.exports is an object and we have given value to its key "name"