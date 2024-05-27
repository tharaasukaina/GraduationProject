import axios from 'axios';

export const youreExperince1 = async (emotion, text) => {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/youreExperince", {
      emotion,
      text
    });
    if (response.status === 200) {
      console.log("Feedback submitted successfully");
      return response.data;
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw new Error("Failed to submit feedback");
  }
};


// لو لباك اند بشتغل ع البورتت 3000 
// الفرونت عاي بروت عادي 
// بما انو الباك اند بشتغل ع 3000  لازم الفرونت ايند 
// لما ااضرب ال api  عالبورت 3000 
// مشان يقددر يوصل للباك اند والباك اند  لازم تكون شغالة 
// السيرفر يعني الباك اند وهو شغال بتوقع انو يجيه اي بي ايه ع بورت 3000 
// 
