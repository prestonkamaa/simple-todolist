import React from "react" 
import { MdOutlineDeleteOutline } from "react-icons/md"; 
import { MdDriveFileRenameOutline } from "react-icons/md";  

export default function MainBody(){
    return( 
            <div className="main-body"> 
              <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Directing or performing Website updates.  </p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                </div>
                <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Validating  form test.</p>                 
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                </div> 
              <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Edit, write and designing website content.</p>                
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                 
                </div>
                <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Back up files from Websites for recovery.</p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                </div> 
              <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Directing or performing Website updates.  </p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                </div>
                <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Validating  form test.</p>                 
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                </div> 
              <div className="checkbox">
                <input 
                    type="checkbox"
                    name="toDoItems"
                    value=""
                  //  onChange={e} 
                  className="checkbox"
                /> 
                <p>Edit, write and designing website content.</p>                
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons" /> 
                 
                </div>  
                <hr />
                <div className="endsection">
                  <p className="undonetask">Undone Tasks: 0</p>
                  <p>Add New Task + </p>
                </div>
            </div> 
    )
}