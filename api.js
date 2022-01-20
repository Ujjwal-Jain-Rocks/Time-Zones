async function getData(url ) {
    const response = await fetch(url);
        
       
    
    return response.json();
}

getData("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
.then(data => {
    ind.innerHTML = data.datetime;
});


getData("https://worldtimeapi.org/api/timezone/Europe/Amsterdam")
.then(data => {
    europeTime.innerHTML = data.datetime;

    
});
getData("https://worldtimeapi.org/api/timezone/Asia/Yangon")
.then(data => {
    Yangontime.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/Europe/Helsinki")
.then(data => {
    Helsinki.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/Asia/Dubai")
.then(data => {
    dubai.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
.then(data => {
    tokyo.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/America/Havana")
.then(data => {
    havana.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/America/New_York")
.then(data => {
    ny.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/Australia/Sydney")
.then(data => {
    Sy.innerHTML = data.datetime;
    
    
});
getData("https://worldtimeapi.org/api/timezone/Asia/Baghdad")
.then(data => {
    bg.innerHTML = data.datetime;
    
    
});
