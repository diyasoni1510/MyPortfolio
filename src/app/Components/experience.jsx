import React from 'react'
import {motion} from "framer-motion"
const experience = () => {
  return (
    <motion.div className='py-8 flex justify-center items-center flex-col gap-4' initial={{y:200}} whileInView={{y:0}} transition={{duration:1}} viewport={{ once: true }}>
        <h1 className={`text-2xl text-center section-head`}>EXPERIENCE</h1>
        <div className='flex flex-col gap-4'>
            <div className='job text-sm flex gap-1'>
                <div className='text-xs w-1/4'>Oct 2023 -<br/> present</div>
                <div className='flex flex-col  items-center w-1/6'>
                    <div className='w-6 h-6 flex-shrink-0 rounded-full bg-white'></div>
                    <div className='w-1 h-full rounded bg-black'></div>
                </div>
                <div className='w-2/3'>
                    <h3>WEB DEVELOPER</h3>
                    <p>360 Adaptive Technologies</p>
                    <br />
                    <p>Web developer specializing in React.js and Statamic, shaping seamless and dynamic digital experiences with expertise.</p>
                </div>
            </div>
            <div className='job text-sm flex gap-1'>
                <div className='text-xs w-1/4'>June 2023 -<br/> Oct 2023</div>
                <div className='flex flex-col  items-center w-1/6'>
                    <div className='w-6 h-6 flex-shrink-0 rounded-full bg-white'></div>
                    <div className='w-1 h-full rounded bg-black'></div>
                </div>
                <div className='w-2/3'>
                    <h3>SOFTWARE TRAINEE</h3>
                    <p>Prayagrajxport</p>
                    <br />
                    <p>Collaborated on frontend and backend tasks, delivering a captivating and personalized user experience.</p>
                </div>
            </div>
            <div className='job text-sm flex gap-1'>
                <div className='text-xs w-1/4'>May 2023 -<br/> July 2023</div>
                <div className='flex flex-col  items-center w-1/6'>
                    <div className='w-6 h-6 flex-shrink-0 rounded-full bg-white'></div>
                    <div className='w-1 h-full rounded bg-black'></div>
                </div>
                <div className='w-2/3'>
                    <h3>WEB DEVELOPMNET INTERN</h3>
                    <p>Igoko Avionics</p>
                    <br />
                    <p>Led dynamic team in full stack website development during internship, spearheading end-to-end processes and fostering effective collaboration.</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default experience