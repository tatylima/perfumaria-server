import { Prisma, PrismaClient } from "@prisma/client";

export const products: Prisma.ProductCreateInput[] = [
	{
		name: "Lancome",
		description:
			"La Vie Est Belle Lancôme - Perfume Feminino - Eau de Parfum - 30ml",
		price: 299.99,
		image: "",
	},
	{
		name: "Libre Yves Saint Laurent",
		description:"Libre Yves Saint Laurent Perfume Feminino - Eau de Parfum - 30ml",
		price: 379.00,
		image: "",
	},
	{
		name: "Giorgio Armani",
		description:
			"Acqua Di Giò Homme Giorgio Armani - Perfume Masculino - Eau de Toilette - 100ml",
		price: 432.00,
		image: "",
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
