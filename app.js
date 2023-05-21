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
  