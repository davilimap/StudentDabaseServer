var db = require('../dbconnection'); //reference of dbconnection.js

var Student = {

    getAllStudents: function (callback) {
        return db.query("Select * from students", callback);
    },
    getStudentById: function (id, callback) {
        return db.query("select * from students where id=?", [id], callback);
    },
    addStudent: function (Student, callback) {
        return db.query("insert into students (fullName, course, year) values(?,?,?)", [Student.fullName, Student.course, Student.year], callback);
    },
    deleteStudent: function (id, callback) {
        return db.query("delete from students where id=?", [id], callback);
    },
    updateStudent: function (id, Student, callback) {
        return db.query("update students set fullName=?,course=?,year=? where id=?", [Student.fullName, Student.course, Student.year, id], callback);
    },
    getStudentByName: function (name, callback) {
        return db.query("select * from students where fullName like '%"+name+"%'", [name], callback);
    }
};

module.exports = Student;