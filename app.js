//constructor

function employee(name,department,level,URL){
    this.fullName=name;
    this.department=department;
    this.level=level;
    this.ImageURL=URL;
    allEmployees.push(this);
}


var existingID = [];
var allEmployees = [];
var employeeSalary = [];

//prototypes
employee.prototype.uniqeID = function(existingID){
    var ID = Math.floor(1000 + Math.random() * 9000);
    while (existingID.includes(ID)){
        ID = Math.floor(1000 + Math.random() * 9000);
    }
    existingID.push(ID) ;
    return ID ;
}

employee.prototype.salary = function(level){
    var salaryValue;
    var netSalary;

switch(level){  

case 'Senior' : 
 salaryValue = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
 netSalary = salaryValue*0.925; 
break;

case 'Mid-Senior' : 
 salaryValue = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
 netSalary = salaryValue*0.925; 
break;

case 'Junior' :
 salaryValue = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
 netSalary = salaryValue*0.925;
}
employeeSalary.push(netSalary);
return netSalary;
}

employee.prototype.display = function(allEmployees) {
    for (var i = 0; i < allEmployees.length; i++) {
      document.write("<br>");
      document.write(".   Name : "+allEmployees[i].fullName+"<br>");
      document.write(".   Salary : "+employeeSalary[i]+"<br>");
      
    }
}
//creating objects

var Ghazi = new employee('Ghazi Samer','Administration','Senior' ,'');
Ghazi.uniqeID(existingID);
Ghazi.salary(Ghazi.level);
var Lana = new employee('Lana Ali','Finance','Senior','');
Lana.uniqeID(existingID);
Lana.salary(Lana.level);
var Tamara = new employee('Tamara Ayoub','Marketing','Senior','');
Tamara.uniqeID(existingID);
Tamara.salary(Tamara.level);
var Safi = new employee('Safi Walid','Administration','Mid-Senior','');
Safi.uniqeID(existingID);
Safi.salary(Safi.level);
var Omar = new employee('Omar Zaid','Development','Senior','');
Omar.uniqeID(existingID);
Omar.salary(Omar.level);
var Rana = new employee('Rana Saleh','Development','Junior' ,'');
Rana.uniqeID(existingID);
Rana.salary(Rana.level);
var Hadi = new employee('Hadi Ahmad','Finance','Mid-Senior' ,'')
Hadi.uniqeID(existingID);
Hadi.salary(Hadi.level);

Lana.display(allEmployees);
