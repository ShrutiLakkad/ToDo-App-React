import React, { useState } from "react";


function View() {
    const newValue = JSON.parse(localStorage.getItem('new-list'));
    console.log(newValue);
    const newval = newValue.value1[0].name;
    console.log("newval...", newval);
    const [viewdata, setisView] = useState('');
    const [View, setView] = useState({ isEdit: false });

    const Viewdata = () => {
        setisView(newval);
        setView({ isEdit: true });
        console.log(newval, "..");
    }

    const editedData = () => {
        const value = JSON.parse(localStorage.getItem('items'));
        value[newValue.index].name = viewdata;
        localStorage.setItem('items', JSON.stringify(value));
        const x = JSON.parse(localStorage.getItem('new-list'));
        console.log(x);
        x.value1[0].name = viewdata;
        console.log(x);

        localStorage.setItem('new-list', JSON.stringify(x));
        setView({ isEdit: false });
        console.log(value, "...val");
        console.log("editedData")
    }

    return (<>

        <div className='main-div'>
            <div className='child-div'>

                <div className='addItems'>
                    <input className="input-type" type='text' placeholder='Add Items..' onChange={(e) => setisView(e.target.value)} value={viewdata}
                    />
                    <div className='addBtn'>
                        <button className='add-btn' title="Add Item" onClick={() => editedData()}>
                            <i className="fa fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
                <div className='showItems'>
                    <h3 className="editData">{newval}</h3>
                    <div className='btn-main'>
                        <button className='edit-btn' title="edit Item" onClick={() => Viewdata()}><i className="fa fa-edit"></i></button>
                    </div>
                </div>
            </div>
        </div>





    </>
    )


}
export default View;