import React from 'react'
import DisplayCard from "../components/DisplayCard";
import DateForm from '../components/DateForm';


import "./bookOnline.css"

import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";

const BookOnline = () => {
  return (
    <>
    
    <section id='bookOnline'>
    {/* process component */}

      <div className="mainContainer">
        <aside>
          <DateForm />
        </aside>
        <main>
            <div className='bar'>
              <h4>You found 2 rooms from ₹2,500.00</h4>
              <select>
              <option value="lowest">Sort by: Lowest price</option>
              <option value="highest">Sort by: Highest price</option>
              <option value="default">Sort by: Default</option>
              </select>
            </div>
            
            <DisplayCard
              img={room1}
              name="AC Rooms"
              desc="This room is with great view of Naini Lake"
              price={3000.00}
            />

            <DisplayCard
              img={room2}
              name="Non-AC Rooms"
              desc="This room is with no great outside view"
              price={2500.00}
            />

            {/* <div className='cards'>

            </div>
            <div className='cards'>

            </div> */}
        </main>
      </div>
    </section>

    </>
  )
}

export default BookOnline