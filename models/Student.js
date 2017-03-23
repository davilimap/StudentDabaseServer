var db = require('../dbconnection'); //reference of dbconnection.js

var Student = {

    getAllStudents: function (callback) {
        return db.query("Select * from students", callback);
    },
    getStudentById: function (id, callback) {
        return db.query("select * from students where id_student=?", [id], callback);
    },
    addStudent: function (Student, callback) {
        return db.query("Insert into students values(?,?,?)", [Student.FullName, Student.Course, Student.Year], callback);
    },
    deleteStudent: function (id, callback) {
        return db.query("delete from students where id_student=?", [id], callback);
    },
    updateStudent: function (id, Student, callback) {
        return db.query("update students set full_name=?,course=?,year=? where Id=?", [Student.FullName, Student.Course, Student.Year, id], callback);
    }
};

module.exports = Student;