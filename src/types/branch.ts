import { Customer } from "./customer";

export class Branch {
 private name:string;
 private customers:Customer[];

 constructor(branchName:string){
 this.name = branchName;
 this.customers = []
 }
getName():string{
  return this.name
}

getCustomers():Array<Customer>{
   return this.customers
}


addCustomer(customer:Customer):Boolean{
  if(this.customers.find(element=> element.getId() === customer.getId())){
    return false
  }
    this.customers.push(customer)
    return true
}

addCustomerTransaction(customerId:string, transactionAmount:number):Boolean{
  let customer = this.customers.find(customer=> customer.getId() === customerId)
  if(!customer){
    return false
  }
    customer.addTransaction(transactionAmount)
    return true
}

findCustomer(customerId:string){
  let customer = this.customers.find(customer=> customer.getId() === customerId)
  if(!customer){
    return null
}
  return customer
}

}
