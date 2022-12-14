

import {  Customer } from "./types/branch";
class Branch {
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
    return true
  }else{
    return false
  }
}

}


// const sanima = new Bank ('sanimabank')

// sanima.addBranch('helsinki');
// sanima.addBranch('espoo');
// sanima.addBranch('vantaa');

// console.log(sanima);

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")

const sunBranch = new Branch("Sun Branch")
console.log(westBranch);
arizonaBank.addBranch(westBranch)
console.log(arizonaBank)
// arizonaBank.addBranch(sunBranch)
// arizonaBank.addBranch(westBranch) 





