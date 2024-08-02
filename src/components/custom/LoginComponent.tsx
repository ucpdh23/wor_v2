"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/data/actions/auth-actions";

const INITIAL_STATE = {
    zodErrors: null,
    apiErrors: null,
    data: null,
    message: null,
  };

export default function LoginComponent() {
    const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

    return <div className="">
    <div className="flex h-full items-center justify-center">
        <div
            className="rounded-lg border shadow-md border-gray-700 bg-gray-900 flex-col flex h-full items-center justify-center">
            <div className="flex h-full flex-col justify-center gap-4 p-6">
                <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                    <form className="flex flex-col" action={formAction}>
                        <h1 className="mb-4 text-2xl font-bold text-white">Login</h1>
                        <div>
                            <div className="mb-1">
                                <label className="text-sm font-medium text-gray-300">Email:</label>
                            </div>
                            <div className="flex w-full rounded-lg pt-1">
                                <div className="relative w-full">
                                    <input
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                        id="identifier" type="email" name="identifier" placeholder="email@example.com" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 mt-2">
                                <label className="text-sm font-medium text-gray-300"
                                    data-testid="flowbite-label" >Password:</label>
                            </div>
                            <div className="flex w-full rounded-lg pt-1">
                                <div className="relative w-full">
                                    <input
                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                        id="password" type="password" name="password" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <button type="submit" 
                                className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    Login
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
}