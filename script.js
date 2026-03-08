document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('bookingForm');
  const msg = document.getElementById('bookingMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const from = data.get('from')?.trim();
      const to = data.get('to')?.trim();
      const depart = data.get('depart');
      const ret = data.get('return');

      if(!from || !to || !depart){
        msg.textContent = 'Please complete the required fields.';
        return;
      }

      if(ret && new Date(ret) < new Date(depart)){
        msg.textContent = 'Return date cannot be before departure.';
        return;
      }

      msg.textContent = 'Searching flights — showing best fares...';
      setTimeout(()=>{
        msg.textContent = `Found great options from ${from} to ${to} — proceed to booking.`;
      },900);
    });
  }
});
