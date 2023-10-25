import React, { useEffect, useState } from 'react'
import './Preloader.scss'
import {preLoaderAnim} from "../animations/index";
import { useNavigate } from 'react-router-dom';
function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
        useEffect(() => {
            preLoaderAnim()
        },[]);
        useEffect(() => {
          // Simulate a delay for the preloader (replace this with your actual animation)
          setTimeout(() => {
            setIsLoading(false);
      
            // Navigate to the landing page after the animation is completed
            navigate('/landing');
          }, 3790); // 3 seconds (adjust this value to match your animation duration)
        }, [navigate]);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Namaste</span>
      </div>
    </div>
  )
}

export default Preloader