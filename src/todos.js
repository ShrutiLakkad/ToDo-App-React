import React, { useState, useEffect } from 'react'
import './todos.css';
import { NavLink } from 'react-router-dom';

const getItem = () => {
    let list = localStorage.getItem('items');
    // console.log(typeof list);
    if (list) {
        return JSON.parse(localStorage.getItem('items'))
    } else {
        return [];
    }
}


const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getItem());
    const [toggleSubmit, setToggleSubmit] = useState({ isToggle: true, index: -1 });
    const [view, setView] = useState({ isview: false, index: -1 });

    const addItem = () => {
        if (!inputData) {
            alert('please fill data!')
        }
        else {
            if (!toggleSubmit.isToggle) {
                console.log("edit mode");
                const updatedlist = [...items];
                console.log(toggleSubmit.index);
                updatedlist[toggleSubmit.index] = {
                    ...updatedlist[toggleSubmit.index],
                    name: inputData
                };
                setItems(updatedlist);


                setToggleSubmit({ isToggle: true, index: -1 });
            } else {
                const currentvalue = [...items]
                const allInputData = { id: new Date().getTime().toString(), name: inputData }
                currentvalue.push(allInputData);
                console.log(currentvalue);
                setItems(currentvalue);
            }
        }
        setInputData('');

    }

    // delete the item
    const deleteItem = (index) => {
        const updateitems = items.filter((element, id) => {
            console.log(index);
            return index !== id;
        });

        setItems(updateitems);
    }


    //edit the item
    const editItem = (id) => {

        console.log(id);
        setToggleSubmit({ isToggle: false, index: id });
        setInputData(items[id].name);
    }

    //remove all
    const removeAll = () => {
        setItems([]);
    }

    //view
    const viewItems = (id) => {
        setView({ ...view, isView: true, index: id })
        const value1 = [items[id]];
        console.log(".....", value1);
        setInputData(value1);
        localStorage.setItem('new-list', JSON.stringify({ value1: value1, index: id }));
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);


    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <div className='text'>
                        Add Your List Here
                    </div>
                    <div className='addItems'>
                        <input className="input-type" type='text' placeholder='Add Items..'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />

                        <div className='addBtn'>
                            <button className='add-btn' title="Add Item" onClick={addItem}>


                                <i className="fa fa-cart-plus"></i>
                            </button>
                        </div>


                    </div>
                    <div className='showItems'>
                        {
                            items.map((elem, ind) => {

                                return <div className='eachItem' key={ind}>

                                    <h3> {elem.name} </h3>
                                    <div className='btn-main'>
                                        <button className='edit-btn' title="edit Item" onClick={() => editItem(ind)}><i className="fa fa-edit"></i></button>
                                        <button className='del-btn' title="Delete Item" onClick={() => deleteItem(ind)}><i className="fa fa-trash"></i></button>
                                        <NavLink to="/view">
                                            <button onClick={() => viewItems(ind)}><i className="fa fa-eye"></i></button>
                                        </NavLink>
                                    </div>
                                </div>

                            })
                        }

                    </div>
                    <div className='removeBtn'>
                        <button onClick={removeAll}>Remove All</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo;
