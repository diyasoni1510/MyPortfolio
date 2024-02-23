import React from 'react'
import {motion} from "framer-motion"

const about = () => {
  return (
    <motion.div initial={{y:200}} whileInView={{y:0}} transition={{duration:1}} viewport={{ once: true }} className='py-8 flex flex-col gap-4'>
        <h1 className='text-2xl text-center '>ABOUT</h1>
        <div className='text-sm text-center'>
       <p>Experienced web developer in my 6th semester of BCA, with a year of professional experience across two companies. Passionate about creating innovative and user-friendly websites. Eager to contribute my skills and learn more in the ever-evolving field of web development.</p>
        <p>Dedicated web developer crafting digital experiences, blending creativity and code to bring ideas to life.</p>
        </div>
        <div className='flex flex-col items-end'>
            <p>SIGNATURE</p>
            <img src=''></img>
        </div>
    </motion.div>
  )
}

export default about