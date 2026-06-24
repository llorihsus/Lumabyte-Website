import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Icons } from '../components/icons'

const COUNTRIES = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'India', 'Other']
const COMPANY_TYPES = ['Startup', 'Small business', 'Mid-market', 'Enterprise', 'Agency', 'Non-profit', 'Other']
const INQUIRY_TYPES = ['New project', 'General question', 'Partnership', 'Job application', 'Other']

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 13 4 4L19 7" />
  </svg>
)

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()

  const [data, setData] = useState({
    first: '', last: '', email: '', country: '', ctype: '', message: '',
    inquiry: searchParams.get('type') === 'job' ? 'Job application' : '',
    role: searchParams.get('role') ?? '',
    resume: '',
  })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData(d => ({ ...d, [k]: e.target.value }))
  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    setData(d => ({ ...d, resume: f ? f.name : '' }))
  }
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }
  const isJob = data.inquiry === 'Job application'

  if (sent) {
    return (
      <div className="form-thanks card">
        <span className="form-thanks__check"><CheckIcon /></span>
        <h3 className="h-card">Thanks, {data.first || 'there'}!</h3>
        <p className="muted pretty">
          {isJob
            ? 'Your application is in. We review every submission personally and will reach out if there\'s a fit.'
            : 'Your message is on its way. Our team will get back to you shortly — usually within a day.'}
        </p>
        <Link to="/" className="btn btn-ghost">Back to home {Icons.arrow}</Link>
      </div>
    )
  }

  return (
    <form className="cform card" onSubmit={submit}>
      <div className="cform__grid">
        <label className="field">
          <span>First name <i>*</i></span>
          <input required placeholder="Jane" value={data.first} onChange={set('first')} />
        </label>
        <label className="field">
          <span>Last name <i>*</i></span>
          <input required placeholder="Smith" value={data.last} onChange={set('last')} />
        </label>
      </div>
      <label className="field">
        <span>Email <i>*</i></span>
        <input required type="email" placeholder="jane@company.com" value={data.email} onChange={set('email')} />
      </label>
      <label className="field">
        <span>What's this about? <i>*</i></span>
        <div className="select-wrap">
          <select required value={data.inquiry} onChange={set('inquiry')}>
            <option value="" disabled>Select a category…</option>
            {INQUIRY_TYPES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </label>
      {isJob ? (
        <div className="cform__grid">
          <label className="field">
            <span>Role you're applying for</span>
            <input placeholder="e.g. Full-Stack Engineer" value={data.role} onChange={set('role')} />
          </label>
          <label className="field">
            <span>Resume <i>*</i></span>
            <div className="filefield">
              <input required type="file" accept=".pdf,.doc,.docx" onChange={setFile} />
              <span className="filefield__btn">Choose file</span>
              <span className="filefield__name">{data.resume || 'PDF, DOC or DOCX'}</span>
            </div>
          </label>
        </div>
      ) : (
        <div className="cform__grid">
          <label className="field">
            <span>Where are you from?</span>
            <div className="select-wrap">
              <select value={data.country} onChange={set('country')}>
                <option value="" disabled>Select your country…</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </label>
          <label className="field">
            <span>Type of company</span>
            <div className="select-wrap">
              <select value={data.ctype} onChange={set('ctype')}>
                <option value="" disabled>Select category…</option>
                {COMPANY_TYPES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </label>
        </div>
      )}
      <label className="field">
        <span>Message <i>*</i></span>
        <textarea
          required rows={5}
          placeholder={isJob ? 'Tell us a bit about yourself and why you\'d be a great fit…' : 'Tell us about your project…'}
          value={data.message}
          onChange={set('message')}
        />
      </label>
      <button type="submit" className="btn btn-primary btn-lg cform__submit">
        {isJob ? 'Submit application' : 'Send message'} {Icons.arrow}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <section className="subhero subhero--contact">
        <div className="subhero__glow" />
        <div className="wrap subhero__inner subhero__inner--center">
          <Reveal as="h1" className="display subhero__title balance" delay={60}>
            Any questions rising?<br />Contact us.
          </Reveal>
          <Reveal as="p" className="lead subhero__lead pretty" delay={120}>
            Whether you have a question, need assistance, or want to start a new project — our team is here to help.
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal><ContactForm /></Reveal>
            <Reveal className="contact-aside" delay={80}>
              <div className="info card">
                <span className="iconbox">{Icons.mail}</span>
                <div>
                  <span className="info__label">Email</span>
                  <a className="info__val" href="mailto:info@lumatechlab.com">info@lumatechlab.com</a>
                </div>
              </div>
              <div className="info card">
                <span className="iconbox">{Icons.phone}</span>
                <div>
                  <span className="info__label">Phone</span>
                  <a className="info__val" href="tel:+15626066058">562 606 6058</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
