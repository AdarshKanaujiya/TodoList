import React from 'react';

function TodoList(props) {
    return (
        <li className="list-item">
            {props.item}
            <span className="icons">
                <i onClick={e=>{
                    props.deleteItem(props.index)
                }}>X</i>
            </span>
            </li>
    )
}
export default TodoList;