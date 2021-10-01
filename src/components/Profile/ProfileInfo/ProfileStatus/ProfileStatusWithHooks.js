import './ProfileStatus.scss'
import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {
   let [ editMode, setEditMode ] = useState(false);
   let [ status, setStatus ] = useState(props.status);

   const activeEditMode = () => {
       setEditMode(true);
   }
   const deactivateEditMode = () => {
       setEditMode(false);
       props.updateStatus(status);
   }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

   return (
       <div className='profile__status'>
           { !editMode &&
              <p onDoubleClick={activeEditMode}>{props.status || 'no status'}</p>
           }
           { editMode &&
           <div>
               <input onChange={onStatusChange}
                      autoFocus={true}
                      onBlur={deactivateEditMode}
                      value={status}
               />
           </div>
           }
       </div>
   )

}

export default ProfileStatusWithHooks
