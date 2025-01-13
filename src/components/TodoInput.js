import React,{useState} from "react";

function TodoInput (props) {
    const[inputText,setInputText]=useState('');

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
          props.storeText(inputText)
          setInputText("")
        }
    }

   //when user presses enter, we'll store the text in the array and clear the input field
  return (
    <div>
        <input type='text' placeholder='Add a new todo...' 
            onChange={e=>{
                setInputText(e.target.value)
                
            }}
            value={inputText}
            onKeyDown={handleEnterPress}  //when enter is pressed
        />

        {/* //whne the butto is clicked, we;ll have to run a funtion to store input text in a array */}
        <button className="add-btn" 
      onClick={()=>{
        props.storeText(inputText)
        setInputText("")
      }}>+</button>
    </div>
    
  )
}

export default TodoInput;