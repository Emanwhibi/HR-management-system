// Sample employee data (replace with your own data or fetch from an API)
const employees = [
    { name: "John Doe", position: "Manager", department: "Sales" },
    { name: "Jane Smith", position: "Developer", department: "IT" },
    { name: "Alex Johnson", position: "Accountant", department: "Finance" },
    // Add more employee objects as needed
  ];
  
  // Function to render employee information on the page
  function renderEmployeeList() {
    const employeeList = document.getElementById("employee-list");
  
    // Clear any existing content
    employeeList.innerHTML = "";
  
    // Loop through the employees array and create list items for each employee
    employees.forEach((employee) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${employee.name} - ${employee.position} (${employee.department})`;
      employeeList.appendChild(listItem);
    });
  }
  
  // Call the renderEmployeeList function to populate the employee list on page load
  renderEmployeeList();

  
  // Object literal for each employee
const employees = [
    {
      id: generateEmployeeID(),
      fullName: "John Doe",
      department: "Administration",
      level: "Junior",
      imageURL: "https://example.com/john-doe.jpg",
      salary: 50000,
    },
    {
      id: generateEmployeeID(),
      fullName: "Jane Smith",
      department: "Marketing",
      level: "Mid-Senior",
      imageURL: "https://example.com/jane-smith.jpg",
      salary: 70000,
    },
    {
      id: generateEmployeeID(),
      fullName: "Alex Johnson",
      department: "Development",
      level: "Senior",
      imageURL: "https://example.com/alex-johnson.jpg",
      salary: 90000,
    },
  ];
  
  // Method to generate a unique four-digit employee ID
  function generateEmployeeID() {
    const minID = 1000;
    const maxID = 9999;
  
    // Generate a random number between minID and maxID
    const employeeID = Math.floor(Math.random() * (maxID - minID + 1) + minID);
  
    return employeeID;
  }
  
  // Testing the employee data and IDs
  employees.forEach((employee) => {
    console.log("Employee ID:", employee.id);
    console.log("Full Name:", employee.fullName);
    console.log("Department:", employee.department);
    console.log("Level:", employee.level);
    console.log("Image URL:", employee.imageURL);
    console.log("Salary:", employee.salary);
    console.log("----------------------");
  });
// Object literal for each employee
const employees = [
    {
      id: generateEmployeeID(),
      fullName: "John Doe",
      department: "Administration",
      level: "Junior",
      imageURL: "https://example.com/john-doe.jpg",
    },
    {
      id: generateEmployeeID(),
      fullName: "Jane Smith",
      department: "Marketing",
      level: "Mid-Senior",
      imageURL: "https://example.com/jane-smith.jpg",
    },
    {
      id: generateEmployeeID(),
      fullName: "Alex Johnson",
      department: "Development",
      level: "Senior",
      imageURL: "https://example.com/alex-johnson.jpg",
    },
  ];
  
  // Salary range table
  const salaryRanges = {
    Senior: { min: 1500, max: 2000 },
    "Mid-Senior": { min: 1000, max: 1500 },
    Junior: { min: 500, max: 1000 },
  };
  
  // Method to calculate the salary and net salary for each employee
  function calculateSalary() {
    employees.forEach((employee) => {
      // Get the salary range for the employee's level
      const level = employee.level;
      const minSalary = salaryRanges[level].min;
      const maxSalary = salaryRanges[level].max;
  
      // Generate a random salary within the range
      const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);
  
      // Calculate the net salary after deducting tax (7.5%)
      const taxPercent = 7.5;
      const netSalary = randomSalary - (randomSalary * taxPercent) / 100;
  
      // Add the calculated salary and net salary to the employee object
      employee.salary = randomSalary;
      employee.netSalary = netSalary;
    });
  }
  
  // Call the calculateSalary function to calculate salaries for employees
  calculateSalary();
  
  // Testing the employee data, IDs, salaries, and net salaries
  employees.forEach((employee) => {
    console.log("Employee ID:", employee.id);
    console.log("Full Name:", employee.fullName);
    console.log("Department:", employee.department);
    console.log("Level:", employee.level);
    console.log("Image URL:", employee.imageURL);
    console.log("Salary:", employee.salary);
    console.log("Net Salary:", employee.netSalary);
    console.log("----------------------");
  });
// Object literal for each employee (with salary included)
const employees = [
    {
      id: generateEmployeeID(),
      fullName: "John Doe",
      department: "Administration",
      level: "Junior",
      imageURL: "https://example.com/john-doe.jpg",
      salary: 800,
    },
    {
      id: generateEmployeeID(),
      fullName: "Jane Smith",
      department: "Marketing",
      level: "Mid-Senior",
      imageURL: "https://example.com/jane-smith.jpg",
      salary: 1200,
    },
    {
      id: generateEmployeeID(),
      fullName: "Alex Johnson",
      department: "Development",
      level: "Senior",
      imageURL: "https://example.com/alex-johnson.jpg",
      salary: 1800,
    },
  ];
  
  // Method to generate a unique four-digit employee ID
  function generateEmployeeID() {
    const minID = 1000;
    const maxID = 9999;
  
    // Generate a random number between minID and maxID
    const employeeID = Math.floor(Math.random() * (maxID - minID + 1) + minID);
  
    return employeeID;
  }
  
  // Function to render employee names and salaries on the home page
  function renderEmployeeList() {
    const employeeList = document.getElementById("employee-list");
  
    // Clear any existing content
    employeeList.innerHTML = "";
  
    // Loop through the employees array and create HTML elements for each employee
    employees.forEach((employee) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${employee.fullName}</strong> - Salary: $${employee.salary}`;
      employeeList.appendChild(listItem);
    });
  }
  
  // Call the renderEmployeeList function to populate the employee list on page load
  renderEmployeeList();
// Object literal for each employee
const employees = [
    {
      id: 1000,
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageURL: "https://example.com/ghazi-samer.jpg",
    },
    {
      id: 1001,
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageURL: "https://example.com/lana-ali.jpg",
    },
    {
      id: 1002,
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageURL: "https://example.com/tamara-ayoub.jpg",
    },
    {
      id: 1003,
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageURL: "https://example.com/safi-walid.jpg",
    },
    {
      id: 1004,
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageURL: "https://example.com/omar-zaid.jpg",
    },
    {
      id: 1005,
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageURL: "https://example.com/rana-saleh.jpg",
    },
    {
      id: 1006,
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageURL: "https://example.com/hadi-ahmad.jpg",
    },
  ];
  
  // Method to generate a unique four-digit employee ID (not required anymore)
  
  // Function to render employee names and salaries on the home page
  function renderEmployeeList() {
    const employeeList = document.getElementById("employee-list");
  
    // Clear any existing content
    employeeList.innerHTML = "";
  
    // Loop through the employees array and create HTML elements for each employee
    employees.forEach((employee) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${employee.fullName}</strong> - Salary: $${employee.salary}`;
      employeeList.appendChild(listItem);
    });
  }
  
  // Call the renderEmployeeList function to populate the employee list on page load
  renderEmployeeList();
      