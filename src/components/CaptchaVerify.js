import React, { useState, useEffect, useRef } from 'react';
import './SocialConnect.css';

const CaptchaVerify = () => {
  const [inputValue, setInputValue] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    createCaptcha();
  }, []);

  const clearScreen = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const createCaptcha = () => {
    clearScreen();
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 9;
    let captcha = "";
    for (let i = 0; i < lengthOtp; i++) {
      let index = Math.floor(Math.random() * charsArray.length);
      captcha += charsArray[index];
    }
    setCaptchaText(captcha);
    addTextToImage('https://5.imimg.com/data5/GL/TG/MY-45342195/wall-textures.jpg', captcha);
  };

  const addTextToImage = (imagePath, text) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let img = new Image();
    img.src = imagePath;
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      context.font = "25px Arial";
      context.fillStyle = "#FF0000";
      context.fillText(text, 10, canvas.height / 2);
    };
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const verifyCaptcha = (e) => {
    e.preventDefault();
    if (inputValue === captchaText) {
      alert("Captcha Verified Successfully");
    } else {
      alert("Captcha Mismatch. Please try again.");
      setInputValue('');
      createCaptcha();
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width="200" height="100" style={{border: '1px solid #ddd', marginBottom: '10px'}}></canvas>
      <form onSubmit={verifyCaptcha}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter Captcha" />
        <button type="submit">Verify Captcha</button>
      </form>
    </div>
  );
};

export default CaptchaVerify;
