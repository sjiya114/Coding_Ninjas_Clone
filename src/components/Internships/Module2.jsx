import React from 'react'
import Marquee from 'react-fast-marquee';
function Module2() {
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
          <Marquee>
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/excel-qdthu6ljxozekmemkqxxj1p6o88lz5sk1o2r87r0j8.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail-removebg-preview-qrjq5ipsvv5668it5zg0uppql88pey1g5u46szex6c.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/python-qdthu8h8bd1z7ubw9rr6o183uzzcek00pxdq6ro86s.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/256px-New_Power_BI_Logo.svg-ql3bny1ku3uhhgzs3ekydv3a0515fcff8204f64nlg.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/chatgpt-qxvb8d80y2m8zhykdlzywe8d7f22ubgj4zkxg6uph0.webp" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/matplotlib-qxt2y9uhhcapltzdhuodx77rwdymx8zjgcojva0uwk.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/pandas-qxt2y70ywu6un03gybgi7pxe48cja5ocfyq3fg51f8.png" alt="" />
            <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/elementor/thumbs/numpy-qxt2y55aj649zs679an92qegxglsurgvrpf4gw7tro.png" alt="" />
          </Marquee>
         <button className='text-white bg-indigo-800 px-4 py-2 rounded-lg'>Download Curriculum</button>
            <div>
        <p>Learn live from Expert Instructors</p>
           <div className='flex flex-row space-x-4'>
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253846-1.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253847-2.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253845-2.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253846-1.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253847-2.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253845-2.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253846-1.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253847-2.png" alt="" />
             <img src="https://www.codingninjas.com/careercamp/wp-content/uploads/2024/12/Group-1437253845-2.png" alt="" />
           </div>
            </div>
        </div>
  )
}

export default Module2
