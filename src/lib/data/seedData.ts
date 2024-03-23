import fs from 'fs';
import path from 'path';
import { product } from '../definitions';
import { randomInt } from 'crypto';

export async function seedData(): Promise<product[]> {
  // const productsFolderPath = path.join('./src/ui/assets/products/');
  // const fileNames = fs.readdirSync(productsFolderPath);
  // const fileAddresses = fileNames.map((fileName: string) =>
  //   path.join(productsFolderPath, fileName)
  // );



  const productsData: product[] = imagesData.map((fileName: string) => {
    const id = '';
    const name = fileName.split('/')[1] ?? 'Name';
    const imageSrc = fileName;
    const description = 'Description for ' + name;
    const category = 'Paquetes';
    const tag = Math.random() > 0.5 ? undefined : 'alojamiento';
    const price = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
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


const imagesData: string[] = [
  'https://th.bing.com/th/id/OIP.llWFh53OAVigtBmgMDYDRgHaE8?w=1000&h=667&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.178a331727e089f29f2f1354fed4ef11?rik=UQV2aGorssZOvQ&riu=http%3a%2f%2fmequetrefismos.com%2fwp-content%2fuploads%2f2014%2f12%2fVaradero.jpg&ehk=tPbQYOlXGPlwpqWnR8VE8M2Os7KWaqyfFJengEBS%2bmU%3d&risl=1&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.8712fe214ba76b7bd5e4fc1141d4dfb7?rik=ImXLKORdPDQEqA&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.qJSB4_8cKFCopEryhOU5PAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.75e9b30b9d571ab854303b894f97f474?rik=FOxOZLuS3jfUmw&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.0b1e6ed24d6fdc373594c48b8aaeedd5?rik=%2bw%2bzl5rRXodh3g&riu=http%3a%2f%2fmedia.cubadebate.cu%2fwp-content%2fuploads%2f2022%2f09%2fcanasi-cuba-4.jpg&ehk=zVboH9kP80K1mIaYYV65hVdLwnwHZnJ1SC%2bLNuSYZj0%3d&risl=&pid=ImgRaw&r=0',
]