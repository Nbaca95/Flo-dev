import { useState, useEffect, type FormEvent } from 'react';
import type { Dictionary } from '../../types';

interface ServiceOption {
  value: string;
  label: string;
}

interface Props {
  formLabels: Dictionary['contactPage']['form'];
  serviceOptions: ServiceOption[];
  budgetOptions: string[];
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORM_ENDPOINT = import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT as string | undefined;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({ formLabels, serviceOptions, budgetOptions }: Props) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');

  // Preselecciona el servicio si la página se abrió con ?servicio=slug (ej. desde la página de Servicios).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preselected = params.get('servicio') ?? params.get('service');
    if (preselected && serviceOptions.some((o) => o.value === preselected)) {
      setValues((prev) => ({ ...prev, service: preselected }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = formLabels.requiredError;
    if (!values.email.trim()) next.email = formLabels.requiredError;
    else if (!isValidEmail(values.email)) next.email = formLabels.emailError;
    if (!values.message.trim()) next.message = formLabels.requiredError;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      if (!FORM_ENDPOINT) {
        // No hay endpoint configurado todavía (PUBLIC_CONTACT_FORM_ENDPOINT en .env).
        // Se simula el envío para no romper la experiencia en desarrollo.
        await new Promise((resolve) => setTimeout(resolve, 600));
        setStatus('success');
        return;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-xl border border-paper-border bg-paper-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 outline-none transition-colors focus:border-accent-500 dark:border-ink-border dark:bg-ink-900 dark:text-paper-100 dark:placeholder:text-paper-200/30';
  const labelClass = 'mb-1.5 block text-sm font-medium text-ink-900 dark:text-paper-100';
  const errorClass = 'mt-1 text-xs text-red-500';

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-mint-500/30 bg-mint-500/10 p-6 text-sm text-ink-900 dark:text-paper-100"
      >
        {formLabels.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {formLabels.name} *
          </label>
          <input
            id="name"
            type="text"
            className={inputClass}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            {formLabels.email} *
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="company">
          {formLabels.company}
        </label>
        <input
          id="company"
          type="text"
          className={inputClass}
          value={values.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service">
            {formLabels.service}
          </label>
          <select
            id="service"
            className={inputClass}
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
          >
            <option value="">{formLabels.servicePlaceholder}</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="budget">
            {formLabels.budget}
          </label>
          <select
            id="budget"
            className={inputClass}
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
          >
            <option value="">{formLabels.budgetPlaceholder}</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          {formLabels.message} *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && <p className="text-sm text-red-500">{formLabels.error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-flo-gradient px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110 disabled:opacity-60"
      >
        {status === 'submitting' ? formLabels.submitting : formLabels.submit}
      </button>
    </form>
  );
}
