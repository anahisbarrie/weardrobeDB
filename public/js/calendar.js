var API = {
    getExamples: function () {
        return $.ajax({
            url: "api/examples",
            type: "GET"
        });
    }
};
$('document').ready(function () {
    var items = [];
    API.getExamples().then(function (response) {
        for (var i = 0; i < response.length; i++) {
            items.push({ title: response[i].type, start: response[i].lastwore })
            
        }
        var calendarEl = document.getElementById("calendar");
        var calendar = new FullCalendar.Calendar(calendarEl, {
            eventClick: function (info) {
                // alert('Event: ' + info.event.title);
                // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                // alert('View: ' + info.view.type);

                // change the border color just for fun
                // info.el.style.borderColor = 'red';
                $('#exampleModal').modal();
                
                // $("#modalBody").prepend(items);

            },
            plugins: ['interaction', 'dayGrid', 'timeGrid'],
            droppable: true,
            defaultView: 'dayGridMonth',
            defaultDate: '2019-08-07',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: items

            

        });
        
        calendar.render();
        
    });
})