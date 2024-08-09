import React, {useState, useDeferredValue} from "react";
import AddTransactionForm from "./AddTransactionForm";
import TransactionList from "./TransactionList";


function Search() {
  const [searchValue, setSearchValue] = useState("")
  const deferredSearchValue = useDeferredValue(searchValue);
  
  return (
     <div>
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search Transactions"
        onChange={(e) => {setSearchValue(e.target.value)}}

      />
      <i className="circular search link icon"></i>
    </div>
    <AddTransactionForm />
    <TransactionList searchValue={deferredSearchValue} />
    </div>
  );
}

export default Search;