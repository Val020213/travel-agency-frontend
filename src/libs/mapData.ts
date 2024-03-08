'use server';
import fs from 'fs';
import path from 'path';

const productsFolderPath = path.join('./products');
const fileNames = fs.readdirSync(productsFolderPath);
const fileAddresses = fileNames.map((fileName: string) =>
  path.join(productsFolderPath, fileName)
);

export const productsImages = [...fileAddresses];

export const productsData = fileNames.map((fileName: string) => {
  const name = fileName.split('.')[0];
  const description = 'Description for ' + name;
  const price = Math.floor(Math.random() * 100) + 1;
  return { name, description, price, image: fileName };
});
