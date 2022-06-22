import mongoose from "mongoose";
import { EmployeeSchema } from "../models/employee-model";

const Employee = mongoose.model("Employee", EmployeeSchema);

//add employee
export const addEmployee = (req, res) => {
  let newEmployee = new Employee(req.body);
  newEmployee.save((err,employee)=>{
      if(err){
          res.send(err);

      }
      res.json(employee);
  })
};

//get all employees
export const getAllEmployees = (req,res)=>{
    Employee.find({},(err,employees)=>{
        if(err) res.send(err);
        res.json(employees)
    })
}
export const home = (req, res) => {
  res.json({ message: "Welcome from Express" });
};
