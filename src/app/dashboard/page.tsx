import Calendar from "./calendar.component";
import Team from "../../components/custom/TeamComponent";

import { LogoutButton } from "@/components/custom/LogoutButton";

export default function Dashboard() {
    return <div className="h-screen v-screen bg-gradient-to-r from-royal-dark-purple to-royal-bright-purple flex flex-col rounded-3xl m-4">
            <div className="h-20 flex flex-row text-white space-x-4 bg-royal-purple rounded-3xl m-4 border border-royal-lightly-purple">
                <div className="flex items-center justify-center text-almost-white text-2xl font-black w-24"><span>WOR</span></div>
                <span className="basis-full flex items-center justify-center text-almost-white text-almost-white font-light text-xl">About Features Whitepaper Contacts</span>
                <div className="flex items-center justify-center w-24">
                    <LogoutButton />
                </div>
            </div>
            <div className="basis-full flex flex-row text-white">
                <div className="basis-2/3 flex flex-col">
                    <Team />
                </div>
                <div className="basis-1/3 flex flex-col">
                    <Calendar />
                </div>
            </div>
            <footer className="h-8 bg-black flex flex-col justify-center items-center text-white">
                <span>XanLF (c) 2024</span>
            </footer>
        </div>
}