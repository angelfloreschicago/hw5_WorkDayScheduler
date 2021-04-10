var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

// Displays last task saved on time blocks
lastRegisteredTasks();
function lastRegisteredTasks() {
savedtask.textContent = localStorage.getItem('task');
savedtask10.textContent = localStorage.getItem('task1');
savedtask11.textContent = localStorage.getItem('task2');
savedtask12.textContent = localStorage.getItem('task3');
savedtask1.textContent = localStorage.getItem('task4');
savedtask2.textContent = localStorage.getItem('task5');
savedtask3.textContent = localStorage.getItem('task6');
savedtask4.textContent = localStorage.getItem('task7');
savedtask5.textContent = localStorage.getItem('task8');
}

//ON click events for 9 different buttons
//9am
$('#btn9').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input9').value;
    localStorage.setItem('task', task);
    var taskId = document.querySelector('#input9').value;
    $('#saveAlert').text('Task saved for 9am');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//10am
$('#btn10').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input10').value;
    localStorage.setItem('task1', task);
    var taskId = document.querySelector('#input10').value;
    $('#saveAlert').text('Task saved for 10am');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//11am
$('#btn11').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input11').value;
    localStorage.setItem('task2', task);
    var taskId = document.querySelector('#input11').value;
    $('#saveAlert').text('Task saved for 11am');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//12pm
$('#btn12').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input12').value;
    localStorage.setItem('task3', task);
    var taskId = document.querySelector('#input12').value;
    $('#saveAlert').text('Task saved for 12pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//1pm
$('#btn1').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input1').value;
    localStorage.setItem('task4', task);
    var taskId = document.querySelector('#input1').value;
    $('#saveAlert').text('Task saved for 1pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//2pm
$('#btn2').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input2').value;
    localStorage.setItem('task5', task);
    var taskId = document.querySelector('#input2').value;
    $('#saveAlert').text('Task saved for 2pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//3pm
$('#btn3').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input3').value;
    localStorage.setItem('task6', task);
    var taskId = document.querySelector('#input3').value;
    $('#saveAlert').text('Task saved for 3pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//4pm
$('#btn4').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input4').value;
    localStorage.setItem('task7', task);
    var taskId = document.querySelector('#input4').value;
    $('#saveAlert').text('Task saved for 4pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});

//5pm
$('#btn5').on('click', function(event) {
    event.preventDefault();
    var task = document.querySelector('#input5').value;
    localStorage.setItem('task8', task);
    var taskId = document.querySelector('#input5').value;
    $('#saveAlert').text('Task saved for 5pm');
    $('input[type="text"]').val('');
    lastRegisteredTasks();
});
//End of on click events
