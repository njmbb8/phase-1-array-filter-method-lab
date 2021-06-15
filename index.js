function findMatching(drivers, name) {
    let matches = drivers.filter(function(driver){
        if(driver.toLowerCase() === name.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    })

    return matches;
}

function fuzzyMatch(drivers, name) {
    let matches = drivers.filter(function(driver){
        if(driver.toLowerCase()[0] === name.toLowerCase()[0]){
            return true;
        }
        else{
            return false;
        }
    })
    return matches;
}

function matchName(drivers, name){
    let matches = drivers.filter(function(driver){
        if(driver.name.toLowerCase() === name.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    })

    return matches;
}