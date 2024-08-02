import { prisma } from '@/lib/prisma';

export async function fetchTeamRidersService(teamId : string) : Promise<any[]> {
    // Query returns User or null
    const riders = await prisma.cyclist.findMany({
        where: {
            team_id: teamId,
        },
    });

    return riders;
}