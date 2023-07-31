import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
const InstructorModal = ({ closeModal, isOpen, item }) => {
  
  const {instructorName,instructorPhoto, instructorEmail, seats} = item;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className=' md:w-[34rem] md:h-[24rem] transform overflow-hidden rounded-2xl bg-slate-700  p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-neutral-50'
                >
                   <div className='flex flex-col-reverse md:flex-row lg:flex-row md:justify-between items-center w-full h-full  '>
                   <div className='text-start h-full w-full'>
                      <p className='font-semibold'>Name: {instructorName}</p>
                      <p>Email: {instructorEmail}</p>
                      <p>Available Seats: {seats}</p>
                   </div> 
                   <div className=''>
                      <img className='w-[24rem] h-[14rem] object-fill rounded-lg '  src={instructorPhoto} alt="" />
                   </div>
                   </div>
                 
                  
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-neutral-50'>
                  Want to book an appointment?
                  </p>
                </div>
                <hr className='mt-8 ' />
                <div className='flex mt-2 justify-around'>
                  <Link to={`/appointment/${item._id}`} state={{item:item}}>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                  >
                    Continue
                  </button>
                  </Link>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default InstructorModal