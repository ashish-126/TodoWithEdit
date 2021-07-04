import React, { useState } from "react";
import ToDoShow from "./ToDoShow";

const Todo = ()=>{

    const [item, setItem] = useState("");
    const [itemlist, setItemList] = useState([]);
    const [toggleButton, setToggleButton] = useState(true);
    const [editItemId, setEditItemId] = useState(null);
    

    const addItems = ()=>{
        const inputItem = {id:Date.now().toString(), name:item}    
        if (!inputItem){
            alert("please enter Item");
        }
        else if(!toggleButton){
            setItemList(
                itemlist.map((elem)=>{
                    if(elem.id===editItemId){
                        return {...elem, name:item}
                    }
                    return elem;
                })
            )
            setToggleButton(true);
            setItem("");
            setEditItemId(null);
        }
        else{
                setItemList((preVal)=>{
                    return[...preVal,inputItem]
                })
                setItem("");
        }   
    }
    
    const deleteItem = (id)=>{    
        setItemList((oldItems)=>{
            return oldItems.filter((arrElem)=>{
                    return id!==arrElem.id;
                });
        }) 
    }

    const editItem = (id)=>{    
        const editItem = itemlist.find((elem)=>{
            return elem.id===id;
        });
        
        setToggleButton(false);
        setItem(editItem.name);
        setEditItemId(editItem.id);
    }


    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>To Do List</figcaption>
                    </figure>

                    <div className="addItems">
                        <input 
                            type="text" 
                            onChange ={(event)=>setItem(event.target.value)}
                            value={item}
                            placeholder="Add Items"/>
                        {toggleButton ? <i className="fa fa-plus add-btn" title="add item" onClick={addItems}/> : 
                        <i className="far fa-edit add-btn" title="Edit item" onClick={addItems}/> }
                    </div>

                    <div className="showItems">
                        {itemlist.map((elem,index)=>{
                            return <ToDoShow
                                    key = {elem.id}
                                    data = {elem.name}
                                    id = {elem.id}
                                    onSelect={deleteItem}
                                    onSelectEdit ={editItem}
                                    />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;