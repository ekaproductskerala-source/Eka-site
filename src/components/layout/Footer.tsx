import { siteConfig } from "@/config/site";

export function Footer() {
  const socials = Object.entries(siteConfig.socialLinks).filter(
    ([, href]) => href,
  );

  return (
    <footer className="site-footer">
      <div className="site-footer__main section-gutter">
        <div className="site-footer__brand">
          <a
            className="wordmark wordmark--footer"
            href="#home"
            aria-label="EKA home"
          >
            <span className="wordmark__seal" aria-hidden="true">
              E
            </span>
            <span className="wordmark__copy">
              <strong>EKA</strong>
              <small>The taste of real Kerala</small>
            </span>
          </a>
          <p>
            Rooted in Kerala&apos;s heritage.
            <br />
            Made with the warmth of tradition.
          </p>
        </div>
        <div className="site-footer__column">
          <span className="site-footer__label">EXPLORE</span>
          <a href="#tradition">Our story</a>
          <a href="#process">The process</a>
          <a href="#oil">Our oil</a>
          <a href="#why-eka">Why EKA</a>
        </div>
        <div className="site-footer__column">
          <span className="site-footer__label">SAY HELLO</span>
          {siteConfig.address ? (
            <span>{siteConfig.address}</span>
          ) : (
            <span>Address to be confirmed</span>
          )}
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          ) : (
            <span>Email to be confirmed</span>
          )}
          {socials.map(([name, href]) => (
            <a href={href} key={name} target="_blank" rel="noreferrer">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
        <div className="site-footer__column site-footer__legal">
          <span className="site-footer__label">THE SMALL PRINT</span>
          <span>
            Privacy policy <small>Coming soon</small>
          </span>
          <span>
            Terms &amp; conditions <small>Coming soon</small>
          </span>
        </div>
      </div>
      <div className="site-footer__bottom section-gutter">
        <span>© {new Date().getFullYear()} EKA. All rights reserved.</span>
        <span>
          THE TASTE OF REAL KERALA <i aria-hidden="true">✳</i>
        </span>
        <span>Site details to be confirmed before launch.</span>
      </div>
    </footer>
  );
}
