// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/d5jqVAX1eDM
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */

// import Link from 'next/link';

// export default function Component() {
//   return (
//     <div
//       key='1'
//       className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
//     >
//       <div className='bg-white rounded-lg max-w-md w-full mx-4'>
//         <div className='flex justify-between items-center border-b border-gray-200 p-6'>
//           <h3 className='text-lg font-medium leading-6 text-gray-900'>
//             Registrarse
//           </h3>
//           <button className='text-gray-500 hover:text-gray-800'>
//             <PanelTopCloseIcon className='h-6 w-6' />
//           </button>
//         </div>
//         <div className='p-6'>
//           <h2 className='text-2xl font-semibold mb-4'>Bienvenido a Travelix</h2>
//           <form>
//             <div className='space-y-6'>
//               <div>
//                 <label
//                   className='block text-sm font-medium text-gray-700'
//                   htmlFor='username'
//                 >
//                   nombre de usuario
//                 </label>
//                 <Input id='username' placeholder='travellero123' />
//               </div>
//               <div>
//                 <label
//                   className='block text-sm font-medium text-gray-700'
//                   htmlFor='fullname'
//                 >
//                   nombre completo
//                 </label>
//                 <Input id='fullname' placeholder='Juan de la Torre' />
//               </div>
//               <div>
//                 <label
//                   className='block text-sm font-medium text-gray-700'
//                   htmlFor='nationality'
//                 >
//                   nacionalidad
//                 </label>
//                 <Input placeholder='Select your nationality' type='select'>
//                   <option value='usa'>USA</option>
//                   <option value='uk'>UK</option>
//                   <option value='france'>France</option>
//                   <option value='germany'>Germany</option>
//                 </Input>
//               </div>
//               <div>
//                 <label
//                   className='block text-sm font-medium text-gray-700'
//                   htmlFor='password'
//                 >
//                   contraseña
//                 </label>
//                 <Input id='password' placeholder='********' type='password' />
//               </div>
//               <div>
//                 <label
//                   className='block text-sm font-medium text-gray-700'
//                   htmlFor='confirm-password'
//                 >
//                   confirme su contraseña
//                 </label>
//                 <Input
//                   id='confirm-password'
//                   placeholder='********'
//                   type='password'
//                 />
//               </div>
//             </div>
//             <div className='mt-6'>
//               <Button className='w-full bg-[#e11d48] text-white'>
//                 Continuar
//               </Button>
//             </div>
//           </form>
//         </div>
//         <div className='border-t border-gray-200 p-6 text-center'>
//           <p className='text-sm text-gray-600'>
//             ¿Tienes cuenta?
//             <Link className='text-[#e11d48] hover:underline' href='#'>
//               Inicia sesión aquí
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PanelTopCloseIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
//       <line x1='3' x2='21' y1='9' y2='9' />
//       <path d='m9 16 3-3 3 3' />
//     </svg>
//   );
// }
