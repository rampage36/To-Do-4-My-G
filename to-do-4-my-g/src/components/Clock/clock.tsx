import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import  './clock.css'


function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
        <Box>
            <Typography variant="h1"
                        textAlign={"center"}
                        className='clock'>
            {date.toLocaleTimeString()}
            </Typography>
        </Box>
  );
}
export default Clock;