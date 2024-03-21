'use server';
import fs from 'fs';
import path from 'path';
import { product } from '../definitions';
import { randomInt } from 'crypto';

export async function seedData(): Promise<product[]> {
  const productsFolderPath = path.join('./src/ui/assets/products/');
  const fileNames = fs.readdirSync(productsFolderPath);
  const fileAddresses = fileNames.map((fileName: string) =>
    path.join(productsFolderPath, fileName)
  );

  const productsData: product[] = fileNames.map((fileName: string) => {
    const id = '';
    const name = fileName.split('.')[0];
    const imageSrc = fileName;
    const description = 'Description for ' + name;
    const category = 'Paquetes';
    const tag = randomInt(0, 10) > 5 ? undefined : 'alojamiento';
    const price = randomInt(1000, 10000);
    return {
      id: parseInt(id),
      name: name,
      price: price,
      description: description,
      image: imageSrc,
      tag: tag,
      category: category,
    };
  });

  return productsData;
}
