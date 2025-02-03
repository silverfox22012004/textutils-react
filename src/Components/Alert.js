import React, { useState, useEffect } from 'react';

export default function Alert(props) {
  const [alertClass, setAlertClass] = useState('');
  
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (props.alert) {
      // Show the alert immediately with the slide-in effect
      setAlertClass('show');
      
      // After 3 seconds, start the slide-out effect
      const slideOutTimer = setTimeout(() => {
        setAlertClass('hide');
      }, 3000); // Alert stays for 3 seconds before starting to slide out

      // Cleanup: reset alert class after the full animation cycle (3s visible + 1s slide-out)
      setTimeout(() => {
        setAlertClass('');
      }, 3500); // Alert is removed from the DOM after 4 seconds

      return () => clearTimeout(slideOutTimer); // Cleanup the timer when alert changes or component unmounts
    }
  }, [props.alert]); // This effect runs every time the alert changes

  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} ${alertClass}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> &nbsp; {props.alert.msg}
      </div>
    )
  );
}
