
subbutton = document.getElementById('calculateBtn');

subbutton.addEventListener('click', function() {


    const timeIn = new Date(`1970-01-01T${document.getElementById('timeIn').value}:00`);
    const timeOut = new Date(`1970-01-01T${document.getElementById('timeOut').value}:00`);

    if (timeOut < timeIn) {
        timeOut.setDate(timeOut.getDate() + 1); // Add one day
    }

    const currDate = document.getElementById("day").value;
    const agentName = document.getElementById("agentName").value;

    const timeDifference = timeOut - timeIn; 
    
    
    const totalMinutes = Math.floor(timeDifference / (1000 * 60)); 
    const hoursWorked = Math.floor(totalMinutes / 60); 
    const minutesWorked = totalMinutes % 60; 

    if(hoursWorked >= 8){
        let resultText = `Full working day for: ${agentName}: 8 hours  ${currDate}`;
        document.getElementById('result').innerText = resultText;
   
    } else {
        let resultText = `Total hours worked for: ${agentName} ${hoursWorked} hours and ${minutesWorked} minutes  ${currDate}`;
    document.getElementById('result').innerText = resultText;
    }


});

//This is a test number 5