import React,{useState} from 'react'

const ToDo = () => {
  return (
    <>
    <div style={{height: "600px", width: "500px", border:"1px solid white", backgroundColor:"black", borderRadius:"10px" }}>
      <h1>TO DO  LIST</h1>
      {/* input and btn */}
      <div style={{height:"50px", width:"450px", display:"flex", margin:"auto", justifyContent:"centre", alignItems:"centre" }}>
      <input type="search" id="add-input" placeholder='Type task to add......' style={{height:"40px", width:"300px",fontSize:"16px",marginTop:"5px", borderRadius:"5px",border:"0px",marginLeft:"10px", paddingLeft:"10px"}}/>
      <input type="submit" value="Add Task"  style={{height:"40px",width:"100px",fontSize:"16px",marginTop:"5px", borderRadius:"5px", border:"0px", marginLeft:"30px"}}/>
      </div>
      {/* task box */}
      <div style={{height:"380px", width:"380px", backgroundColor:"white", borderRadius:"10px", margin:"auto", marginTop:"10px"}}>

      </div>
    </div>
    </>
  )
}

export default ToDo
