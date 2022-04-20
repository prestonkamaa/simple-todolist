import React from "react" 
import { MdOutlineDeleteOutline } from "react-icons/md"; 
import { MdDriveFileRenameOutline } from "react-icons/md";  
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { MdPanoramaFishEye } from "react-icons/md";

export default function MainBody(){

    // const[toDos,setToDos] = useState(false)

    // function doneItems(){
    //     setToDos((prevState) => {
    //         !prevState
    //     })
    // } 

function handleClick(){

}

    return( 
            <div className="main-body">
              <div className="checkbox">
                <MdOutlineCheckCircleOutline className="checkbox-icon-done" />  
                <p onClick={handleClick}>Directing or performing Website updates.  </p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
              </div>
              <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" />  
                <p onClick={handleClick}>Edit, write and designing website content.  </p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
              </div>   
                <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" /> 
                <p>Validating  form test.</p>                 
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                </div> 
              <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" /> 
                <p>Edit, write and designing website content.</p>                
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                 
                </div>
                <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" />  
                <p>Back up files from Websites for recovery.</p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                </div> 
              <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" /> 
                <p>Directing or performing Website updates.  </p>
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                </div>
                <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" /> 
                <p>Validating  form test.</p>                 
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                </div> 
              <div className="checkbox">
                <MdPanoramaFishEye className="checkbox-icon" /> 
                <p>Edit, write and designing website content.</p>                
                <MdDriveFileRenameOutline className="icons" /> 
                <MdOutlineDeleteOutline className="icons delete-icon" /> 
                 
                </div>  
                <hr />
                <div className="endsection">
                  <p className="undonetask">Undone Tasks: 0</p>
                  <p>Add New Task + </p>
                </div>
            </div> 
    )
}