/**
 * Component: ContactForm
 * 
 * Interactive contact message form powered by Web3Forms:
 * - Submits directly to Web3Forms API using VITE_WEB3FORMS_ACCESS_KEY
 * - Manages loading, success, and error feedback states
 * - Reset option to submit another inquiry
 * 
 * Data source: src/data/portfolio.js (personal.email fallback)
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '5176385f-3810-441f-bf42-1978f8163ded';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('subject', `New Portfolio Message from ${formData.get('name')}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ state: 'success', message: 'Message sent successfully! I will get back to you shortly.' });
        form.reset();
      } else {
        setStatus({ state: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      setStatus({ state: 'error', message: 'Network error. Please check your connection or email me directly.' });
    }
  };

  if (status.state === 'success') {
    return (
      <div className="py-10 text-center space-y-4">
        <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
        <h4 className="text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900">
          Message Sent!
        </h4>
        <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-600 max-w-sm mx-auto">
          {status.message}
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: 'idle', message: '' })}
          className="btn-gradient-outline px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 hover:text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.state === 'error' && (
        <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs font-mono">
          <AlertCircle size={16} className="shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ada Lovelace"
          className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="ada@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Hi Rohith, let's discuss an engineering project or role..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-300 text-slate-100 dark:text-slate-100 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="btn-gradient-primary w-full py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status.state === 'loading' ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
