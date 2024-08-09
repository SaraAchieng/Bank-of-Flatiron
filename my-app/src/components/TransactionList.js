import React, {useState, useEffect, useMemo} from "react";
import Transaction from "./Transaction";


function TransactionList({searchValue}) {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/transactions")
        .then(response => response.json())
        .then(data => setTransactions(data))
        
    }, [])

    const filteredTransactions = useMemo(() => {
      if (!searchValue) {
        return transactions;
      }
      return transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchValue.toLowerCase())
      );
   }, [transactions, searchValue]);

    
  

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th className="ui center aligned header">Date</th>
                    <th className="ui center aligned header">Description</th>
                    <th className="ui center aligned header">Category</th>
                    <th className="ui center aligned header">Amount</th>
                </tr>
                {/* render a list of <Transaction> component here */}
                {filteredTransactions.map((transaction) => {
                    return <Transaction key={transaction.id} transaction={transaction} />
                })}

            </tbody>
        </table>
    )
}

export default TransactionList;

