import {FaTimes} from 'react-icons/fa';


const Modal = ({handleClick}) => {
  return (
    <div className='overlay'>
        <div className="modal">
            <div className="cross">
                <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </div>
  )
}

export default Modal