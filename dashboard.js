document.getElementById('conceptualizeForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    let eventPurpose = document.getElementById('eventPurpose').value;
    let guests = document.getElementById('guests').value;
    let date = document.getElementById('date').value;
    let budget = document.getElementById('budget').value;
    let theme = document.getElementById('theme').value;
    let venue = document.getElementById('venue').value;
    let foodBeverage = document.getElementById('foodBeverage').value;
    
   
    let entertainment = [];
    document.querySelectorAll('input[name="entertainment"]:checked').forEach(function(e) {
        entertainment.push(e.value);
    });

    let decorations = document.getElementById('decorations').value;

  
    let formData = `
        <h2>Your Event Details:</h2>
        <p><strong>Event Purpose:</strong> ${eventPurpose}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Preferred Date(s):</strong> ${date}</p>
        <p><strong>Estimated Budget:</strong> ${budget}</p>
        <p><strong>Theme or Style:</strong> ${theme}</p>
        <p><strong>Venue Preferences:</strong> ${venue}</p>
        <p><strong>Food and Beverage:</strong> ${foodBeverage}</p>
        <p><strong>Entertainment:</strong> ${entertainment.join(', ')}</p>
        <p><strong>Decorations:</strong> ${decorations}</p>
    `;

    document.getElementById('formData').innerHTML = formData;
});
