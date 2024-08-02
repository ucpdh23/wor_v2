import { cookies } from "next/headers";
import {fetchTeamRidersService} from "../../data/services/team-service"
import Image from 'next/image'

export default async function Team() {
    const jwt = cookies().get("jwt")?.value
    var teamName : string = "unname";
    var teamId;
    var logo;
    if (jwt) {
        const context = JSON.parse(jwt);
        teamName = context.team.name;
        teamId = context.team.id;
        logo = context.team.logo;
    }

    const riders = await fetchTeamRidersService(teamId);
    console.log(logo)


    return  <div className="h-full w-full flex flex-col bg-royal-purple rounded-3xl m-4 border border-royal-lightly-purple">
                <div className="flex flex-col m-5">
                    <div className="flex flex-row">
                        <Image
                            src={logo}
                            width={35}
                            height={35}
                            alt="Team logo"/>
                        <div className="flex justify-center items-center mx-2 text-3xl">{teamName}</div>
                        <div className="flex flex-row space-x-5 mx-5">
                            <div className="flex flex-col items-center">
                                <span className="text-xs">World Tour Class</span>
                                <span className="text-xl">4º</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">Victories</span>
                                <span className="text-xl">3</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">Podiums</span>
                                <span className="text-xl">7</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="basis-full mx-5 mt-2 rounded-md border-solid border border-red-700">
                    <h1>Riders</h1>
                    <ul className="flex flex-row">
                        {riders.map((rider) => (
                        <li className="ml-5" key={rider.id}>
                            <span className="text-xl">{rider.name}</span>
                        <div className="flex flex-row items-center">
                            <span className="flex items-center mr-3">UCI</span>
                            <div className="flex flex-col">
                                <span className="text-2xl flex justify-center">3</span>
                                <span className="text-xs flex justify-center">5.445 pts</span>
                            </div>
                        </div>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="basis-full mx-5 mt-2">Staff</div>
    </div>
}
