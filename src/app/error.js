'use client' 
export default function Error({ error }) {
  return (
    <div className='flex justify-center items-center'>
      <h2 className="text-5xl font-extrabold">{error?.message}</h2>
      
    </div>
  )
}