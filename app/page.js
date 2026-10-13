export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="GiftActive home">
            <span className="brand-icon">G</span>
            <span>GiftActive</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#guide">Overview</a>
            <a href="#balance">Balance</a>
            <a href="#activation">Activation</a>
            <a href="#visa">Visa Usage</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <div id="top"></div>

      <main>
        {/* ── Hero ─────────────────────────────── */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Gift Card Knowledge Hub</div>

              <h1>
                Your Complete Resource for{" "}
                <span>GiftCardMall/Mygift</span>
              </h1>

              <p className="hero-copy">
                Discover how prepaid gift card values are tracked, where to
                locate card-specific directions, what activation may entail
                and why certain digital purchases might fail. This resource
                breaks down frequently asked questions into straightforward,
                actionable responses.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Check Your Balance
                </a>
                <a className="btn btn-secondary" href="#faq">
                  Explore Questions
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="card-label">A helpful first step</div>
              <h2>Prior to verifying a card balance</h2>

              <div className="mini-answer">
                <strong>Find the original guidelines</strong>
                <p>
                  Examine the reverse side of the card, its packaging or the
                  issuer&apos;s printed materials to determine the correct
                  servicing approach.
                </p>
              </div>

              <div className="mini-answer">
                <strong>Safeguard your card credentials</strong>
                <p>
                  Confirm the URL before submitting any data. This
                  independent resource never requests your complete card
                  number, PIN or security code.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Notice ───────────────────────────── */}
        <div className="notice">
          <div className="container notice-inner">
            <div className="notice-icon">!</div>
            <p>
              <strong>Third-party resource:</strong>{" "}
              GiftActive is not the official GiftCardMall or MyGift portal
              and has no connection with Blackhawk Network, Visa, Mastercard,
              American Express, any financial institution, merchant or
              specific card provider. Always adhere to the directions
              included with your particular card.
            </p>
          </div>
        </div>

        {/* ── Guide Section ────────────────────── */}
        <section id="guide">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">The fundamentals</div>
              <h2>What should you understand about prepaid gift cards?</h2>
              <p>
                The majority of card-related inquiries fit into a handful of
                practical categories: verifying remaining value, setting up a
                card, grasping payment acceptance and fixing transaction
                issues. Pinpointing your specific question can streamline
                the entire process.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Brief overview</span>
              <p>
                GiftCardMall/Mygift searches typically pertain to prepaid
                gift card details. The right method for reviewing a balance
                or handling a card is determined by the card program and the
                guidelines issued by its provider.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <div className="icon-box">01</div>
                <h3>Balance knowledge</h3>
                <p>
                  Comprehend your available funds and how transactions,
                  holds or returns can influence the amount shown.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">02</div>
                <h3>Activation fundamentals</h3>
                <p>
                  Find out where to access activation directions and why
                  the steps can vary across different card programs.
                </p>
              </article>

              <article className="info-card">
                <div className="icon-box">03</div>
                <h3>Transaction problem-solving</h3>
                <p>
                  Explore typical reasons for rejected payments and
                  practical methods to figure out your next move.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Balance Section ──────────────────── */}
        <section id="balance" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance details</div>
              <h2>How to verify a giftcardmall balance securely</h2>
              <p>
                A balance inquiry lets you see the value remaining before
                completing another transaction. The figure displayed may
                account for recent card usage instead of the original
                loaded amount.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Straightforward answer</span>
              <p>
                To verify a <strong>giftcardmall balance</strong>, begin
                with the website or contact information listed on the card
                or original packaging. Double-check the address on your own
                before providing any confidential payment data.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <h3>Examine the card details</h3>
                  <p>
                    Search for the specified balance-check directions,
                    support contact information and any program-specific
                    conditions.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <h3>Confirm the website URL</h3>
                  <p>
                    Inspect the domain closely and steer clear of unfamiliar
                    links that request your private card information.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <h3>Check recent card transactions</h3>
                  <p>
                    Outstanding authorizations, completed purchases and
                    refund credits can impact the remaining amount or when
                    a change appears on your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Balance Terminology ──────────────── */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Balance terms explained</div>
              <h2>Decoding GiftCardMall/Mygift balance</h2>
              <p>
                This combined phrase is commonly used by individuals
                attempting to ascertain the remaining value on a prepaid
                card and figure out which directions are applicable.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Remaining balance</h3>
                <p>
                  The remaining balance represents the sum currently
                  accessible for qualifying transactions under the card&apos;s
                  guidelines. It could be less than the initially loaded
                  value following purchases.
                </p>
              </article>

              <article className="info-card">
                <h3>In-progress transactions</h3>
                <p>
                  A retailer may place a temporary hold before a payment
                  is settled. The accessible amount can therefore differ
                  from a straightforward tally of finalized purchases.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── What is GiftCardMall ─────────────── */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Brand and search insights</div>
              <h2>What does giftcardmall stand for?</h2>
              <p>
                A general search can signal various needs, from overall
                gift card information to setup instructions and payment
                assistance. Not every webpage mentioning a card name is
                an official servicing portal.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Card documentation</h3>
                <p>
                  Consult the materials provided with your card to
                  understand the relevant terms and capabilities.
                </p>
              </article>

              <article className="info-card">
                <h3>Balance and transactions</h3>
                <p>
                  Grasp the distinction between the original card amount,
                  finalized purchases and temporary payment holds.
                </p>
              </article>

              <article className="info-card">
                <h3>Help channels</h3>
                <p>
                  Rely on the issuer&apos;s own support contacts when you
                  require assistance with a specific card or transaction.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── www.giftcardmall.com mygift ──────── */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">URL verification</div>
              <h2>Looking up www.giftcardmall.com mygift</h2>
              <p>
                Certain users look for a full web address because they
                intend to reach a particular card management service.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Before proceeding</span>
              <p>
                When you look up{" "}
                <strong>www.giftcardmall.com mygift</strong>, cross-reference
                the destination with the directions printed on your card
                or its packaging. A search listing or sponsored ad should
                not be considered proof that a page is the correct official
                portal for your particular card.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Examine the domain name</h3>
                <p>
                  Watch for typos, unusual subdomains or extra words
                  that alter the web address.
                </p>
              </article>

              <article className="info-card">
                <h3>Exercise caution with messages</h3>
                <p>
                  Unsolicited texts or emails asking for card information
                  should be approached carefully, even when they use
                  recognizable language.
                </p>
              </article>

              <article className="info-card">
                <h3>Refer to original materials</h3>
                <p>
                  The card&apos;s own printed directions are the most
                  reliable starting point for locating its designated
                  service channel.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Activation ───────────────────────── */}
        <section id="activation">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Activation essentials</div>
              <h2>How prepaid gift card activation functions</h2>
              <p>
                Activation procedures differ from card to card. Some are
                activated at the point of sale, while others may require
                the holder to complete extra steps before usage.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Verify activation status</h3>
                <p>
                  Look over the purchase receipt, card packaging and
                  enclosed instructions to establish whether activation
                  was already done or an additional step is needed.
                </p>
              </article>

              <article className="info-card">
                <h3>Use the appropriate procedure</h3>
                <p>
                  Follow the activation details provided for your card.
                  Avoid entering payment credentials on an unrelated site
                  just because it references the same card name.
                </p>
              </article>
            </div>

            <div className="answer-box" style={{ marginTop: "20px" }}>
              <span className="label">Helpful suggestion</span>
              <p>
                If the card remains non-functional after following its
                directions, reach out to the issuer or support team listed
                on the card materials. Retain the purchase receipt if
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* ── Visa Usage ───────────────────────── */}
        <section id="visa" className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Payment network fundamentals</div>
              <h2>What does giftcardmall/mygift visa signify?</h2>
              <p>
                Searches that include the term Visa may involve prepaid
                cards operating on the Visa payment network. A payment
                network by itself does not ensure that every retailer or
                transaction category will be accepted.
              </p>
            </div>

            <div className="answer-box">
              <span className="label">Straightforward answer</span>
              <p>
                The expression{" "}
                <strong>giftcardmall/mygift visa</strong> may point to a
                Visa-branded prepaid gift card. Whether it functions for a
                particular purchase hinges on the card&apos;s conditions,
                the retailer&apos;s acceptance policies, the remaining
                balance and the nature of the transaction.
              </p>
            </div>

            <div className="grid-3">
              <article className="info-card">
                <h3>Retailer acceptance</h3>
                <p>
                  Verify that the store accepts the relevant payment
                  network and prepaid card format.
                </p>
              </article>

              <article className="info-card">
                <h3>Accurate payment information</h3>
                <p>
                  Adhere to the issuer&apos;s instructions for billing
                  details and other data the retailer requires.
                </p>
              </article>

              <article className="info-card">
                <h3>Transaction limitations</h3>
                <p>
                  Certain cards impose restrictions on cross-border,
                  subscription-based or other specialized transactions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Related Searches ─────────────────── */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Associated searches</div>
              <h2>Interpreting mygift giftcardmall inquiries</h2>
              <p>
                Merging card names in a search usually means the visitor
                is seeking a definitive answer about balance, setup or card
                utilization. Recognizing the intended goal clarifies the
                appropriate next step.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Why individuals use this term</h3>
                <p>
                  A search for <strong>mygift giftcardmall</strong> may
                  signal an effort to locate card details, balance
                  guidance or support with an online purchase.
                </p>
              </article>

              <article className="info-card">
                <h3>Where to start</h3>
                <p>
                  Begin with the physical card and its accompanying
                  documents. Those materials can help pinpoint the
                  applicable issuer, servicing directions and card-specific
                  terms.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Payment Troubleshooting ──────────── */}
        <section>
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Transaction troubleshooting</div>
              <h2>Why could a prepaid card be rejected?</h2>
              <p>
                A failed purchase can stem from multiple causes. Reviewing
                the remaining balance is a practical first step, but it
                may not account for every payment issue.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Typical reasons</h3>
                <ul>
                  <li>Not enough available funds</li>
                  <li>Retailer or transaction-type restrictions</li>
                  <li>Inaccurate payment details</li>
                  <li>Activation not yet finished</li>
                  <li>Temporary hold on authorized amounts</li>
                  <li>Card expiry or other card-specific constraints</li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Actions to take</h3>
                <ul>
                  <li>Look up the current balance.</li>
                  <li>Ensure the retailer accepts the card.</li>
                  <li>Verify the transaction details.</li>
                  <li>Revisit the card&apos;s directions.</li>
                  <li>Reach out to the issuer if the problem continues.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── Safety ───────────────────────────── */}
        <section className="soft-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Cardholder protection</div>
              <h2>Protect your gift card information</h2>
              <p>
                Prepaid card data can hold monetary value. Guard card
                credentials and confirm the destination before disclosing
                any sensitive information.
              </p>
            </div>

            <div className="grid-2">
              <article className="info-card">
                <h3>Smart security habits</h3>
                <ul>
                  <li>Use the servicing details provided with the card.</li>
                  <li>Inspect the website domain with care.</li>
                  <li>Hold on to receipts and purchase records.</li>
                  <li>Refrain from posting card information online.</li>
                  <li>Be wary of unsolicited prize or refund notifications.</li>
                </ul>
              </article>

              <article className="info-card">
                <h3>Data this site does not require</h3>
                <p>
                  GiftActive does not require your full card number, PIN,
                  CVV, password or any other confidential payment
                  credentials. Do not transmit those details through public
                  forms, comment sections or direct messages.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────── */}
        <section id="faq">
          <div className="container">
            <div className="section-heading">
              <div className="kicker">Frequently asked</div>
              <h2>GiftCardMall/Mygift FAQ</h2>
              <p>
                Succinct answers to popular questions regarding prepaid
                card balances, activation, payment processing and security.
              </p>
            </div>

            <div className="faq-list">
              <details open>
                <summary>What exactly is GiftCardMall/Mygift?</summary>
                <p>
                  It is a search term widely linked to prepaid gift card
                  information. The applicable balance and servicing method
                  depends on the individual card and its provider.
                </p>
              </details>

              <details>
                <summary>How can I look up a giftcardmall balance?</summary>
                <p>
                  Begin with the directions printed on your card or its
                  packaging. Confirm the website before entering any
                  private details.
                </p>
              </details>

              <details>
                <summary>What does GiftCardMall/Mygift balance indicate?</summary>
                <p>
                  It typically refers to the remaining value on a relevant
                  prepaid card. Recent purchases, authorization holds and
                  refunds may alter the displayed figure.
                </p>
              </details>

              <details>
                <summary>What should I know about www.giftcardmall.com mygift?</summary>
                <p>
                  Cross-check the address with the directions provided with
                  your specific card. Search listings and advertisements
                  alone do not confirm that a site is appropriate.
                </p>
              </details>

              <details>
                <summary>Can a Visa prepaid gift card be used for online shopping?</summary>
                <p>
                  It may work when the retailer accepts the applicable card
                  and the transaction satisfies the card&apos;s conditions
                  as well as the retailer&apos;s payment requirements.
                </p>
              </details>

              <details>
                <summary>Why was my gift card payment turned down?</summary>
                <p>
                  Possible explanations include insufficient remaining
                  value, incorrect payment fields, retailer restrictions,
                  incomplete activation or temporary authorization holds.
                </p>
              </details>

              <details>
                <summary>Is GiftActive an official GiftCardMall service?</summary>
                <p>
                  No. GiftActive is an independently operated educational
                  website and is not connected to GiftCardMall, MyGift,
                  Visa or any individual card provider.
                </p>
              </details>
            </div>

            {/* ── CTA ──────────────────────────── */}
            <div className="cta">
              <h2>Begin with the correct details</h2>
              <p>
                Rely on the documentation supplied with your card, verify
                the servicing URL and review the relevant guide above
                before taking any steps.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#balance">
                  Balance Guide
                </a>
                <a className="btn btn-secondary" href="#activation">
                  Activation Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">GiftActive</div>
              <p>Independent prepaid gift card educational resource.</p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#guide">Overview</a>
              <a href="#balance">Balance</a>
              <a href="#activation">Activation</a>
              <a href="#visa">Visa Usage</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>

          <div className="disclaimer">
            <strong>Disclaimer:</strong>{" "}
            GiftActive is an independently operated informational website. It
            is not affiliated with or endorsed by GiftCardMall, MyGift,
            Blackhawk Network, Visa, Mastercard, American Express, any
            financial institution, retailer or card provider. Card terms and
            procedures may differ. Follow the directions provided with your
            specific card.
          </div>

          <div className="copyright">
            © 2026 GiftActive. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
