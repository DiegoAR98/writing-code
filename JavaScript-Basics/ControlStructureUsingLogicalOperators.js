// Write a program that checks if a person can enter the building based on the following conditions:

let isEmployee = true;
let hasEmployeeID = true;
let isVisitor = true; 
let hasInvitationCode = true;

if (isEmployee && !hasEmployeeID) {
    console.log('Access denied: Employee without ID.');
} else if (isEmployee && hasEmployeeID) {
    console.log('Access granted: Employee with ID.');
} else if (isVisitor && hasInvitationCode) {
    console.log('Access granted: Visitor with invitation code.');
} else {
    console.log('Access denied.');
}
