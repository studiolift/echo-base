document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.field--range-counter').forEach(field => {
    const input = field.querySelector('.form-range');
    const valueSpan = field.querySelector('.value');

    // Initialize the span with the input's initial value
    valueSpan.textContent = input.value;

    // Add event listener to update the span when the input value changes
    input.addEventListener('input', () => {
        valueSpan.textContent = input.value;
    });
  });

}, false);