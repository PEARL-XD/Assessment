import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, X, Check, CheckCircle2, ChevronDown } from 'lucide-react';
import { originalSite, services } from './data';

export function CaseDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      className="case-dialog"
      ref={dialog}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
      aria-labelledby="case-title"
    >
      <button
        type="button"
        className="icon-button dialog-close"
        onClick={onClose}
        aria-label="Close client result"
      >
        <X size={23} />
      </button>
      <p className="eyebrow">PUBLISHED CLIENT RESULT</p>
      <h2 id="case-title">{project.name}</h2>
      <img
        className="dialog-project-image"
        src={project.image}
        alt={`${project.name} website preview published by the agency`}
      />
      <p className="dialog-description">{project.detail}</p>
      <div className="dialog-numbers">
        <div>
          <span>Before</span>
          <strong>{project.before}</strong>
        </div>
        <ArrowRight />
        <div>
          <span>After</span>
          <strong>{project.after}</strong>
        </div>
      </div>
      <p>{project.unit}</p>
      <p className="evidence-note">
        These are figures reported by Digital Marketing Doctor, not independently verified. The
        source does not specify the measurement dates or ad spend. Percentage change is calculated
        from the published figures; results vary.
      </p>
      <a
        className="text-link"
        href={`${originalSite}#success-stories`}
        target="_blank"
        rel="noreferrer"
      >
        See original source <ArrowUpRight size={18} />
      </a>
    </dialog>
  );
}

export function AuditForm({ selectedService, setSelectedService, website, setWebsite }) {
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState('');
  function submit(e) {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) {
      setName(new FormData(e.currentTarget).get('name').trim());
      setComplete(true);
    }
  }
  return (
    <div className="audit-form-wrap" data-reveal>
      {complete ? (
        <div
          className="form-complete"
          role="status"
          tabIndex={-1}
          ref={(element) => element?.focus()}
        >
          <span className="complete-icon">
            <CheckCircle2 size={38} />
          </span>
          <h3>You’re all set, {name.split(' ')[0]}.</h3>
          <p>You’ve completed the demo audit request. Nothing was sent or saved.</p>
          <p className="success-next">
            A live version would send your request to the team and confirm the next steps here.
          </p>
          <button className="button button-dark" onClick={() => setComplete(false)}>
            Try another request <ArrowRight size={17} />
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="audit-form">
          <div className="form-heading">
            <h3>Let’s find your next opportunity.</h3>
            <span>FREE AUDIT</span>
          </div>
          <p>A few details. A clearer starting point.</p>
          <div className="form-row">
            <label>
              Your name
              <input
                id="audit-name"
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={80}
                pattern=".*\S.*"
              />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={150}
              />
            </label>
          </div>
          <label>
            Website address
            <input
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="url"
              autoComplete="url"
              placeholder="https://yourcompany.com"
              required
              maxLength={300}
            />
          </label>
          <label>
            What would you like help with?
            <span className="select-wrap">
              <select
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="Not sure yet">Not sure yet — help me choose</option>
                {services.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
              <ChevronDown size={17} />
            </span>
          </label>
          <button className="button button-blue form-submit" type="submit">
            Get my free audit <ArrowUpRight size={19} />
          </button>
          <p className="form-note">
            <span className="small-check">
              <Check size={13} />
            </span>{' '}
            Frontend demo. Your details are not sent or stored.
          </p>
        </form>
      )}
    </div>
  );
}
