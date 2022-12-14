import {Branch } from "./types/branch";

class Bank{
  private name: string;
  private branches: Branch[]
  
  constructor(name:string){
    this.name = name;
    this.branches = [];
  }
// method 1 
  addBranch(branch:Branch){
    if(this.branches.includes(branch)){
      return false
    }else{
      this.branches.push(branch)
      return true
    }
  }
// method 2
  addCustomer(branch:Branch, customer:string){
    if(this.addCustomer(branch, customer)){
      return true
    }else{
      
      return false
    }
  }
  // method 3
  addCustomerTransaction(branch:Branch, customerId:string, transaction:number){
    if(this.addCustomerTransaction(branch, customerId, transaction)){
      return true
    }else{
      
      return false
    }
  }
// method 5
  checkBranch(branch:Branch){
    if(this.branches.includes(branch)){
      return true
    }else{
      return false
    }
  }
// method 6
  listCustomers(branch:Branch, value:Boolean){
    if(this.branches.includes(branch) && value === true){
      return true
    }else{
      return false
    }
  
  }

  }
  
   



