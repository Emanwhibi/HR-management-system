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
                 this.employeeSalary=Math.round((employeeRandomSalary)-(employeeSalaryTax));
                break;
            case 'Mid-Senior':
                employeeRandomSalary=salaryFunction(1000, 1500);
            employeeSalaryTax =(employeeRandomSalary)*.075;
            this.employeeSalary=Math.round((employeeRandomSalary)-(employeeSalaryTax));
                break;
            case 'Junior':
                employeeRandomSalary=salaryFunction(500, 1000);
             employeeSalaryTax =(employeeRandomSalary)*.075;
             this.employeeSalary=Math.round((employeeRandomSalary)-(employeeSalaryTax));
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


let ghazi = new Employee("Ghazi Samer","Administration","Senior","assets/Ghazi.jpg")
let lana = new Employee("Lana Ali","Finance","Senior","assets/Lana.jpg")
let tamara = new Employee("Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg")
let safi = new Employee("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg")
let omar = new Employee("Omar Zaid","Development","Senior","assets/Omar.jpg")
let rana = new Employee("Rana Saleh","Development","Junior","assets/Rana.jpg")
let hadi = new Employee("Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg")

//header
let header=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
header.id="header"
body.appendChild(header);

let logoImageA=document.createElement("A");
logoImageA.setAttribute("href", "./index.html")
header.appendChild(logoImageA);

let logoImage=document.createElement("img");
logoImage.setAttribute("src","./assets/human-resources (2).png")
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
homeTapA.style.color="#F6FFDe"
homeTapA.style.textDecoration="none"
homeTapA.style.fontSize="larger"
topNav.appendChild(homeTapA);

let accountingTapA=document.createElement("A");
accountingTapA.setAttribute("href", "./accounting.html")
accountingTapA.textContent="Accounting";
accountingTapA.style.color="#F6FFDe"
accountingTapA.style.textDecoration="none"
accountingTapA.style.fontSize="larger"
topNav.appendChild(accountingTapA);

//main 
let main=document.createElement("div");
main.id="main"
main.style.paddingLeft="35px"
body.appendChild(main);

let employeemainDiv=document.createElement("div");
employeemainDiv.style.paddingRight="30px"
main.appendChild(employeemainDiv);

let employeemainDiv1=document.createElement("div");
employeemainDiv1.style.paddingRight="30px"
main.appendChild(employeemainDiv1);

let employeemainDiv2=document.createElement("div");
employeemainDiv2.style.paddingRight="30px"
main.appendChild(employeemainDiv2);

let employeemainDiv3=document.createElement("div");
main.appendChild(employeemainDiv3);



//footer
let footer=document.createElement("div");
footer.id="footer"
body.appendChild(footer);

let instagramImageA=document.createElement("A");
instagramImageA.setAttribute("href", "https://instagram.com/m.abutuaima?igshid=OTk0YzhjMDVlZA==")
footer.appendChild(instagramImageA);

let facebookImageA=document.createElement("A");
facebookImageA.setAttribute("href", "https://www.facebook.com/m.abutuaimeh?mibextid=ZbWKwL")
footer.appendChild(facebookImageA);

let snapchatImageA=document.createElement("A");
snapchatImageA.setAttribute("href", "https://www.snapchat.com/add/hamota94?share_id=bKzeaIMuYbc&locale=en-US")
footer.appendChild(snapchatImageA);

let whatsappImageA=document.createElement("A");
whatsappImageA.setAttribute("href", "https://wa.link/yw2kk6")
footer.appendChild(whatsappImageA);

let instagramImage=document.createElement("img");
instagramImage.setAttribute("src","assets/instagram.png")
instagramImage.setAttribute("alt","Instagram logo")
instagramImage.setAttribute("width","25")
instagramImageA.appendChild(instagramImage);

let facebookImage=document.createElement("img");
facebookImage.setAttribute("src","assets/facebook.png")
facebookImage.setAttribute("alt","Facebook logo")
facebookImage.setAttribute("width","25")
facebookImageA.appendChild(facebookImage);

let snapchatImage=document.createElement("img");
snapchatImage.setAttribute("src","assets/snapchat.png")
snapchatImage.setAttribute("alt","snapchat logo")
snapchatImage.setAttribute("width","25")
snapchatImageA.appendChild(snapchatImage);

let whatsappImage=document.createElement("img");
whatsappImage.setAttribute("src","assets/whatsapp.png")
whatsappImage.setAttribute("alt","WhatsApp logo")
whatsappImage.setAttribute("width","25")
whatsappImageA.appendChild(whatsappImage);

let footerMainPar=document.createElement("p");
footerMainPar.textContent="© 2023 HR Managment System.Jo | Designed And Developed By Drago Co.";
footerMainPar.id="footer-p"
footer.appendChild(footerMainPar);


