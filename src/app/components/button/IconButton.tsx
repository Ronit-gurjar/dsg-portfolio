import React from 'react'
import { motion, spring } from 'framer-motion';

type IconButtonProps={
    icon: JSX.Element;
    url: string;
}
const IconButton = ({icon, url}:IconButtonProps) => {
  return (
    <motion.button className='text-Theme-cream'
    initial={{scale:1}}
    whileHover={{scale:1.1}}
    transition={{type:spring}}
    >
        <a href={url}>{icon}</a>
    </motion.button>
  )
}

export default IconButton