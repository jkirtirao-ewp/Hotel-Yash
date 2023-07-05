import React from 'react'
import DateForm from '../../components/DateForm';
import DisplayCard from './components/DisplayCard';


import "./bookOnline.css"

import room1 from "../../assets/room1.jpeg";
import room2 from "../../assets/room2.jpeg";

const BookOnline = () => {

  const dummyData = {
    startDate: "2023-07-02",
    endDate: "2023-07-03",
    adult: 1,
    children: 1,
  };

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
              <h4>You found 2 rooms from ₹3,200.00</h4>
              <select>
              <option value="lowest">Sort by: Lowest price</option>
              <option value="highest">Sort by: Highest price</option>
              <option value="default">Sort by: Default</option>
              </select>
            </div>
            
            <DisplayCard
              img={room1}
              name="AC Rooms"
              desc="AC on, stress off"
              price={1600.00}
              formData={dummyData}
            />

            <DisplayCard
              img={room2}
              name="Non-AC Rooms"
              desc="The best things in life are free"
              price={2500.00}
              formData={dummyData}
            />
        </main>
      </div>
    </section>

    </>
  )
}

export default BookOnline