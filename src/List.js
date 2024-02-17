import React, { useState } from 'react';
import ListItems from './ListItems';
function List() {
    let isFirst = false;
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        if(isFirst === true){isFirst = false};
        setItems((prev) => {
          return [{...prev}, { name: inputValue }]
        })
        e.preventDefault();
        console.log(items);
    }
    const handleChange = ({ target }) => {
        console.log(target.value)
        setInputValue((prev) => {
            prev = target.value;
        })
    }
    
    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeHolder="To Do"></input>
                <input type="submit"></input>
            </form>
            <ul>
                <ListItems isFirst={isFirst} items={items} />
            </ul>
        </div>
    )
}
export default List;