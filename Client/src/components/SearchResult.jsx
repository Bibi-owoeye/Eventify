import React from 'react'

const SearchResult = () => {
  return (
    <>
    
    <div className='container'>

        <div className='sidebar w-[20%] ps-10'>
            <div className='mt-20 border-0 border-r border-dark-400'>

            
            <h2>Filters</h2>

            <h6>Price</h6>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Free</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Paid</label>
            </div>
            <hr className='ms-4 me-3'/>

            <h6>Date</h6>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Today</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Tomorrow</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">This Week</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">This Weekend</label>
            </div>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Pick a Date</label>
            </div>
            <hr className='mx-3' />

            <h6>Category</h6>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Adventure Travel</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Art Exhibitions</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Auctions and Fund raisers</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Beer Festivals</label>
            </div>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Benefit Concerts</label>
            </div>
            <hr className='ms-4 me-3'/>
            
            <h6>Format</h6>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Community Engagement</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Concerts and Performances</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Conferences</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Experiental Events</label>
            </div>
            <div>
                <input type="checkbox" name="" id="" className='m-2'/>
                <label htmlFor="">Festivals and Fairs</label>
            </div>

            </div>
        </div>

        <div className='mainpage'>

        </div>


    </div>
    
    
    
    </>
  )
}

export default SearchResult