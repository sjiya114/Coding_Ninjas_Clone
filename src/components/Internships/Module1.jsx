import React from 'react'
import { assets } from '../../assets/assets';

function Module1() {
        const [open,setOpen]=useState(false);
  return (
     <div   className='mt-10 hover:scale-101 pt-10 rounded-lg '>
        <p className='text-center pt-20 text-gray-500'>Program Modules</p>
        <div className=' mx-[18%] flex flex-col'>
         <div className='mx-10 pb-8 pt-4 border-b-2 border-gray-500 text-gray-500 space-y-2'>
      <div className='flex flex-row justify-between'>
        <h1  className=' text-bold' >Introduction to Programming (Java / C++ / Python)</h1>
      <h1 onClick={()=>{setOpen(!open)}} className='text-4xl cursor-pointer text-bold'>{open?'-':'+'}</h1>
      </div>
      {open && <p  className=' font-semibold'  ><ul>
         <li>
            <p>Basics of Programming:</p>
            <p>– Understand variables, data types, and basic input/output operations.</p>
         </li>
         <li>
             <p>Loops and Functions:</p>
            <p>– Master iterative processes using loops and organize code with reusable functions.</p>
         </li>
         <li>
             <p>Arrays/Lists:</p>
            <p>– Explore how to store, access, and manipulate collections of data efficiently.</p>
         </li>
         <li>
            <p>Strings and 2D Lists:</p>
            <p>– Work with text data and multi-dimensional structures for advanced problem-solving.s</p>
         </li>
        
        </ul></p>}
    </div>
    <div className='mx-10 pb-8 pt-4 border-b-2 border-gray-500 text-gray-500 space-y-2'>
      <div className='flex flex-row justify-between'>
        <h1  className=' text-bold' >Data Structures & Algorithms</h1>
      <h1 onClick={()=>{setOpen(!open)}} className='text-4xl cursor-pointer text-bold'>{open?'-':'+'}</h1>
      </div>
      {open && <p  className=' font-semibold'  ><ul>
         <li>
            <p>Problem Solving Techniques:</p>
            <p>– Develop logical thinking and strategies to break down complex problems into manageable parts.

</p>
         </li>
         <li>
             <p>Object Oriented Programming:
</p>
            <p>– Learn the principles of OOP, including classes, objects, inheritance, and polymorphism, to design modular and scalable programs</p>
         </li>
         <li>
             <p>Linear Data Structures:</p>
            <p>– Master arrays, linked lists, stacks, and queues for efficient data storage and retrieval.</p>
         </li>
         <li>
            <p>Trees:</p>
            <p>– Understand hierarchical data structures and perform operations like traversal, insertion, and deletion.

</p>
         </li>
           <li>
            <p>Advanced Data Structures:</p>
            <p>– Dive into heaps, graphs, and hash tables to solve complex computational problems.

</p>
         </li>
           <li>
            <p>Dynamic Programming:</p>
            <p>–– Solve optimisation problems using techniques like memoization and tabulation to improve efficiency.

</p>
         </li>
        
        </ul></p>}
    </div>
     </div>
     <button className='text-white bg-indigo-800 px-4 py-2 rounded-lg'>Download Curriculum</button>
       
       <div>
        <div className='flex flex-row space-x-4'>
          <img src="" alt="" />
          <div className='flex flex-col space-y-2' >
            <p>Ankush Singla</p>
            <p>Co-Founder</p>
            <div>
                <img src={assets.iitd} alt="" /><img src={assets.amazon} alt="" /><img src={assets.facebook} alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-row space-x-4'>
          <img src="" alt="" />
          <div className='flex flex-col space-y-2'>
            <p>Nidhi Aggarwal</p>
            <p>Instructor</p>
                <img src={assets.iitd} alt="" />
          </div>
        </div>
       </div>
    </div>
  )
}

export default Module1
