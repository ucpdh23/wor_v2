
import { prisma } from '@/lib/prisma';

interface LoginUserProps {
    identifier: string;
    password: string;
}

export interface LoginUserOutput {
    jwt : string,
    error : string | null
}

export async function loginUserService(data : LoginUserProps) : Promise<LoginUserOutput> {
    // Query returns User or null
    const team = await prisma.team.findFirst({
        where: {
            owner: data.identifier,
        },
    });

    if (team) {
        return {
            jwt: JSON.stringify({ team: {id: team.id, name: team.name, logo: "/" + team.logo}, user: {email: team.owner}, date: 20240706 }),
            error: null
        };
    } else {
        return {
            jwt: "",
            error: "User not found"
        };
    }
}