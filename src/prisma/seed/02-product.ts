import { Prisma, PrismaClient } from "@prisma/client";

export const products: Prisma.ProductCreateInput[] = [
	{
		name: "Paris",
		description:
			"Perfume Feminino 30ml",
		price: 299.99,
		image: "https://i.imgur.com/mwoKryx.jpeg",
	},
	{
		name: "Channel",
		description:"Channel 05",
		price: 379.00,
		image: "https://i.imgur.com/zlck0D1.jpeg",
	},
	{
		name: "Eau de pamplemousse rose",
		description:
			" Perfume Masculino - Eau de Toilette - 100ml",
		price: 432.00,
		image: "https://i.imgur.com/pGspSES.jpeg",
	},
];

export const product = async (prisma: PrismaClient) => {
	for (const obj of Object.values(products)) {
		await prisma.product.upsert({
			where: { name: obj.name },
			update: {},
			create: {
				...obj,
			},
		});
	}
};