Employee.prototype.renderEmployees=function(){
    let employeeDiv=document.createElement("div");
   employeeDiv.style.background="#7AA874";
   employeeDiv.style.paddingTop="10px";
   employeeDiv.style.paddingLeft="20px";
   employeeDiv.style.paddingBottom="30px";
   employeeDiv.style.marginBottom="20px"
   employeeDiv.style.marginRight="20px"
   employeeDiv.style.maxWidth="220px"
   employeeDiv.style.display="inline-box"
   employeeDiv.style.borderRadius="5%"
   employeemainDiv.appendChild(employeeDiv);

    let employeeImage=document.createElement("img");
    employeeImage.src=this.employeeImage;
    employeeImage.alt=this.employeeFullName;
    employeeImage.setAttribute("width","200");
    employeeDiv.appendChild(employeeImage);

    let mainParagraph=document.createElement("p");
    mainParagraph.style.fontSize="15px"
    mainParagraph.textContent=` Name: ${this.employeeFullName} - ID: ${this.employeeId}  Department: ${this.employeeDepartment}  Level: ${this.employeeLevel} - Salary: ${this.employeeSalary}  `;
    employeeDiv.appendChild(mainParagraph);
    
}
Employee.prototype.renderEmployees1=function(){
    let employeeDiv=document.createElement("div");
   employeeDiv.style.background="#AACB73";
   employeeDiv.style.paddingTop="10px";
   employeeDiv.style.paddingLeft="20px";
   employeeDiv.style.paddingBottom="30px";
   employeeDiv.style.marginBottom="20px"
   employeeDiv.style.marginRight="20px"
   employeeDiv.style.maxWidth="220px"
   employeeDiv.style.display="inline-box"
   employeeDiv.style.borderRadius="5%"
   employeemainDiv1.appendChild(employeeDiv);

    let employeeImage=document.createElement("img");
    employeeImage.src=this.employeeImage;
    employeeImage.alt=this.employeeFullName;
    employeeImage.setAttribute("width","200");
    employeeDiv.appendChild(employeeImage);

    let mainParagraph=document.createElement("p");
    mainParagraph.style.fontSize="15px"
    mainParagraph.textContent=` Name: ${this.employeeFullName} - ID: ${this.employeeId}  Department: ${this.employeeDepartment} - Level: ${this.employeeLevel} -  Salary: ${this.employeeSalary}  `;
    employeeDiv.appendChild(mainParagraph);
    
}

Employee.prototype.renderEmployees2=function(){
    let employeeDiv=document.createElement("div");
   employeeDiv.style.background="#C7E9B0";
   employeeDiv.style.paddingTop="10px";
   employeeDiv.style.paddingLeft="20px";
   employeeDiv.style.paddingBottom="30px";
   employeeDiv.style.marginBottom="20px"
   employeeDiv.style.marginRight="20px"
   employeeDiv.style.maxWidth="220px"
   employeeDiv.style.display="inline-box"
   employeeDiv.style.borderRadius="5%"
   employeemainDiv2.appendChild(employeeDiv);

    let employeeImage=document.createElement("img");
    employeeImage.src=this.employeeImage;
    employeeImage.alt=this.employeeFullName;
    employeeImage.setAttribute("width","200");
    employeeDiv.appendChild(employeeImage);

    let mainParagraph=document.createElement("p");
    mainParagraph.style.fontSize="15px"
    mainParagraph.textContent=` Name: ${this.employeeFullName} - ID: ${this.employeeId}  Department: ${this.employeeDepartment} - Level: ${this.employeeLevel} -  Salary: ${this.employeeSalary}  `;
    employeeDiv.appendChild(mainParagraph);
    
}
Employee.prototype.renderEmployees3=function(){
    let employeeDiv=document.createElement("div");
   employeeDiv.style.background="#DDFFBB";
   employeeDiv.style.paddingTop="10px";
   employeeDiv.style.paddingLeft="20px";
   employeeDiv.style.paddingBottom="30px";
   employeeDiv.style.marginBottom="20px"
   employeeDiv.style.marginRight="20px"
   employeeDiv.style.maxWidth="220px"
   employeeDiv.style.display="inline-box"
   employeeDiv.style.borderRadius="5%"
   employeemainDiv3.appendChild(employeeDiv);

    let employeeImage=document.createElement("img");
    employeeImage.src=this.employeeImage;
    employeeImage.alt=this.employeeFullName;
    employeeImage.setAttribute("width","200");
    employeeDiv.appendChild(employeeImage);

    let mainParagraph=document.createElement("p");
    mainParagraph.style.fontSize="15px"
    mainParagraph.textContent=` Name: ${this.employeeFullName} - ID: ${this.employeeId}  Department: ${this.employeeDepartment} - Level: ${this.employeeLevel} -  Salary: ${this.employeeSalary}  `;
    employeeDiv.appendChild(mainParagraph);
    
}

for (let index = 0; index < employeesArray.length; index++) {
    switch (employeesArray[index].employeeDepartment) {
        case 'Administration':
            employeesArray[index].generatId();
    employeesArray[index].generateRandomsalary();
    employeesArray[index].renderEmployees();
            break;
            case 'Finance':
            employeesArray[index].generatId();
    employeesArray[index].generateRandomsalary();
    employeesArray[index].renderEmployees1();
            break;
            case 'Development':
            employeesArray[index].generatId();
    employeesArray[index].generateRandomsalary();
    employeesArray[index].renderEmployees2();
            break;
            case 'Marketing':
            employeesArray[index].generatId();
    employeesArray[index].generateRandomsalary();
    employeesArray[index].renderEmployees3();
            break;
    
        default:
            break;
    }
    
    
  
}
