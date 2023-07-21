// variables/seconds.js

function seconds() {
    const currentHour = new Date().getSeconds();
    return currentHour;
}

module.exports = seconds;