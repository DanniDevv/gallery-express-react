import { useEffect, useState } from 'react'
import axios from 'axios'
const baseURL = 'http://localhost:3000/api/gallery/'

export default function Gallery () {
  const [gallery, setGallery] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGallery(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <div className='flex justify-center items-center my-24'>
        <div className='grid grid-cols-3 gap-4 md:px-32'>
          {gallery.map((gallerys, index) => {
            return (
              <div key={index}>

                <p>{gallerys.name}</p>
                <p>{gallerys.description}</p>

                <img
                  src={`${baseURL}${gallerys.image}`}
                  alt={gallerys.name}
                  className='h-full w-full'
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
