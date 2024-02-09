let mode = 'light';

function appendToDisplay(value) {
  $('#display').val($('#display').val() + value);
}

function clearDisplay() {
  $('#display').val('');
}

function calculate() {
  try {
    $('#display').val(eval($('#display').val()));
  } catch (error) {
    $('#display').val('Error');
  }
}

function switchMode() {
  if (mode === 'light') {
    mode = 'dark';
    $('body').css('background-color', '#333');
    $('.calculator-container').css('background-color', '#444');
    $('button, input').css('background-color', '#555').css('color', '#fff');
  } else {
    mode = 'light';
    $('body').css('background-color', '#f5f5f5');
    $('.calculator-container').css('background-color', '#fff');
    $('button, input').css('background-color', '').css('color', '');
  }
}

function clearLast() {
    let currentValue = $('#display').val();
    $('#display').val(currentValue.slice(0, -1));
  }
  