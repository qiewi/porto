import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Background */}
      <div className="h-40 bg-[#406CAE] relative">
        {/* <Image
          src="/placeholder.svg?height=160&width=400"
          alt="Header illustration"
          fill
          className="object-cover opacity-70"
          priority
        /> */}
      </div>

      {/* Profile Section */}
      <div className="px-4 -mt-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-b-4 border-r-4 border-black bg-yellow-400 relative mb-4">
            {/* <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            /> */}
          </div>

          {/* Name and Title */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold">Qie</h1>
            <div className="w-6 h-6 bg-yellow-400 rounded-lg border-black border" />
          </div>
          <p className="text-sm text-gray-600 max-w-[250px] mb-6">
            A Passionate Software Engineer with Remarkable Management Skill
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-6">
            <div className="bg-[#406CAE] rounded-xl border-2 border-b-4 border-r-4 border-black p-3 text-white">
              <div className="text-xl font-bold">30+</div>
              <div className="text-xs">Experiences</div>
            </div>
            <div className="bg-[#406CAE] rounded-xl border-2 border-b-4 border-r-4 border-black p-3 text-white">
              <div className="text-xl font-bold">7+</div>
              <div className="text-xs">Projects</div>
            </div>
            <div className="bg-[#406CAE] rounded-xl border-2 border-b-4 border-r-4 border-black p-3 text-white">
              <div className="text-xl font-bold">10+</div>
              <div className="text-xs">Tech Stacks</div>
            </div>
          </div>

          {/* Contact Button */}
          <Button 
            className="w-full max-w-sm bg-yellow-400 hover:bg-yellow-500 text-white mb-6 justify-between py-6 text-xl font-bold"
          >
            Contact Now
            <MessageCircle />
          </Button>

          {/* Navigation Buttons */}
          <div className="max-w-sm w-full mb-6 flex flex-row items-start justify-start gap-2">
            <Button 
              variant="default" 
              className="bg-[#406CAE] border-r-4"
            >
              Project
            </Button>
            <Button 
              className="bg-white text-black border-r-4"
            >
              Experience
            </Button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-2 border-b-4 border-r-4 border-black rounded-xl p-3">
                <div className="aspect-video relative mb-2 border rounded-xl border-black">
                  {/* <Image
                    src="/placeholder.svg?height=120&width=200"
                    alt={`Project ${item}`}
                    fill
                    className="object-cover rounded-lg"
                  /> */}
                </div>
                <div className='flex justify-between flex-row items-center mt-4'>
                  <div className='flex flex-col items-start'>
                    <h3 className="font-semibold text-xs mb-1">Project Name</h3>
                    <h4 className="text-xs text-gray-500">Subtitle</h4>
                  </div>
                  <div className='flex flex-col items-end'>
                    <h3 className="font-semibold text-xs mb-1">19/11/24</h3>
                    <h4 className="text-xs text-gray-500">Created</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

