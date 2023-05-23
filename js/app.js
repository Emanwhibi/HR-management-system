var existingID = [];
function uniqeID (existingID){
var ID = Math.floor(1000 + Math.random() * 9000);
while (existingID.includes(ID)){
    ID = Math.floor(1000 + Math.random() * 9000);
}
existingID.push(ID) ;
return ID ;
}

function salary (level){

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
return netSalary;
}


var employee = [{
    EmployeeID :uniqeID(existingID),
    fullName : 'Ghazi Samer',
    department: 'Administration', 
    level : 'Senior' ,
    ImageURL : '',
    salary : salary('Senior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Lana Ali',
    department: 'Finance', 
    level : 'Senior' ,
    ImageURL : '',
    salary : salary('Senior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Tamara Ayoub',
    department: 'Marketing', 
    level : 'Senior' ,
    ImageURL : '',
    salary : salary('Senior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Safi Walid',
    department: 'Administration', 
    level : 'Mid-Senior' ,
    ImageURL : '',
    salary : salary('Mid-Senior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Omar Zaid',
    department: 'Development', 
    level : 'Senior' ,
    ImageURL : '',
    salary : salary('Senior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Rana Saleh',
    department: 'Development', 
    level : 'Junior' ,
    ImageURL : '',
    salary : salary('Junior')
},{
    EmployeeID :uniqeID(existingID),
    fullName : 'Hadi Ahmad',
    department: 'Finance', 
    level : 'Mid-Senior' ,
    ImageURL : '',
    salary : salary('Mid-Senior')
}];

function display() {
    for (var i = 0; i < employee.length; i++) {
      document.write("<br>");
      document.write(".   Name : "+employee[i].fullName+"<br>");
      document.write(".   Salary : "+employee[i].salary+"<br>");
      
    }
}
display();
