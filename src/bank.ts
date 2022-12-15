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

  hasBranch(branch:Branch){
    return this.branches.find(b=> b.getName() === branch.getName())
  }

// method 1 
  addBranch(branch:Branch){
    if(this.hasBranch(branch)){
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
  findBranchByName(branchName:string){
    const bName = this.branches.find(branch =>branch.getName() === branchName)
    if(!branchName){
      return null
    }
    return branchName
  }

// method 5
  checkBranch(branch:Branch){
    if(this.hasBranch(branch)){
      return true
    }
      return false
  }

// method 6
  listCustomers(branch:Branch, withTransaction:Boolean){
    if(!this.checkBranch(branch)){
      console.log("Branch doesn't exist")
      return 
    }
    if(withTransaction){
      return branch.getCustomers()
    }
    return branch.getCustomers().map((c)=>{
      return{
        id: c.id,
        name:c.name
      }
    })
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
  console.log(customer2.getBalance())
  console.log(arizonaBank.listCustomers(westBranch, true))
  console.log(arizonaBank.listCustomers(sunBranch,true))
