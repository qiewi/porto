import Image from 'next/image';

// components/ProjectCard.tsx
interface ProjectCardProps {
    title: string;
    subtitle: string;
    date: string;
}
  
export default function ProjectCard({ title, subtitle, date }: ProjectCardProps) {
    return (
        <div className="border-2 border-b-4 border-r-4 border-black rounded-xl p-3">
            <div className="aspect-video relative mb-2 border rounded-xl border-black">
                <Image 
                    src="/path/to/your/image.jpg" 
                    alt="" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-xl"
                />
            </div>
            <div className="flex justify-between flex-row items-center mt-4">
                <div className="flex flex-col text-[10px] items-start">
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <h4 className="text-[10px] text-gray-500">{subtitle}</h4>
                </div>
                <div className="flex flex-col text-[10px] items-end">
                    <h3 className="font-semibold mb-1">{date}</h3>
                    <h4 className="text-[10px] text-gray-500">Created</h4>
                </div>
            </div>
        </div>
    );
}
  