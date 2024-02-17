import React from 'react';
function ListItems(props) {
   if(props.isFirst === true){return (
        props.items.map((e) => {
            return <li key={"key" + e.name}>{[e.name]}</li>
        })
    )}
}

export default ListItems;