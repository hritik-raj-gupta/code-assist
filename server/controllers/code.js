const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini = async (prompt) => {
    console.log(prompt)
    try {
        const genAI = new GoogleGenerativeAI(process.env.KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        console.log(responseText);

        const answer= responseText.replace(/```.*?\n|```$/g, "");

        // return responseText;
        return answer;
    } catch (error) {
        console.error("Error in gemini function:", error);
        throw error;
    }
};

const code=async(req, res)=>{
    console.log("hiii")
    const prompt="you respond with just code and no extra words or explanations, if you don't have code respond with i don't know"
    let input=req.body.ques;
    input=prompt + input
    try {
        const answer=await gemini(input)
        res.json({"message":answer})
    } catch (error) {
        console.log(error)
        res.json({"message":"internal server error"})
    }
}

module.exports=code