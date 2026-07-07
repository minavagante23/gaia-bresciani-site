'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { linkTitle } from '@/lib/link-titles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferred_office: string;
  preferred_time: string;
  subject: string;
  message: string;
  privacy: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  preferred_office: '',
  preferred_time: '',
  subject: '',
  message: '',
  privacy: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Inserisci il tuo nome';
  if (!data.email.trim()) errors.email = 'Inserisci la tua email';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Email non valida';
  if (!data.preferred_office) errors.preferred_office = 'Seleziona una sede';
  if (!data.message.trim()) errors.message = 'Scrivi un messaggio';
  if (!data.privacy) errors.privacy = 'Devi accettare la Privacy Policy';
  return errors;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    const newData = { ...data, [name]: newValue };
    setData(newData);

    if (touched.has(name)) {
      const newErrors = validate(newData);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => new Set(prev).add(name));
    const newErrors = validate(data);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(data);
    setErrors(newErrors);
    setTouched(new Set(Object.keys(data)));

    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xnnpnvqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          _replyto: data.email,
          phone: data.phone,
          preferred_office: data.preferred_office,
          preferred_time: data.preferred_time,
          subject: data.subject,
          message: data.message,
          _subject: 'Nuova richiesta primo colloquio dal sito',
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setData(initialData);
        setTouched(new Set());
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (name: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-primary text-sm transition-all duration-200 
     focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none
     ${errors[name] && touched.has(name) ? 'border-red-400' : 'border-primary/10'}`;

  if (status === 'sent') {
    return (
      <div className="card-base p-10 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="heading-md mb-2">Messaggio inviato</h3>
        <p className="body-md">Riceverai una risposta entro 24 ore lavorative.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-light mb-1.5">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            autoComplete="name"
            className={fieldClass('name')}
          />
          {errors.name && touched.has('name') && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-light mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            autoComplete="email"
            className={fieldClass('email')}
          />
          {errors.email && touched.has('email') && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-light mb-1.5">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+39 340 0000000"
            className={fieldClass('phone')}
          />
        </div>

        <div>
          <label htmlFor="preferred_office" className="block text-sm font-medium text-primary-light mb-1.5">
            Sede preferita *
          </label>
          <select
            id="preferred_office"
            name="preferred_office"
            value={data.preferred_office}
            onChange={handleChange}
            onBlur={() => handleBlur('preferred_office')}
            className={fieldClass('preferred_office')}
          >
            <option value="">Seleziona una sede</option>
            <option value="Credaro (BG)">Credaro (BG) - consigliata per Sarnico e Lago d'Iseo</option>
            <option value="Castenedolo (BS)">Castenedolo (BS)</option>
            <option value="Online">Online</option>
          </select>
          {errors.preferred_office && touched.has('preferred_office') && (
            <p className="text-red-500 text-xs mt-1">{errors.preferred_office}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="preferred_time" className="block text-sm font-medium text-primary-light mb-1.5">
            Fascia oraria
          </label>
          <select
            id="preferred_time"
            name="preferred_time"
            value={data.preferred_time}
            onChange={handleChange}
            className={fieldClass('preferred_time')}
          >
            <option value="">Seleziona una fascia</option>
            <option value="Mattina">Mattina</option>
            <option value="Pomeriggio">Pomeriggio</option>
            <option value="Sera">Sera</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary-light mb-1.5">
            Oggetto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={data.subject}
            onChange={handleChange}
            placeholder="Richiesta primo colloquio"
            className={fieldClass('subject')}
          />
        </div>
      </div>

      <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary-light mb-1.5">
            Messaggio *
          </label>
          <p className="text-xs text-primary/45 mb-2">
            Se vuoi, puoi indicare anche da quale zona arrivi e se preferisci un appuntamento a Credaro.
          </p>
          <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          rows={5}
          className={fieldClass('message')}
        />
        {errors.message && touched.has('message') && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <label htmlFor="privacy" className="flex items-start gap-3 cursor-pointer py-2 -my-2">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={data.privacy}
          onChange={handleChange}
          onBlur={() => handleBlur('privacy')}
          className="mt-1 h-5 w-5 shrink-0 rounded border-primary/20 text-accent-deep focus:ring-accent/30"
        />
        <span className="text-sm text-primary/60 leading-relaxed">
          Ho letto e accetto la{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" title={linkTitle('/privacy-policy')} className="link-inline">
            Privacy Policy
          </a>
        </span>
      </label>
      {errors.privacy && touched.has('privacy') && (
        <p className="text-red-500 text-xs -mt-3">{errors.privacy}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-accent w-full sm:w-auto gap-2 disabled:opacity-60"
      >
        {status === 'sending' ? (
          'Invio in corso...'
        ) : (
          <>
            <Send size={16} />
            Invia messaggio
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          Si &egrave; verificato un errore. Riprova o contattami direttamente.
        </div>
      )}
    </form>
  );
}
