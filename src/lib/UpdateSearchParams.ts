import { redirect, useSearchParams } from "next/navigation";

export type ActionParams = {
    action : 'add' | 'delete'
    name : string
    value:string
  }
  
export function UpdateSearchParams(actionsParams: ActionParams[]) : void {
    const searchParams = useSearchParams();
    var finalParams : string = '?'
  
    actionsParams.forEach((actionParams) => {
      if (actionParams.action !== 'delete') {
        finalParams += `${actionParams.name}=${actionParams.value}&`;
      }
    });
  
    actionsParams.forEach((actionParams) => {
      if (actionParams.action === 'add') {
        finalParams += `${actionParams.name}=${actionParams.value}&`;
      }
    });
  
    finalParams = finalParams.slice(0, -1); // Remove the trailing '&'
  
    redirect(finalParams);
  }