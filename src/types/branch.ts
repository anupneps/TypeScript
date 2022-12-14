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
   this.customers.forEach((customer)=> {
    return customer
  })
}

addCustomer(customer:Customer){
  if(this.customers.includes(customer)){
    return false
  }else{
    this.customers.push(customer)
    return true
  }
}

}


