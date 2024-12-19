import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [ques, setQues]=useState("")
  const [answer, setAnswer]=useState()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      console.log("sent")
      const response=await axios.post("http://localhost:8007/api/code", {ques})

      console.log(response.data.message)
      setAnswer(response.data.message)
    } catch (error) {
      console.log("error during fetching answer")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ask Your Question</label>
        <input type='text' value={ques} onChange={e=>setQues(e.target.value)} />
        <button type='submit'>Ask</button>
      </form>
     {answer && <article>{answer}</article>} 
    </div>
  )
}

export default App