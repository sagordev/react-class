import React, { useState } from 'react'
import Header from './Header'

export default function TakaPai({setPage, hiseb, setHiseb}) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState('');

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const onAmounteChangeHandler = (event) => {
        setAmount(Number(event.target.value));
    }

    const onSubmit = () => {
       hiseb.push({name, amount});
        setHiseb(hiseb);
        setName("");
        setAmount("");
    }
    const getTotal = () => {
        let total = 0;
        hiseb.forEach((each) => {
            total += each.amount;
        });
        return total;
    }
  return (
    <>
        <Header title="Taka Pai" />
        {
            hiseb?.map((x) => {
                return (
                    <div className='amount_table'>
                        <div>{x.name}</div>
                        <div>{x.amount}</div>
                    </div>
                )
            })
        }
         <div className='amount_table'>
            <div>Total</div>
            <div>{getTotal()}</div>
        </div>
        <div className='amount_table'>
            <div>
                <input type="text" onChange={onNameChangeHandler} value={name}/>
            </div>
            <div>
                <input type="text" onChange={onAmounteChangeHandler} value={amount}/>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
        <button  onClick={() => setPage(0)}>Back</button>
    </>
  )
}
