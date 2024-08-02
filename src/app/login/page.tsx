import Image from "next/image"
import LoginComponent from "../../components/custom/LoginComponent"

export default function Login() {
    return <div className="h-screen v-screen bg-red-400 flex flex-row">
        <div className="basis-1/3 bg-black flex flex-col justify-center items-center">
            <Image src="/img/portrait.jpg" alt="portrait" width={600} height={700} />
        </div>
        <div className="basis-2/3 bg-black flex flex-col text-white">
            <div className="basis-1/3 flex flex-col justify-center items-center">
                <span className="text-7xl font-bold">Cycling On Roads</span>
                <span className="text-xl mt-2">The magic of the cycling at your place</span>
                </div>
            <div className="basis-2/3 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <LoginComponent />
                </div>
            </div>
        </div>
    </div>
}