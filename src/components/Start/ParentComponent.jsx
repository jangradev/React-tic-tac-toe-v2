import StartPage from './StartPage';
import { useState } from 'react';

const ParentComponent = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));

   return <StartPage squares={squares} />;
};

export default ParentComponent;
