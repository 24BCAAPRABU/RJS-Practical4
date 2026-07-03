let studentdetails = [
    {name:"prabu",dept:"bca",age:20},
    {name:"harish",dept:"bca",age:20},
    {name:"akash",dept:"bca",age:20}
];
 
function getstudentdetails(students) {
    for(const {name,age,dept} of studentDetails){
        console.log(name,age,dept);
    }
    }
getStudentDetails(studentDetails);
