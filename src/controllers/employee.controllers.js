'use strict'
const Employee = require('../models/employee.model');

exports.findAll = function(req, res){
    Employee.findAll(function(err, employee){
        console.log('controller')
        if(err){
            res.send(err);
        }
        console.log('res', employee);
        res.send({status: 200, data: employee});
    });
};

exports.create = function (req, res) {
    const new_employee = new Employee(req.body);

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Employee.create(new_employee, function (err, employee) {
            if (err) {
                res.send(err);
            }
            res.json({ error: false, status: 200, message: "Employee added successfully!", data: employee });
        });
    }
};


exports.findById = function(req, res){
    Employee.findById(req.params.id, function(err, employee){
        if(err){
            res.send(err);
        }
        res.send({status: 200, data: employee});
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Employee.update(req.params.id, new Employee(req.body), function (err, employee) {
            if (err) {
                res.send(err);
            }
            res.json({ error: false, message: "Employee successfully updated!", status: 200 });
        });
    }
};


exports.delete = function(req, res){
    Employee.delete(req.params.id, function(err, employee){
        if(err){
            res.send(err);
        }
        res.json({error: false, message: 'Employee successfully deleted', status: 200});
    });
};