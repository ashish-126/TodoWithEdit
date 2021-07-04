import React from "react";

const ToDoShow = (props)=>{

    return(
        <>
            <div className="eachItem">
                <h3>{props.data}</h3> 
                <div className="todo-btn">
                      
                    <i className="far fa-edit add-btn" title="Edit button" onClick={()=>{
                        props.onSelectEdit(props.id);
                    }}/>
                    
                    <i className="far fa-trash-alt add-btn" title="delete button" onClick={()=>{
                        props.onSelect(props.id);
                    }}/>
                    
                </div>
                
            </div>
        </>
    );
}

export default ToDoShow;