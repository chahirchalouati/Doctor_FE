import React, { useState } from 'react'
import { HiOutlineMenu, IoPersonOutline } from 'react-icons/all'
import { useHistory } from 'react-router-dom';

function DropMenu() {

    const history = useHistory();


    const [Open, setOpen] = useState(false);


    return (
        <div className="drop_menu">
            <HiOutlineMenu className='menu_icon' onClick={e => setOpen(o => !Open)} size={30}></HiOutlineMenu>

            {  Open && <div className="menu_drop_box">
                <div className="menu_drop_box_items">
                    <div className="menu_drop_box_items_headers">Healthcare</div>
                    <div className="menu_drop_box_item" onClick={e => history.push("/signin")}> <IoPersonOutline size={20} style={{ marginRight: '10px' }}></IoPersonOutline> <span>Sign-In</span></div>
                    <div className="menu_drop_box_item"></div>
                    <div className="menu_drop_box_item"></div>
                    <div className="menu_drop_box_item"></div>
                </div>

            </div>
            }




        </div>
    )
}

export default DropMenu
