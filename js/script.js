var savebtn = document.getElementsByName('name')
var task9 = document.querySelector('#input9');
var task10 = document.querySelector('#input10');
var task11 = document.querySelector('#input11');
var task12 = document.querySelector('#input12');
var task1 = document.querySelector('#input1');
var task2 = document.querySelector('#input2');
var task3 = document.querySelector('#input3');
var task4 = document.querySelector('#input4');
var task5 = document.querySelector('#input5');

// var savePrompt = $('#saveAlert');

var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

savebtn.addEventListener('click', function(event) {
    event.preventDefault();

    var task = [{
        am9: task9.value.trim(),
        am10: task10.value.trim(),
        am11: task11.value.trim(),
        am12: task12.value.trim(),
        am1: task1.value.trim(),
        am2: task2.value.trim(),
        am3: task3.value.trim(),
        am4: task4.value.trim(),
        am5: task5.value.trim(),
    }]
    localStorage.setItem('task', JSON.stringify(task));
    $('#saveAlert').text('Appointment added to local storage');
});


// var task = document.querySelector('#input9').value;
//     localStorage.setItem('task', task);
//     var taskId = document.querySelector('#input9').value;