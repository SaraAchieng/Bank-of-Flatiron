import React, {useState} from "react";



function AddTransactionForm() {
    const [formData, setFormData] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
    })

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8000/transactions", {
           method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify(formData) 
        })
            .then(response => response.json())
            .then(data => {
                alert('data added succesfully');
              }); 

    }

    function handleChange(event) {
        const key = event.target.id
        setFormData({
            ...formData, 
            [key]:event.target.value})

    }





    return (
        <div  className="ui segment">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="inline fields">
                    <input onChange={handleChange} type="text" id="date" value={formData.date} placeholder="Date"/>
                    <input onChange={handleChange} type="text" id="description" value={formData.description} placeholder="Description" />
                    <input onChange={handleChange} type="text" id="category" value={formData.category} placeholder="Category" />
                    <input onChange={handleChange} type="number" id="amount" value={formData.amount} placeholder="Amount" step="0.01" />
                </div> 
                <button className="ui button" type="submit">Add Transaction</button>  
            </form>
        </div>
       
    );
}

export default AddTransactionForm;