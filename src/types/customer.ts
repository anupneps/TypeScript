import { randomId } from "./randomId";
import { Transaction } from "./transcation";

export class Customer{
  name:string
  id: string
  transactions: Transaction[]

  constructor(name:string){
    this.name = name;
    this.id = randomId(6);
    this.transactions = []
  }

  getName():string{
    return this.name
  }

  getId():string{
    return this.id
  }

  getTransactions():Array<Transaction>{
    return this.transactions
  }

  getBalance():number{
    return this.transactions.map(amt=>amt.amount).reduce((accumulator, currentValue)=> accumulator+ currentValue, 0) // sum 
  }

  addTransaction(amount:number):Boolean{
    if((this.getBalance()+amount)<0){ // balance more than 0
     return false
    }
    this.transactions.push({amount:amount, date:new Date})
    return true
  }

}

