function bookFlight() {
    const passengerName = document.getElementById("passengerName").value;
    const flightNumber = document.getElementById("flightNumber").value;
    const travelDate = document.getElementById("travelDate").value;
    const seatNumber = document.getElementById("seatNumber").value;

    if (!passengerName || !flightNumber || !travelDate || !seatNumber) {
        alert("Please fill in all fields");
        return;
    }

    console.log(`Booking confirmed for ${passengerName}`);
    console.log(`Flight: ${flightNumber} | Date: ${travelDate} | Seat: ${seatNumber}`);
    alert(`Booking confirmed! ${passengerName} - Flight ${flightNumber} - Seat ${seatNumber}`);
}
