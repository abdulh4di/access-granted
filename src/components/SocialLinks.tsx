import styles from "./SocialLinks.module.css";

const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@accsessgranted_northeast",
    icon: "/assets/images/ag-social-tiktok.svg",
    external: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/AccessGrantedNortheast/",
    icon: "/assets/images/ag-social-facebook.svg",
    external: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/447777474195",
    icon: "/assets/images/ag-social-whatsapp.svg",
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/accessgranted_northeast/",
    icon: "/assets/images/ag-social-instagram.svg",
    external: true,
  },
];

interface SocialLinksProps {
  variant?: "light" | "white";
}

export default function SocialLinks({ variant = "light" }: SocialLinksProps) {
  return (
    <ul className={`${styles.list} ${variant === "white" ? styles.white : styles.light}`}>
      {SOCIALS.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            className={styles.chip}
            aria-label={s.name}
            {...(s.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <img src={s.icon} alt="" width={16} height={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
