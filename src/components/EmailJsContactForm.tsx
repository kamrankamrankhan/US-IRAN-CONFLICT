'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { getEmailJsPublicConfig } from '@/lib/emailjs-env';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  from_name: z.string().min(1, 'Name is required').max(120),
  from_email: z.string().email('Enter a valid email'),
  message: z
    .string()
    .min(10, 'Please write at least 10 characters')
    .max(5000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

type EmailJsContactFormProps = {
  /** Extra class on the outer wrapper */
  className?: string;
  /** Light text on dark background (e.g. red newsletter band) */
  variant?: 'default' | 'onDark';
};

export default function EmailJsContactForm({
  className,
  variant = 'default',
}: EmailJsContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('idle');
    setErrorMessage(null);
    const cfg = getEmailJsPublicConfig();
    if (!cfg) {
      setStatus('error');
      setErrorMessage('Email is not configured. Add NEXT_PUBLIC_EMAILJS_* keys to .env.local.');
      return;
    }

    try {
      await emailjs.send(cfg.serviceId, cfg.templateId, data, {
        publicKey: cfg.publicKey,
      });
      setStatus('success');
      reset();
    } catch (err: unknown) {
      setStatus('error');
      const text =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text?: string }).text)
          : err instanceof Error
            ? err.message
            : 'Something went wrong. Try again later.';
      setErrorMessage(text);
    }
  };

  const dark = variant === 'onDark';
  const labelClass = dark ? 'text-red-50' : 'text-foreground';
  const fieldClass = dark
    ? 'bg-white text-gray-900 border-white/20 placeholder:text-gray-500'
    : '';

  if (status === 'success') {
    return (
      <div
        className={cn(
          'rounded-lg border p-6 text-center',
          dark ? 'border-white/20 bg-white/10 text-white' : 'border-border bg-muted/30',
          className,
        )}
      >
        <p className={cn('font-semibold', dark ? 'text-white' : '')}>
          Message sent. We&apos;ll get back to you soon.
        </p>
        <Button
          type="button"
          variant="outline"
          className={cn('mt-4', dark && 'border-white/40 bg-transparent text-white hover:bg-white/10')}
          onClick={() => setStatus('idle')}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4 text-left', className)}>
      <div className="space-y-2">
        <Label htmlFor="from_name" className={labelClass}>
          Name
        </Label>
        <Input
          id="from_name"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={!!errors.from_name}
          {...register('from_name')}
        />
        {errors.from_name && (
          <p className="text-sm text-destructive dark:text-red-200">{errors.from_name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="from_email" className={labelClass}>
          Email
        </Label>
        <Input
          id="from_email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={!!errors.from_email}
          {...register('from_email')}
        />
        {errors.from_email && (
          <p className="text-sm text-destructive dark:text-red-200">{errors.from_email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClass}>
          Message
        </Label>
        <Textarea
          id="message"
          rows={5}
          className={cn('min-h-[120px] resize-y', fieldClass)}
          placeholder="Your question or feedback…"
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive dark:text-red-200">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && errorMessage && (
        <p className="text-sm text-destructive dark:text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full sm:w-auto',
          variant === 'onDark' && 'bg-gray-900 text-white hover:bg-gray-800',
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </Button>
    </form>
  );
}
