function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (day === "" || month === "" || year === "") {
      document.getElementById("result").innerHTML = "Please enter a valid date!";
      return;
    }

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    document.getElementById("result").innerHTML = 
      `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  }

  function resetFields() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("result").innerHTML = "";
  }
