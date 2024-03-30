"use client"

import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";
import { useSearchParams } from "next/navigation"

export function ToastSignInAlert() {
    const { toast } = useToast();
    const trigger = useSearchParams().get('signinRequired') ?? false;

    const Toast = () => (
        <div
            className='fixed bottom-0 right-0 mb-4 mr-4 z-50'
        >
            <div
                className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
                role="alert"
            >
                <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg"
                >``
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div
                    className="ml-3 text-sm font-normal"
                >
                    <Link
                        href={'?signinRequired=false'}
                        className="font-medium text-green-500 hover:underline"
                    >
                        Sign in required
                    </Link>
                </div>
            </div>
        </div>
    );
    return trigger ? <Toast /> : null;
}