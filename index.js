// Write your solution in this file!
const employee = {
    name : "Eric",
    streetAddress: "12 Cookson" 
};


function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newEmployee= {...employee}
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";
     return newEmployee;
     
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"
    return employee;
};


function deleteFromEmployeeByKey(employee, name) {
        const cloneEmployee = {... employee};

            cloneEmployee.name = undefined;
        
            return cloneEmployee;


}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    employee.name = undefined;

    return employee;

}