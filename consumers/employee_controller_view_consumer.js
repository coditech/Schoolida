
const Employee_Controller = require('../controllers/employee_controller');

class Employee_Controller_View_Consumer{
    constructor(){
        this.controller= new Employee_Controller();
    }
    principal_view(principal, employee)
    {
        return this.controller.view_employee(principal,employee);
    }
    teacher_view(teacher, employee)
    {
        return this.controller.view_employee(teacher,employee);
    }
    floor_director_view(floor_director, employee)
    {
        return this.controller.view_employee(floor_director,employee);
    }

}

module.exports = Employee_Controller_View_Consumer;