import { PlusIcon } from "@heroicons/react/24/outline"

function NewChat(){
    return (
      <div className="flex justify-center items-center border border-gray-300 chatRow">
        <PlusIcon className="h-4 w-4"/>
        <p>New Chat</p>
      </div>
    )
  }
  
  export default NewChat