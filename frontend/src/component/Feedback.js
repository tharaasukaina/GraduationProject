import React, { useState } from "react";
import '../style/Feedback.css';

const Feedback = () =>{
    const [selectedEmotion, setSelectedEmotion] = useState(''); // Default to 'smile'
    const [feedbackText, setFeedbackText] = useState('');
  
    const handleEmotionClick = (emotion) => {
      setSelectedEmotion(emotion);
    };
  
    const handleFeedbackChange = (event) => {
      setFeedbackText(event.target.value);
    };
  
  
    const handleSubmit = () => {
        // Perform some action with the selected emotion and feedback text, such as sending it to a server
        console.log('Selected Emotion:', selectedEmotion);
        console.log('Feedback Text:', feedbackText);
    
        // Reset form after submission
        setSelectedEmotion('');
        setFeedbackText('');
      };
  
    return (
      <div className="content">
        <div className="cont">
          <div className="head">
            
            <div className="heading"><h1>Your opinion matters to us</h1></div>
            <div className="close">
             
            </div>
          </div>
        <div className="mid">
        <div className={`media ${selectedEmotion === 'angry' ? 'active' : ''}`} onClick={() => handleEmotionClick('angry')}>
            <img src="https://cdn-icons-png.flaticon.com/128/3260/3260838.png" alt="angry" />
          </div>
          <div className={`media ${selectedEmotion === 'moderate' ? 'active' : ''}`} onClick={() => handleEmotionClick('moderate')}>
            <img src="https://cdn-icons-png.flaticon.com/128/42/42901.png" alt="moderate" />
          </div> 
          <div className={`media ${selectedEmotion === 'neutral' ? 'active' : ''}`} onClick={() => handleEmotionClick('neutral')}>
            <img src="https://cdn-icons-png.flaticon.com/128/3260/3260877.png" alt="neutral" />
          </div>
           <div className={`media ${selectedEmotion === 'smile' ? 'active' : ''}`} onClick={() => handleEmotionClick('smile')}>
            <img src="https://cdn-icons-png.flaticon.com/128/569/569501.png" alt="smile" />
          </div> 
          <div className={`media ${selectedEmotion === 'happy' ? 'active' : ''}`} onClick={() => handleEmotionClick('happy')}>
            <img src="https://cdn-icons-png.flaticon.com/128/1356/1356639.png" alt="happy" />
          </div>
        </div>
        <div className="textarea">
          <p>Share your experience</p>
          <textarea className="exp" id="exp" placeholder="Let us know..." value={feedbackText} onChange={handleFeedbackChange}></textarea>
        </div>
        <div className="end">
          <div className="submission">
            <button className="sub btn" onClick={handleSubmit}>Send</button>
          </div>
          
        </div>
      </div>
    </div>
    );
}
export default Feedback; 