import React, { useState } from 'react'
import axios from "axios"
import "./app.css"
import './QuestionForm.css';

const App = () => {

  const [ques, setQues]=useState("")
  const [answer, setAnswer]=useState()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      console.log("sent")
      // const response=await axios.post("http://localhost:8007/api/code", {ques})

      const response=await axios.post("https://code-assist-crvp.onrender.com/api/code", {ques})

      console.log(response.data.message)
      setAnswer(response.data.message)
    } catch (error) {
      console.log("error during fetching answer")
    }
  }

  // return (
  //   <div className='whole'>
  //     <form onSubmit={handleSubmit}>
  //       <label>Ask Your Question</label>
  //       <input type='text' value={ques} onChange={e=>setQues(e.target.value)} />
  //       <button type='submit'>Ask</button>
  //     </form>
  //    {answer && <article>{answer}</article>} 
  //   </div>
  // )




  

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Ask a Question</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="question" className="form-label">Ask Your Question</label>
          <input
            id="question"
            type="text"
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            placeholder="Type your question..."
            className="form-input"
          />
          <button type="submit" className="form-button">Ask</button>
        </form>
        {answer && (
          <div className="form-answer">
            <article>{answer}</article>
          </div>
        )}
      </div>
    </div>
  );
}



export default App