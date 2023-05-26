import React from 'react'
import filterData from '../assets/data/filterData'

const FilterLayout = ({ setFilter }) => {
    return (
        <div className='flex flex-wrap space-x-2 items-center justify-center'>
            {
                filterData.map((item, i) => (
                    <div onClick={() => setFilter(item.name)} className='bg-gray-100 cursor-pointer transition hover:bg-gray-200 px-2 py-1 mx-2 rounded-2xl' key={item.id}>
                        {item.name}
                    </div>
                )

                )
            }
        </div>
    )
}

export default FilterLayout