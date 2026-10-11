import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Menu,
  X,
  Search,
  Target,
  BarChart3,
  Layers3,
  Phone,
  Mail,
  Plus,
  ShieldCheck,
} from 'lucide-react';
import { cases, services, faqs, originalSite } from './data';
import { AuditForm, CaseDialog } from './components';
import { useScrollReveal } from './useScrollReveal';

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Digital Marketing Doctor home">
      <span className="logo-mark">
        DMD
        <span />
      </span>
      <span className="logo-name">
        Digital Marketing
        <span>
          Doctor<span className="logo-period">.</span>
        </span>
      </span>
    </a>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

function BrowserPreview({ project, className = '', onClick, priority = false }) {
  return (
    <button
      className={'browser-preview ' + className}
      onClick={onClick}
      aria-label={'View ' + project.name + ' published results'}
    >
      <span className="browser-toolbar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{project.name}</span>
        <ArrowUpRight size={13} />
      </span>
      <img
        src={project.image}
        width="600"
        height="560"
        alt={project.name + ' website preview from the agency portfolio'}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <span className="browser-caption">
        {project.category}
        <ArrowUpRight size={14} />
      </span>
    </button>
  );
}

function HeroShowcase({ onSelect }) {
  return (
    <div className="hero-showcase">
      <div className="showcase-grid" />
      <span className="showcase-label">
        <span /> SELECTED CLIENT WORK
      </span>
      <BrowserPreview
        project={cases[1]}
        className="hero-browser browser-back"
        onClick={() => onSelect(cases[1])}
        priority
      />
      <BrowserPreview
        project={cases[0]}
        className="hero-browser browser-front"
        onClick={() => onSelect(cases[0])}
        priority
      />
      <div className="hero-result">
        <span className="result-icon">
          <BarChart3 size={21} />
        </span>
        <div>
          <span>RAIKA PHOTOGRAPHY</span>
          <strong>
            55 <ArrowRight size={17} /> 150
          </strong>
          <small>monthly bookings · agency-reported</small>
        </div>
        <span className="hero-growth">
          <ArrowUpRight size={14} />
          173%
        </span>
      </div>
      <div className="hero-project-tag">
        <Check size={15} /> Strategy. Ads. A better destination.
      </div>
      <span className="showcase-plus">
        <Plus size={32} strokeWidth={1} />
      </span>
      <p className="showcase-source">
        Real portfolio previews. Figures published on the original website.
      </p>
    </div>
  );
}

function ServiceVisual({ index }) {
  const service = services[index];
  const Icon = service.icon;
  if (index === 0)
    return (
      <div className="ad-demo">
        <span className="demo-label">ILLUSTRATIVE SEARCH AD</span>
        <div className="search-bar">
          <Search size={17} />
          <span>the service your customer needs</span>
          <span>↵</span>
        </div>
        <div className="search-ad">
          <span className="ad-sponsor">Sponsored · Your business</span>
          <span className="ad-url">yourcompany.com / your-service</span>
          <strong>The right solution. Right when they need it.</strong>
          <p>A clear offer, a relevant search and a simple next step.</p>
          <div>
            <span>Get a quote</span>
            <span>Explore services</span>
            <span>Contact us</span>
          </div>
        </div>
        <span className="demo-bottom">
          <Target size={15} /> Start with intent. Build for action.
        </span>
      </div>
    );
  return (
    <div className={'channel-demo channel-' + service.color}>
      <span className="demo-label">ONE CONNECTED CUSTOMER JOURNEY</span>
      <span className="channel-icon">
        <Icon size={56} strokeWidth={1.4} />
      </span>
      <div className="channel-flow">
        <span>Your customer</span>
        <ArrowRight size={17} />
        <span>{service.name}</span>
        <Check size={21} />
      </div>
      <strong>{service.outcome}</strong>
    </div>
  );
}

