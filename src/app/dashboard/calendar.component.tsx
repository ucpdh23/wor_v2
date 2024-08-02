import { parseToDate } from "@/lib/dateUtils";
import { cookies } from "next/headers";


export default function Calendar() {
    const jwt = cookies().get("jwt")?.value
    var date : Date = new Date();
    if (jwt) {
        const context = JSON.parse(jwt);
        date = parseToDate(context.date);
    }

    const month = date.toLocaleString('default', { month: 'long' });
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    

    return <div className="h-full w-full flex flex-col bg-royal-purple rounded-3xl m-4 border border-royal-lightly-purple">
        <div className="w-full flex flex-col items-center">
            <div className="h-32 w-32 bg-red-950 rounded-lg flex flex-col items-center justify-center text-white">
                <div className="text-5xl">{date.getDate()}</div>
                <div className="text-xl">{month} - {date.getFullYear()}</div>
                <div className="text-xs">{weekday}</div>
            </div>
            <div className="">
                Competicionse actuales
            </div>
        </div>
        <div className="basis-full w-full">Puntos UCI</div>
        <div className="basis-full w-full">Palmares</div>
    </div>
}