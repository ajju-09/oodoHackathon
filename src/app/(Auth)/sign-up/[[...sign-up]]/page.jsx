import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-screen flex justify-center items-center '>
      <div className='shadow-2xl shadow-gray-600 rounded-2xl'> 
      <SignUp className="bg-black" />
      </div>
    </div>
  )
}