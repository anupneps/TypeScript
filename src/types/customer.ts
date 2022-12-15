import { Transaction } from "./transcation";

export class Customer{
  name:string
  id: string
  transactions: Transaction[]

  constructor(name:string){
    this.name = name;
    this.id = this.generateId();
    this.transactions = []
  }

  generateId(){
    return "Cus:"+ new Date().getTime()
  }
  
  getName(){
    return this.name
  }

  getId(){
    return this.id
  }

  getTransactions(){
    return this.transactions
  }

  getBalance(){
    return this.transactions.map(amt=>amt.amount).reduce((accumulator, currentValue)=> accumulator+ currentValue, 0) // sum 
  }

  addTransaction(amount:number){
    if((this.getBalance()+amount)<0){ // balance more than 0
     return false
    }
    this.transactions.push({amount:amount, date:new Date})
    return true
  }

}

