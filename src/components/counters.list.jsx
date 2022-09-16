import React,{useState} from "react";
import Counter from './counter.jsx';

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 2, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];
    const [counters,setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter(counter =>counter.id !== id);
        setCounters(newCounters);
    }
    const handleIncrement = (id) => {
        let countInc = [];
        counters.map(counter => {
            if (counter.id === id) { counter.value=counter.value+1;}
            countInc.push(counter);
        });
        setCounters(countInc);
    } 
    const handleDecrement = (id) => {
        let countInc = [];
        counters.map(counter => {
            if (counter.id === id) { counter.value = counter.value - 1; }
            countInc.push(counter);
        });
        setCounters(countInc);
    }
    const handleReset = () => {
        setCounters(initialState);
    }

    return (
        <>
            {counters.map(count => (
                <Counter 
                    key={count.id} 
                    // id ={count.id}
                    // value={count.value} 
                    // name={count.name} 
                    // counter = {count}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    {...count}
                />))}
                <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        </>
    )
}

export default CountersList;