import Image from 'next/image'
import { SunIcon } from '@heroicons/react/24/outline'
import { BoltIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white p-24">
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>


      <div className='flex space-x-4 text-center'>
        
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 '/>
            <h2>Examples</h2>
          </div>
          <div className='space-y-4'>
            <p className='infoText'>&quot;Explain this code to me&quot;</p>
            <p className='infoText'>&quot;What is the difference between frontend and backend developer ?&quot;</p>
            <p className='infoText'>&quot;Suggest places to visit in Europe&quot;</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8 '/>
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-4'>
            <p className='infoText'>Change the chatgpt model to use</p>
            <p className='infoText'>Messages are stored in Firebase&apos;s FireStore</p>
            <p className='infoText'>Hot Toast Notification when ChatGPT is thinking</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8 '/>
            <h2>Limitations</h2>
          </div>
          <div className='space-y-4'>
            <p className='infoText'>May ocassionally generate incorrect information</p>
            <p className='infoText'>May ocassionally produce biased content</p>
            <p className='infoText'>Limited knowledge of world & events after 2021 </p>
          </div>
        </div>

      </div>

    </div>
  )
}