export default function App() {
  const page = useRef(null);
  useScrollReveal(page);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [selectedService, setSelectedService] = useState('Not sure yet');
  const [website, setWebsite] = useState('');
  const [workView, setWorkView] = useState('results');
  const [project, setProject] = useState(null);
  const mobileToggle = useRef(null);
  const serviceRefs = useRef([]);
  const active = services[activeService];
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        mobileToggle.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);
  function goToAudit() {
    document.getElementById('audit').scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
    document.getElementById('audit-name')?.focus({ preventScroll: true });
  }
  function chooseService(index) {
    setSelectedService(services[index].name);
    goToAudit();
  }
  function tabKey(e, index) {
    let next;
    if (e.key === 'ArrowRight') next = (index + 1) % services.length;
    if (e.key === 'ArrowLeft') next = (index + services.length - 1) % services.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = services.length - 1;
    if (next !== undefined) {
      e.preventDefault();
      setActiveService(next);
      serviceRefs.current[next]?.focus();
    }
  }
  return (
    <div ref={page} className="motion-page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav
            id="primary-nav"
            className={menuOpen ? 'primary-nav nav-open' : 'primary-nav'}
            aria-label="Main navigation"
          >
            {[
              ['Services', '#services'],
              ['Our work', '#work'],
              ['Why DMD', '#why-us'],
              ['FAQs', '#faq'],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#audit" className="button button-blue" onClick={() => setMenuOpen(false)}>
              Get a free audit <ArrowUpRight size={17} />
            </a>
          </nav>
          <button
            ref={mobileToggle}
            className="icon-button mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <Eyebrow>FULL-SERVICE DIGITAL MARKETING AGENCY</Eyebrow>
              <h1>
                Turn attention
                <br />
                into your next
                <br />
                <span>customer.</span>
                <span className="headline-star" aria-hidden="true">
                  ✳
                </span>
              </h1>
              <p>
                Google Ads, Meta Ads, social media and websites.
                <br className="desktop-break" /> One connected team. Built around your business.
              </p>
              <form
                className="hero-audit"
                onSubmit={(e) => {
                  e.preventDefault();
                  goToAudit();
                }}
              >
                <label htmlFor="hero-website" className="sr-only">
                  Your website address
                </label>
                <Search className="hero-input-icon" size={18} />
                <input
                  id="hero-website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                  autoComplete="url"
                />
                <button type="submit">
                  Get free audit <ArrowUpRight size={18} />
                </button>
              </form>
              <div className="hero-form-note">
                <span>
                  <Check size={13} /> Free. No commitment.
                </span>
                <span>A fresh perspective on your website.</span>
              </div>
              <a href="#work" className="hero-work-link">
                See the work behind the words <ArrowRight size={17} />
              </a>
            </div>
            <HeroShowcase onSelect={setProject} />
          </div>
          <div className="container hero-bottom">
            <div className="hero-bottom-title">
              <span /> YOUR GROWTH. OUR EVERYDAY WORK.
            </div>
            <div>
              <strong>250+</strong>
              <span>businesses served</span>
            </div>
            <div>
              <strong>11+</strong>
              <span>years of experience</span>
            </div>
            <div>
              <strong>5</strong>
              <span>countries served</span>
            </div>
            <span className="hero-stats-note">As reported by the agency.</span>
          </div>
        </section>
        <section className="client-strip" aria-label="Selected clients">
          <div className="container client-strip-inner">
            <span>
              DIFFERENT BUSINESSES.
              <br />
              ONE SHARED AMBITION.
            </span>
            <strong className="client-raika">
              Raika<span>PHOTOGRAPHY</span>
            </strong>
            <strong className="client-kinam">
              kinam<span>ENGINEERING</span>
            </strong>
            <strong className="client-pearl">
              Dr. Pearl’s<span>DENTAL STUDIO</span>
            </strong>
            <strong className="client-servo">
              SERVO<span>INDIA</span>
            </strong>
          </div>
        </section>
        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <Eyebrow>THE WORK SPEAKS FIRST</Eyebrow>
                <h2>
                  Real businesses.
                  <br />
                  <span>Visible progress.</span>
                </h2>
              </div>
              <div className="heading-side">
                <p>
                  A few examples from the agency’s portfolio.
                  <br />
                  Explore the pages. Look at the reported results.
                </p>
                <div className="work-switch" role="group" aria-label="Client work view">
                  <button
                    aria-pressed={workView === 'results'}
                    onClick={() => setWorkView('results')}
                  >
                    Google Ads results
                  </button>
                  <button
                    aria-pressed={workView === 'design'}
                    onClick={() => setWorkView('design')}
                  >
                    Website previews
                  </button>
                </div>
              </div>
            </div>
            <div className="case-grid">
              {cases.map((item, index) => (
                <article
                  className="case-card"
                  key={item.id}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                >
                  <div className="case-preview">
                    <BrowserPreview project={item} onClick={() => setProject(item)} />
                  </div>
                  <div className="case-content" key={workView}>
                    <div className="case-category">
                      <span>{item.category}</span>
                      <span>{workView === 'results' ? 'GOOGLE ADS' : 'WEB DESIGN'}</span>
                    </div>
                    <h3>{item.name}</h3>
                    {workView === 'results' ? (
                      <>
                        <div className="case-metrics">
                          <span>{item.before}</span>
                          <ArrowRight size={21} />
                          <strong>{item.after}</strong>
                          <span className="growth-chip">
                            {item.growth}
                            <ArrowUpRight size={13} />
                          </span>
                        </div>
                        <p className="metric-unit">{item.unit}</p>
                      </>
                    ) : (
                      <p className="case-description">
                        An actual website preview published in the agency’s portfolio.
                      </p>
                    )}
                    <button className="text-link" onClick={() => setProject(item)}>
                      {workView === 'results' ? 'Explore the result' : 'Explore the preview'}
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">
              Figures and previews from the original website. Measurement dates and ad spend are not
              specified. Results vary.
            </p>
          </div>
        </section>
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <Eyebrow>ONE TEAM. THE WHOLE JOURNEY.</Eyebrow>
                <h2>
                  The right service.
                  <br />
                  <span>For your next step.</span>
                </h2>
              </div>
              <p>
                Start with what your business needs.
                <br />
                We connect the channels that get you there.
              </p>
            </div>
            <div
              className="service-tabs"
              role="tablist"
              aria-label="Explore our services"
              data-reveal
            >
              {services.map((service, index) => (
                <button
                  key={service.name}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  role="tab"
                  id={'service-tab-' + index}
                  aria-controls="service-panel"
                  aria-selected={activeService === index}
                  tabIndex={activeService === index ? 0 : -1}
                  onClick={() => setActiveService(index)}
                  onKeyDown={(e) => tabKey(e, index)}
                  className={activeService === index ? 'service-tab active' : 'service-tab'}
                >
                  <service.icon size={20} />
                  <span>{service.name}</span>
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
            <div
              className="service-panel"
              id="service-panel"
              role="tabpanel"
              aria-labelledby={'service-tab-' + activeService}
              tabIndex={0}
            >
              <ServiceVisual index={activeService} key={'visual-' + activeService} />
              <div className="service-content" key={'content-' + activeService}>
                <span className="service-number">{active.number} / OUR SERVICES</span>
                <h3>{active.label}</h3>
                <p>{active.description}</p>
                <div className="service-tags">
                  {active.tags.map((tag) => (
                    <span key={tag}>
                      <Check size={13} />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="button button-dark" onClick={() => chooseService(activeService)}>
                  Talk to us about {active.name}
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
            <div className="service-bottom">
              <span>
                <Layers3 size={18} /> Ads, pages and tracking. Planned together.
              </span>
              <a href="#audit">
                Not sure where to start? Let’s figure it out <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="why-section section" id="why-us">
          <div className="container">
            <div className="why-heading" data-reveal>
              <Eyebrow>A PARTNER, BEYOND THE PROJECT</Eyebrow>
              <h2>
                Good marketing starts
                <br />
                with <span>understanding.</span>
              </h2>
              <p>
                Your business. Your customer. Your next move.
                <br />
                The strategy starts here, before a single ad goes live.
              </p>
            </div>
            <div className="principles">
              {[
                {
                  icon: Search,
                  title: 'Your business comes first.',
                  body: 'We understand your offer, margins and customer before recommending a service.',
                },
                {
                  icon: Layers3,
                  title: 'One team connects it all.',
                  body: 'Ads, websites and tracking are planned together, with one relationship to manage.',
                },
                {
                  icon: BarChart3,
                  title: 'Progress you can follow.',
                  body: 'Clear reporting and documented decisions help you see what changed and why.',
                },
              ].map((p, index) => (
                <article
                  className="principle"
                  key={p.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                >
                  <div className="principle-top">
                    <span>
                      <p.icon size={26} strokeWidth={1.5} />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
            <div className="company-note">
              <ShieldCheck size={21} />
              <p>
                <strong>One registered company behind the work.</strong> Digital Marketing Doctor ·
                Web5G Technology Pvt. Ltd. · Working since 2015
              </p>
              <a href={originalSite + 'about-us'} target="_blank" rel="noreferrer">
                Meet the agency
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
        <section className="section process-section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <Eyebrow>FROM FIRST HELLO TO WHAT’S NEXT</Eyebrow>
                <h2>
                  Less guesswork.
                  <br />
                  <span>More direction.</span>
                </h2>
              </div>
              <p>
                A considered process.
                <br />A clear next step at every stage.
              </p>
            </div>
            <div className="process-grid">
              {[
                {
                  title: 'Understand the business',
                  body: 'A conversation about your goals, customer and what is already running.',
                },
                {
                  title: 'Connect the right pieces',
                  body: 'A plan that brings the right channels, pages and people together.',
                },
                {
                  title: 'Measure. Learn. Improve.',
                  body: 'Put the plan to work, follow the progress and keep refining.',
                },
              ].map((step, index) => (
                <article
                  className="process-step"
                  key={step.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                >
                  <div className="step-top">
                    <span>0{index + 1}</span>
                    <ArrowRight size={25} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section faq-section" id="faq">
          <div className="container faq-grid" data-reveal>
            <div>
              <Eyebrow>BEFORE WE GET STARTED</Eyebrow>
              <h2>
                Ask away.
                <br />
                <span>We’ll keep it clear.</span>
              </h2>
              <p>Still have a question?</p>
              <a href="#audit" className="text-link">
                Let’s talk it through
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details name="faq" key={question} open={index === 0 ? true : undefined}>
                  <summary>
                    <span className="faq-number">0{index + 1}</span>
                    {question}
                    <Plus size={19} />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="audit-section" id="audit">
          <div className="container audit-grid">
            <div className="audit-copy" data-reveal>
              <Eyebrow>LET’S FIND YOUR NEXT OPPORTUNITY</Eyebrow>
              <h2>
                Your next
                <br />
                chapter
                <br />
                <span>starts here.</span>
                <ArrowUpRight className="audit-arrow" size={72} strokeWidth={1} />
              </h2>
              <p>
                A fresh look at your website.
                <br />A clearer path to your next customer.
              </p>
              <ul>
                <li>
                  <Check size={16} /> Review your customer journey
                </li>
                <li>
                  <Check size={16} /> Find opportunities to improve enquiries
                </li>
                <li>
                  <Check size={16} /> Start with a practical plan
                </li>
              </ul>
            </div>
            <AuditForm
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              website={website}
              setWebsite={setWebsite}
            />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Logo />
              <p>
                From first click to next customer.
                <br />
                One connected team.
              </p>
            </div>
            <div className="footer-links">
              <span>EXPLORE</span>
              <a href="#services">Our services</a>
              <a href="#work">Client work</a>
              <a href="#why-us">Why DMD</a>
            </div>
            <div className="footer-links">
              <span>LET’S TALK</span>
              <a href="mailto:info@digitalmarketingdoctor.com">
                <Mail size={15} />
                info@digitalmarketingdoctor.com
              </a>
              <a href="tel:+919999123123">
                <Phone size={15} />
                +91 9999-123-123
              </a>
              <span>Vaishali, Ghaziabad · India</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Digital Marketing Doctor · Web5G Technology Pvt. Ltd.
            </span>
            <span>Independent developer assessment concept.</span>
            <a href={originalSite} target="_blank" rel="noreferrer">
              Original website <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      <div className="mobile-contact">
        <a href="tel:+919999123123">
          <Phone size={16} />
          Call us
        </a>
        <a href="#audit">
          Get a free audit
          <ArrowUpRight size={16} />
        </a>
      </div>
      {project && <CaseDialog project={project} onClose={() => setProject(null)} />}
    </div>
  );
}
