// Form Submission Logic
document.getElementById('conceptualizeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect form data
  let eventPurpose = document.getElementById('eventPurpose').value;
  let guests = document.getElementById('guests').value;
  let date = document.getElementById('date').value;
  let budget = document.getElementById('budget').value;
  let theme = document.getElementById('theme').value;
  let venue = document.getElementById('venue').value;
  let foodBeverage = document.getElementById('foodBeverage').value;

  // Collect entertainment preferences
  let entertainment = [];
  document.querySelectorAll('input[name="entertainment"]:checked').forEach(function(e) {
      entertainment.push(e.value);
  });

  let decorations = document.getElementById('decorations').value;

  // Display the collected data
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

// Calendar Logic
document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById('calendar');
  
  // Basic calendar data
  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  
  function generateCalendar(month, year) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDay = new Date(year, month, 1).getDay();
      let calendar = '<table><tr>';
    
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
      daysOfWeek.forEach(day => {
          calendar += `<th>${day}</th>`;
      });
      calendar += '</tr><tr>';
    
      // Padding before the first day
      for (let i = 0; i < firstDay; i++) {
          calendar += '<td></td>';
      }
    
      // Filling the days
      for (let day = 1; day <= daysInMonth; day++) {
          if ((day + firstDay) % 7 === 0) {
              calendar += `<td><div class="day">${day}</div></td></tr><tr>`;
          } else {
              calendar += `<td><div class="day">${day}</div></td>`;
          }
      }
      calendar += '</tr></table>';
    
      calendarEl.innerHTML = calendar;
  }
  
  generateCalendar(month, year);
  
  // Highlight dates with events (just an example)
  document.querySelectorAll('.day').forEach(dayEl => {
      if (parseInt(dayEl.textContent) === 25) {
          dayEl.style.backgroundColor = '#f39c12';  // Mark 25th as an event day
      }
  });
});
