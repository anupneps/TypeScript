import { Customer } from "./customer";

export class Branch {
 private name:string;
 private customers:Customer[];

 constructor(branchName:string){
 this.name = branchName;
 this.customers = []
 }
getName(){
  return this.name
}

getCustomers(){
   return this.customers
}


addCustomer(customer:Customer){
  if(this.customers.find(element=> element.id === customer.id)){
    return false
  }
    this.customers.push(customer)
    return true
}

addCustomerTransaction(customerId:string, transactionAmount:number){
  let customer = this.customers.find(customer=> customer.id === customerId)
  if(!customer){
    return false
  }
    customer.addTransaction(transactionAmount)
    // return customer.transactions // 
  
}

findCustomer(customerId:string){
  let customer = this.customers.find(customer=> customer.id === customerId)
  if(!customer){
    return null
}
  return customer
}

}
