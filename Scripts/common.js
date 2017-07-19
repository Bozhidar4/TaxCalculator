function calculateTax() {
    var salary = document.taxForm.salary.value;
    var netSalary;
    document.taxForm.taxFree.value = 10600;
    document.taxForm.gross.value = salary;

    if (salary > 0 && salary <= 10600) {
        document.taxForm.netSalary.value = salary;
    }
    else if (salary > 10601 && salary <= 31000) {
        var taxRateTwenty = (salary * 20) / 100;
        document.taxForm.taxTwentyPercent.value = taxRateTwenty;
        netSalaryTwenty = salary - taxRateTwenty;
        document.taxForm.netSalary.value = netSalaryTwenty;
    }
    else if (salary > 31001) {
        var taxRateForty = (salary * 40) / 100;
        document.taxForm.taxFortyPercent.value = taxRateForty;
        netSalaryForty = salary - taxRateForty;
        document.taxForm.netSalary.value = netSalaryForty;
    }
    else {
        document.taxForm.taxFree.value = null;
        alert("Please Enter Your Correct Salary!");
    }
}