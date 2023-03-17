// Write your solution in this file!
const employee = {
    name: 'Jason Todd',
    streetAdress: '345 Park Avenue'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    return employee
}