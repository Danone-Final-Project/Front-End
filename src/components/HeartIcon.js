import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

const HeartIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <AiFillHeart
      onClick={handleClick}
      color={isClicked ? 'red' : 'black'}
      size={24}
    />
  );
};

export default HeartIcon;
