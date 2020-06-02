//runner file
const Principal = require('./models/principal');
const Teacher = require('./models/teacher');
const Floor_Director = require('./models/floor_director');
const Employee_Controller_View_Consumer = require('./consumers/employee_controller_view_consumer');

const Samar = new Principal("samar", "fm", 12344545, "blah blah blah","sam.f@com",'1s50000',123433, "Audi", 'Hamra');
const Sam = new Teacher("Sam","sam",09876543,"blah blah blah", 'samsam@sam',1000000,'fr55555','BLOM','here','computers','full-time');
Sam.assign_floor(1);
const Sam2 = new Teacher("Sam2","sam2",09876543,"blah blah blah", 'samsam2@sam',1000000,'fr55555','BLOM','here','computers','full-time');
Sam2.assign_floor(2);
const Rex = new Floor_Director("Rex", 'x', 5678903,"somewhere", 'rex@rex', 1200000,'sl983749','BANK','here');
Rex.assign_floor_number(1);
const views_controller = new Employee_Controller_View_Consumer();
const view1 = views_controller.principal_view(Samar, Sam);
const view2 = views_controller.principal_view(Samar, Rex);
const view3 = views_controller.floor_director_view(Rex, Sam);
const view4 = views_controller.floor_director_view(Rex, Sam2);
const view5 = views_controller.teacher_view(Sam, Sam2);
console.log(view1);
console.log(view2);
console.log(view3);
console.log(view4);
console.log(view5);