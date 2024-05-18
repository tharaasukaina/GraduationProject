const axios = require("axios");

 const youreExperince = async (emotion, text) => {
  try {
    const response = await axios.post("/api/v1/youreExperince", {
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

module.exports = youreExperince;
