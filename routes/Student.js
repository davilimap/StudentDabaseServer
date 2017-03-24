var express = require('express');
var router = express.Router();
var Student = require('../models/Student');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        Student.getStudentById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else if (req.query.name) {
        Student.getStudentByName(req.query.name, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        Student.getAllStudents(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    Student.addStudent(req.body, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(results.insertId);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Student.deleteStudent(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Student.updateStudent(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;