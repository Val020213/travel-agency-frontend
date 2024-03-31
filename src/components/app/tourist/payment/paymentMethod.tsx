import Image from 'next/image';
export async function PaymentMethod({
    text,
    price,
}: {
    text: string;
    price: number;
}) {
    return (
        <div className='flex flex-col gap-8 container'>
            <h2 className='text-2xl text-gray-800 dark:text-extends-darker-blue-200'>
                Método de Pago
            </h2>
            <div className='flex flex-row gap-4'>
                <Image
                    src={require('@/assets/metropolitan.png')}
                    width={320}
                    height={160}
                    alt='credit card'
                    quality={100}
                    className='w-[320px] h-[160px]'
                />
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col text-base leading-6 text-gray-500 dark:text-extends-darker-blue-300 gap-4'>
                        <p className='text-2xl'>{text}</p>
                        <p>Total a pagar: {price}</p>
                    </div>
                    <div className='flex flex-col text-base leading-6'>
                        <label
                            className='text-gray-500 dark:text-extends-darker-blue-300'
                            htmlFor='address'
                        >
                            Tarjeta de Crédito
                        </label>
                        <input className='md:text-xl border-b border-gray-300 dark:border-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    );
}
