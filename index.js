// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function power(n){
    return (n * n);
}

function createFareMultiplier(n){
    return power;
}

const fareDoubler = function(n){
    return (n*2);
}

const fareTripler = function(n){
    return (n*3);
}

function selectDifferentDrivers(drivers, chosenfunction){
    return chosenfunction(drivers);
}