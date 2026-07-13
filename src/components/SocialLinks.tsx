import styles from "./SocialLinks.module.css";

const SOCIALS = [
  { name: "TikTok", href: "#", icon: "/assets/images/ag-social-tiktok.svg" },
  { name: "Facebook", href: "#", icon: "/assets/images/ag-social-facebook.svg" },
  { name: "WhatsApp", href: "#", icon: "/assets/images/ag-social-whatsapp.svg" },
  { name: "Instagram", href: "#", icon: "/assets/images/ag-social-instagram.svg" },
];

interface SocialLinksProps {
  variant?: "light" | "white";
}

export default function SocialLinks({ variant = "light" }: SocialLinksProps) {
  return (
    <ul className={`${styles.list} ${variant === "white" ? styles.white : styles.light}`}>
      {SOCIALS.map((s) => (
        <li key={s.name}>
          <a href={s.href} className={styles.chip} aria-label={s.name}>
            <img src={s.icon} alt="" width={16} height={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
