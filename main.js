/*
fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(result){
    return result.json();
}).then(function(jsonData){
    console.log(jsonData);
    console.log(`USD to RUR ${jsonData.Valute.USD.Value}`)
}).catch(function(error) {
    console.log(error);
});
*/
/*
function getCurrentValue(code, name) {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(result){
    return result.json();
}).then(function(jsonData){
    const today = jsonData.Valute[code].Value;
    const yesterday = jsonData.Valute[code].Previous;
    console.log(`${name} to RUR today ${today}`);
    console.log(`${name} to RUR yesterday ${yesterday}`);

    if (today > yesterday) {
        console.log("rate increased");
    } else if (today < yesterday) {
        console.log("rate decreased");
    } else {
        console.log("same rate");
    }

}).catch(function(error) {
    console.log(error);
});
}
getCurrentValue("USD", "dollar");
getCurrentValue("EUR", "euro");
*/

async function getCurrentValue(code, name) {
    try {
        const result = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        const jsonData = await result.json();
    
        const today = jsonData.Valute[code].Value;
        const yesterday = jsonData.Valute[code].Previous;
        console.log(`${name} to RUR today ${today}`);
        console.log(`${name} to RUR yesterday ${yesterday}`);
    
        if (today > yesterday) {
            console.log("rate increased");
        } else if (today < yesterday) {
            console.log("rate decreased");
        } else {
            console.log("same rate");
        }
    } catch (error){
        console.log(error);
    }
}
getCurrentValue("USD", "dollar");
getCurrentValue("EUR", "euro");