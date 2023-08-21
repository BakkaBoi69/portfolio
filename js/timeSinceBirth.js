// Specify your birthdate
// Format: "yyyy-mm-ddThh:mm:ss"
let birthDate = new Date("2005-05-28T07:04:00");

// Function to calculate difference between birthDate and present moment     
function updateAge() {
    // Get present moment
    let now = new Date();

    // Calculate differences in date parts
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    // Logic to adjust differences when necessary (e.g., negative months)
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    // Calculate differences in time parts
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Logic to adjust differences when necessary (e.g., negative minutes)
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }

    // Calculate weeks and adjust days
    let weeks = Math.floor(days / 7);
    days %= 7;

    // Update webpage text with calculated age
    document.getElementById("time-since-birth").innerHTML =
        `<i>${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</i>`;

    // Refresh data every second
    setTimeout(updateAge, 1000);
}

// Initiate age display and live updates
updateAge();