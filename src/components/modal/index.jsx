/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Card from './modalContent'
export default function Modal({data, open, setOpen, imgUrl}) {

  const cancelButtonRef = useRef(null)

  return (
          <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0  md:overflow-visible overflow-auto" initialFocus={cancelButtonRef} onClose={setOpen}>

        <div className="flex items-end justify-center min-h-screen md:px-4 pb-20 text-center sm:block sm:p-0 pt-24">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed  -z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
              
            <div className="inline-block align-bottom bg-white text-left overflow-visible shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="w-full mx-auto bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <img className="flex -top-24 items-center mx-auto relative w-auto h-32 object-cover rounded-full border-2 border-indigo-500" 
                src={imgUrl}/>
                
                <Card data={data} setOpen={setOpen}/>
                
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
          </>
  )
}