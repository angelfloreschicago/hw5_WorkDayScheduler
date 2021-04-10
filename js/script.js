// var taskId = document.querySelector('#input9');
///var savePrompt = $('#saveAlert');

var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));


$('#btn9').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input9').value;
    localStorage.setItem('task', task);
    var taskId = document.querySelector('#input9').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn10').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input10').value;
    localStorage.setItem('task1', task);
    var taskId = document.querySelector('#input10').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn11').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input11').value;
    localStorage.setItem('task2', task);
    var taskId = document.querySelector('#input11').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn12').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input12').value;
    localStorage.setItem('task3', task);
    var taskId = document.querySelector('#input12').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn1').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input1').value;
    localStorage.setItem('task4', task);
    var taskId = document.querySelector('#input1').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn2').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input2').value;
    localStorage.setItem('task5', task);
    var taskId = document.querySelector('#input2').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn3').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input3').value;
    localStorage.setItem('task6', task);
    var taskId = document.querySelector('#input3').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn4').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input4').value;
    localStorage.setItem('task7', task);
    var taskId = document.querySelector('#input4').value;
    $('#saveAlert').text('Appointment added to local storage');
});

$('#btn4').on('click', function(event) {
    // event.preventDefault();
    var task = document.querySelector('#input5').value;
    localStorage.setItem('task8', task);
    var taskId = document.querySelector('#input5').value;
    $('#saveAlert').text('Appointment added to local storage');
});
