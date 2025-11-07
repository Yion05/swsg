import type { platformPartnerSchema } from "../types/component.type";

export const platformPartner: platformPartnerSchema = {
  title: "Our Platform & Security",
  description: "Built on Law. Secured by Technology.",
  content: [
    {
      company_name: "Amazon Web Services (AWS)",
      company_logo: "/assets/about/aws.webp",
      details: [
        "At SmartWills, your security extends beyond just safeguards your data — it also covers your payments.",
        "All information is hosted on Amazon Web Services (AWS) in Singapore, a globally recognized and secure cloud platform. AWS provides physical safeguards such as 24/7 surveillance and restricted access, as well as digital safeguards including encryption of data, both in storage and in transit, continuous monitoring, and regular security updates. AWS also complies with international standards such as ISO 27001, SOC 1/2/3, and GDPR.",
        "For payments, we use HitPay, a leading payment gateway that is PCI-DSS compliant, ensuring that your payment details are processed securely in line with global financial security standards. With encryption and fraud-prevention systems in place, HitPay ensures  every transaction is handled safely and reliably.",
        "By combining AWS for hosting and HitPay for payments, SmartWills provides a secure, end-to-end environment where both your data and your financial transactions are always protected.",
      ],
    },
    {
      company_name: "HitPay (PCI-DSS compliant)",
      company_logo: "/assets/about/hitpay.webp",
      details: [
        "Access to our servers is limited to authorized devices and IP addresses, with Multi-Factor Authentication (MFA) and secure digital key authentication in place. Data transmitted between you and our platform is always encrypted using HTTPS/TLS. Our environment is continuously monitored by Amazon GuardDuty for any suspicious or malicious activity, and we apply regular updates and security patches to maintain system integrity.",
        "Database access is restricted internally, with administration limited to approved IP addresses. Passwords are protected using salted, one-way hashing algorithms, ensuring they cannot be reversed or exposed in the event of a breach. This is further reinforced by encrypted AWS storage volumes for data at rest.",
      ],
    },
  ],
};

export const businessPartner: platformPartnerSchema = {
  title: "Our Business Partners",
  description: "Strong Partnerships. Smarter Protection.",
  content: [
    {
      company_name: "Emre Legal LLC",
      company_logo: "/assets/about/emre.webp",
      details: [
        "Emre Legal LLC is a boutique law firm based in Singapore, dedicated to delivering practical and strategic legal solutions tailored to each client’s needs. The firm provides clear, effective advice and strong representation across a broad spectrum of legal matters.",
        "With a focus on professionalism, integrity, and trust, Emre Legal works closely with clients to navigate legal complexities with confidence and clarity. The team takes pride in offering personalised service and maintaining the highest standards of legal excellence.",
      ],
      link: "https://emre-legal.com/",
    },
    {
      company_name: "RiverSide Training",
      company_logo: "/assets/about/riverside.webp",
      details: [
        "Riverside Training Pte Ltd is a Singapore-based training provider offering accredited programmes in estate planning, financial literacy, and professional development. Established in 2016 and formerly known as Legasy Planners Pte Ltd, the company focuses on making complex legal and financial concepts accessible through structured, practical learning.",
        "Located at High Street Centre, Riverside Training delivers IBF-accredited courses and customised workshops for professionals and learners. With a strong emphasis on quality, relevance, and continuous learning, the company supports individuals and organisations in building competence and confidence within the estate and financial planning sectors.",
      ],
      link: "https://riversidetraining.sg/",
    },
  ],
};
