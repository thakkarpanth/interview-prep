/*
    used for access restriction
    used for pre-processing and post-processing
    used for cache server
*/

class Employee {
    create() {}
    delete() {}
    get() {}
}

class EmployeeTable extends Employee {
    create(client) {
        console.log('new row added in employee table');
    };
    delete(client) {
        console.log('row deleted from employee table');
    };
    get(client) {
        console.log('employee data fetched');
    };
}

class EmployeeProxy extends Employee {
    employee;
    constructor() {
        super();
        this.employee = new EmployeeTable();
    }

    create(client) {
        if (client === 'ADMIN') {
            this.employee.create(client);
        }
        else {
            console.log('ACCESS DENIED');
        }
    }

    delete(client) {
        if (client === 'ADMIN') {
            this.employee.delete(client);
        }
        else {
            console.log('ACCESS DENIED');
        }
    }

    get(client) {
        if (client === 'ADMIN' || client === 'USER') {
            this.employee.get(client);
        }
        else {
            console.log('ACCESS DENIED');
        }
    }
}

const employee = new EmployeeProxy();
employee.create('USER');
employee.delete('USER');
employee.get('USER');

employee.create('ADMIN');
employee.delete('ADMIN');
employee.get('ADMIN');
