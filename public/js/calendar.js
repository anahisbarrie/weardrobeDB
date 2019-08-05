document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid'],
        defaultView: 'dayGridMonth',
        defaultDate: '2019-08-07',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: '',
                start: ''
            },
            {
                title: '',
                start: '',
                end: ''
            },
            {
                groupId: '',
                title: '',
                start: ''
            },
            {
                groupId: '',
                title: '',
                start: ''
            },
            {
                title: '',
                start: '',
                end: ''
            },
            {
                title: '',
                start: '',
                end: ''
            },
            {
                title: '',
                start: ''
            },
            {
                title: '',
                start: ''
            },
            {
                title: '',
                start: ''
            },
            {
                title: '',
                url: '',
                start: ''
            }
        ]
    });

    calendar.render();
});
