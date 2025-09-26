import {Button, Card, Skeleton} from "@heroui/react";
import React, { useState } from 'react'

 
export default function LoadingScreen() {
   const [isLoaded, setIsLoaded] = useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  return (
      <div className="flex flex-col gap-3 ">
      <Card className="w-[3/5] h-[80vh] space-y-5 p-4  bg-stone-900 text-white" radius="lg">
        <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          <div className="h-62 rounded-lg bg-secondary" />
        </Skeleton>
        <div className="space-y-5">
          <Skeleton className="w-3/5  rounded-lg" isLoaded={isLoaded}>
            <div className="h-6 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg" isLoaded={isLoaded}>
            <div className="h-6 w-full rounded-lg bg-secondary-300" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg" isLoaded={isLoaded}>
            <div className="h-6 w-full rounded-lg bg-secondary-200" />
          </Skeleton>
        </div>
      </Card>
      
    </div>
  );
}





