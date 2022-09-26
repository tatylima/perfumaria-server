import { Prisma, PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

export const users: Prisma.UserCreateInput[] = [
	{
		nickname: "tatianagandra",
		name: "Tatiana Gandra",
		password: "Abcd@1234",
		image: "https://avatars.githubusercontent.com/u/97984721?v=4",
	},
];

export const user = async (prisma: PrismaClient) => {
	for (const obj of Object.values(users)) {
		await prisma.user.upsert({
			where: { nickname: obj.nickname },
			update: {},
			create: {
				...obj,
				password: await bcrypt.hash(obj.password, 10),
			},
		});
	}
};
