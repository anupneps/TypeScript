import {Branch } from "./types/branch";
import {Customer } from "./types/customer";
import {Transaction } from "./types/transcation";

export class Bank{
  private name: string;
   branches: Branch[]
  
  constructor(name:string){
    this.name = name;
    this.branches = [];
  }
// method 1 
  addBranch(branch:Branch){
    if(this.branches.includes(branch)){
      return false
    }
      this.branches.push(branch)
      return true
    }

// method 2
  addCustomer(branch:Branch, customer:Customer){
    return branch.addCustomer(customer)
  }

  // method 3
  addCustomerTransaction(branch:Branch, customerId:string, transaction:number){
    return branch.addCustomerTransaction(customerId, transaction)
  }

// method 4
  findBranchByName(branch:string){
    const branchName = this.branches.find(nameBranch =>nameBranch.getName() === branch)
    if(!branchName){
      return null
    }
    return branchName
  }

// method 5
  checkBranch(branch:Branch){
    if(this.branches.includes(branch)){
      return true
    }
      return false
  }

// method 6
  listCustomers(branch:Branch, value:Boolean){
    this.checkBranch(branch)
    if(value){
      
      return branch.getCustomers()
    }

    }  
  }

  


  const arizonaBank = new Bank("Arizona")
  const westBranch = new Branch("West Branch")
  const sunBranch = new Branch("Sun Branch")
  const customer1 = new Customer("John")
  const customer2 = new Customer("Anna")
  const customer3 = new Customer("John")
  
  arizonaBank.addBranch(westBranch)
  arizonaBank.addBranch(sunBranch)
  arizonaBank.addBranch(westBranch) 
  
  arizonaBank.findBranchByName("bank")
  arizonaBank.findBranchByName("sun")
  
  arizonaBank.addCustomer(westBranch, customer1)
  arizonaBank.addCustomer(westBranch, customer3)
  arizonaBank.addCustomer(sunBranch, customer1)
  arizonaBank.addCustomer(sunBranch, customer2)
  
  arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
  arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
  arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)
  
  customer1.addTransaction(-1000)
  // console.log(customer1.getBalance())
  // console.log(arizonaBank.listCustomers(westBranch, true))
  // console.log(arizonaBank.listCustomers(sunBranch,true))

console.log(sunBranch.getCustomers());
console.log('-------------')
console.log(westBranch.getCustomers());




