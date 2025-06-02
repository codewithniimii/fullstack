function anotherAddEventListener(typeOfEvent, callback) {
    // detect event code 

    var eventThatHappened = {
        eventType:"keypress",
        key: "p",
        durationOfKeypress: 2
    }

if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
}
}

anotherAddEventListener("keypress", function(event) {
    console.log(event);

});