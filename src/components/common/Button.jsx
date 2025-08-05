import React from 'react';
import '../../styles/Project.css'; // or include styles in main CSS

// const Button = ({ text, url, small = false, primary = true }) => {
//   const className = `button ${small ? 'small' : ''} ${primary ? 'primary' : 'outline'}`;
  
//   return (
//     <a href={url} className={className}>
//       {text}
//     </a>
//   );
// };


// In your Button component
const Button = ({ text, url, onClick, className = '', small, ...props }) => {
  const buttonClass = `btn ${small ? 'btn-small' : ''} ${className}`.trim();
  
  if (url) {
    return (
      <a href={url} className={buttonClass} {...props}>
        {text}
      </a>
    );
  }
  
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;