// Set up the object
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Update the HTML
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.textContent = hotel.pool;

var elGym = document.getElementById('gym');
elGym.textContent = hotel.gym;