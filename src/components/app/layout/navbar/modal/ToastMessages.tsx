'use client';

import { useToast } from '@/components/ui/use-toast';
import { useSearchParams } from 'next/navigation';

export function ToastMessages() {
  const searchparams = useSearchParams();
  const trigger = searchparams.get('toast') ?? false;
  const description = searchparams.get('message') ?? 'success';

  const { toast } = useToast();

  return <>{trigger && toast({
    description: messages[description],
  })}
  </>
}

const messages: { [key: string]: string } = {
  'loginSuccess': 'Autenticado con éxito',
  'sucess': 'Acción con éxito'
};
