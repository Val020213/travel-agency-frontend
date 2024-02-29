import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useRef } from 'react';
import { IconX } from '@tabler/icons-react';

export const SignUp = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (value: boolean) => void;
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => { }); // onClick outside

    function processLogin() {
        const userData = dialogRef.current?.querySelectorAll('input');
        var flag = false;
        for (var i in userData?.values) {
            if (i === undefined || i === '') {
                flag = true;
            }
        }

        console.log(
            'Login ' +
            dialogRef.current?.querySelectorAll('input')[0].value +
            ' ' +
            dialogRef.current?.querySelectorAll('input')[1].value
        );
        //do something
        flag && setOpen(false);
        console.log(open);
    }

    return (
        <dialog
            ref={dialogRef}
            open={open}
            className={clsx(
                'flex flex-col rounded-[32px] fixed enter',
                'bg-white dark:bg-extends-darker-blue-900',
                'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[551px] z-40 top-24',
                'overflow-y-auto'
            )}
        >
            <form className='flex flex-col gap-8 w-full *:w-full'>
                <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
                    <span className='text-lg leading-7 md:text-3xl font-medium w-full text-center'>
                        Iniciar Sección
                    </span>
                    <button onClick={() => setOpen(false)} className='float-right'>
                        <IconX stroke={1.5} className='h-6 w-6' color='currentColor' />
                    </button>
                </div>
                <span className='text-lg leading-7 md:text-3xl font-medium text-gray-800 dark:text-gray-50'>
                    Bienvenido a Travelix
                </span>
                <div className='flex flex-col *:w-full gap-6'>
                    <div className='flex flex-col text-base leading-6 gap-2 pb-2'>
                        <label
                            className='text-gray-600 dark:text-extends-darker-blue-200'
                            htmlFor='name'
                        >
                            nombre de usuario o gmail
                        </label>
                        <input
                            className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                            type='text'
                            id='name'
                            placeholder='travelilero@gmail.com'
                            required
                        />
                    </div>
                    <div className='flex flex-col text-base leading-6 gap-2 pb-2'>
                        <label
                            className='text-gray-600 dark:text-extends-darker-blue-200 '
                            htmlFor='password'
                        >
                            contraseña
                        </label>
                        <input
                            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                            type='password'
                            id='password'
                            placeholder='********'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col *:w-full gap-4'>
                    <div className='text-blue-500 text-right text-[15px] px-1'>
                        <a href='/'>¿Aún no tienes cuenta? Unete aqui</a>
                    </div>
                    <button
                        onClick={() => processLogin()}
                        className={clsx(
                            'flex items-center justify-center',
                            'bg-orangePinkRight text-white text-opacity-100 md:text-2xl leading-7',
                            'rounded-lg py-4 px-6 font-medium',
                            ' hover:ring-4 hover:ring-rose-500 '
                        )}
                    >
                        Continuar
                    </button>
                </div>
                <div className='flex flex-col md:flex-row justify-start items-center gap-1'>
                    <div className='text-gray-600 dark:text-extends-darker-blue-200 min-w-max'>
                        continuar con
                    </div>
                    <div className='flex flex-row gap-1 w-full *:w-full'>
                        <button className='text-blue-500'>
                            <a href='/'>Gmail</a>
                        </button>
                        <button className='text-blue-500'>
                            <a href='/'>Facebook</a>
                        </button>
                        <button className='text-blue-500'>
                            <a href='/'>Twitter</a>
                        </button>
                    </div>
                </div>
            </form>
        </dialog>
    );
};
