// components/StatsCard.tsx
interface StatsCardProps {
    title: string;
    value: string;
}

export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className="w-25 bg-[#406CAE] rounded-xl border-2 border-b-4 border-r-4 border-black p-3 text-white items-center justify-center">
            <div className="text-2xl sm:text-xl font-bold">{value}</div>
            <div className="text-[10px]">{title}</div>
        </div>
    );
}
  