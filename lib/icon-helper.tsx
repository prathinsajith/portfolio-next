import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

// X (Twitter) icon as SVG component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/**
 * Get the appropriate icon component for a social link
 * @param iconName - The name of the icon from SOCIAL_LINKS constant
 * @returns The corresponding Lucide icon component
 */
export function getSocialIcon(iconName: string) {
  const iconMap: Record<string, any> = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Twitter: SiX,
    X: SiX,
    Instagram: FaInstagram,
  };

  return iconMap[iconName] || FaGithub; // Fallback to Github icon
}
