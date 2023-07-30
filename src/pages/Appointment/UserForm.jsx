import { useLocation, useNavigate } from 'react-router-dom'
// import { toast } from 'react-hot-toast';
import {ImSpinner9} from 'react-icons/Im'


const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  // handle registration
  const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

  }

  return (
    <div className='flex justify-center  items-center'>
      <div className='flex flex-col rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className=' text-center'>
          <h1 className=' text-4xl font-bold'>User Information</h1>
          <p className='text-sm text-gray-400'>Welcome to the Language Club</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className=' ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-0'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
        
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Enter your number
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                required
                placeholder='Enter Mobile Number'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='text' className='text-sm mb-2'>
                  Message
                </label>
              </div>
              <textarea
                type='text'
                name='message'
                id='password'
                required
                placeholder='Write your message'
                className='textarea textarea-secondary w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md  text-white'
            >
              Submit
              {/* {loading? <ImSpinner9 className='mx-auto animate-spin' size={26}/>: "Continue"  } */}
            </button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default UserForm