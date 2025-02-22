"use client"

import { Button } from '@headlessui/react';
import { useState, Dispatch, SetStateAction } from 'react'
import { ResponseData } from '../models';

export default function Debug() {
    const [echo, setEcho] = useState<ResponseData>()    
    const [ping, setPing] = useState<ResponseData>()    

    const callAPI = async (url: string, fn: Dispatch<SetStateAction<null>>) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            fn(data)
        });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h1>Debug</h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button 
                    onClick={() => callAPI('http://localhost:3000/api/debug/echo', setEcho)}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Echo
                </Button>
                {echo &&
                    <><p className="text-sm font-semibold text-gray-900">Code : {echo?.code} | Message : {echo?.message}</p>
                    <br/>
                    <p>{JSON.stringify(echo)}</p>
                    </>
                }
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button 
                    onClick={() => callAPI('http://localhost:3000/api/debug/ping', setPing)}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Ping
                </Button>
                {ping &&
                    <><p className="text-sm font-semibold text-gray-900">Code : {ping?.code} | Message : {ping?.message}</p>
                    <br/>
                    <p>{JSON.stringify(ping)}</p>
                    </>
                }
            </div>

        </div>
    )
}