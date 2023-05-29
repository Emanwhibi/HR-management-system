'use strict';

let salaryFunction= function salaryFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let employeesArray=[];


let intialemployeeID= idFunction(1000, 1000);

function Employee(empName,empDepartment,empLevel,empImage){
    this.employeeId=0;
    this.employeeFullName = empName;
    this.employeeDepartment = empDepartment;
    this.employeeLevel = empLevel;
    this.employeeImage = empImage;
    this.employeeSalary=0;
    this.generateRandomsalary=function(){

        let employeeRandomSalary;
        let employeeSalaryTax;
        switch (this.employeeLevel) {
            case 'Senior':
                employeeRandomSalary=salaryFunction(1500, 2000);
                 employeeSalaryTax =(employeeRandomSalary)*.075;
                 this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            case 'Mid-Senior':
                employeeRandomSalary=salaryFunction(1000, 1500);
            employeeSalaryTax =(employeeRandomSalary)*.075;
            this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            case 'Junior':
                employeeRandomSalary=salaryFunction(500, 1000);
             employeeSalaryTax =(employeeRandomSalary)*.075;
             this.employeeSalary=(employeeRandomSalary)-(employeeSalaryTax);
                break;
            default:
               
                break;
        }
    
    }
    this.generatId=function(){
        this.employeeId=intialemployeeID ;
        intialemployeeID=this.employeeId+1
    }

    employeesArray.push(this);
}

let hadi = new Employee("Hadi Ahmad","Finance","Mid-senior","assests/Hadi.jpg")
let safi = new Employee("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg")
let rana = new Employee("Rana Saleh","Development","Junior","assets/Rana.jpg")
let tamara = new Employee("Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg")
let ghazi = new Employee("Ghazi Samer","Administration","Senior","assets/Ghazi.jpg")
let omar = new Employee("Omar Zaid","Development","Senior","assets/Omar.jpg")
let lana = new Employee("Lana Ali","Finance","Senior","assets/Lana.jpg")

let header=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
header.id="header"
body.appendChild(header);

let logoImageA=document.createElement("A");
logoImageA.setAttribute("href", "./assets")
header.appendChild(logoImageA);

let logoImage=document.createElement("img");
logoImage.setAttribute("src","./assets/logo.jpg")
logoImage.setAttribute("alt","HR logo")
logoImage.setAttribute("width","100")
logoImageA.appendChild(logoImage);

let projectNameA=document.createElement("A");
projectNameA.setAttribute("href", "./index.html")
projectNameA.id="projectNameAncher"
header.appendChild(projectNameA);

let projectName=document.createElement("h1");
projectName.textContent="HR Managment System";
projectName.id="header-p"
projectNameA.appendChild(projectName);

let topNav=document.createElement("ul");
topNav.id="topNav"
header.appendChild(topNav);

let homeTapA=document.createElement("A");
homeTapA.setAttribute("href", "./index.html")
homeTapA.textContent="Home Page";
homeTapA.style.paddingRight="25px"
homeTapA.style.color="#c441bf"
homeTapA.style.textDecoration="none"
homeTapA.style.fontSize="larger"
topNav.appendChild(homeTapA);

let accountingTapA=document.createElement("A");
accountingTapA.setAttribute("href", "./accounting.html")
accountingTapA.textContent="Accounting";
accountingTapA.style.color="#c441bf"
accountingTapA.style.textDecoration="none"
accountingTapA.style.fontSize="larger"
topNav.appendChild(accountingTapA);

//main 
let main=document.createElement("div");
main.id="main"
body.appendChild(main);

let footer=document.createElement("div");
footer.id="footer"
body.appendChild(footer);


let facebookImageA=document.createElement("A");
facebookImageA.setAttribute("href", "https://web.facebook.com/eman.whibi")
footer.appendChild(facebookImageA);

let instagramImageA=document.createElement("A");
instagramImageA.setAttribute("href", "https://instagram.com/eman._.26?igshid=MzRlODBiNWFlZA==")
footer.appendChild(instagramImageA);

let twitterImageA=document.createElement("A");
twitterImageA.setAttribute("href","https://twitter.com/emanwhibi?s=11&t=h9cChGOuzxngprsEdB_tJg")
footer.appendChild(twitterImageA);

let facebookImage=document.createElement("img");
facebookImage.setAttribute("src","assets/f.jpeg")
facebookImage.setAttribute("alt","Facebook logo")
facebookImage.setAttribute("width","25")
facebookImageA.appendChild(facebookImage);

let instagramImage=document.createElement("img");
instagramImage.setAttribute("src","assets/i.jpeg")
instagramImage.setAttribute("alt","Instagram logo")
instagramImage.setAttribute("width","25")
instagramImageA.appendChild(instagramImage);

let twitterImage=document.createElement("img");
twitterImage.setAttribute("src","./assets/t.png")
twitterImage.setAttribute("alt","Twitter logo")
twitterImage.setAttribute("width","25")
twitterImageA.appendChild(twitterImage);


let footerMainPar=document.createElement("p");
footerMainPar.textContent="© 2023 HR Managment .Eman whibi ";
footerMainPar.id="footer-p"
footer.appendChild(footerMainPar);


