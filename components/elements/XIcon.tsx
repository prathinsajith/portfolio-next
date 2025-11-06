import Image from "next/image";
import XLogo from "../../public/x-logo.svg";

interface XIconProps {
  className?: string;
  size?: number;
  alt?: string;
}

const XIcon = ({ className, size = 24, alt = "X logo" }: XIconProps) => (
  <Image
    src={XLogo}
    alt={alt}
    width={size}
    height={size}
    className={className}
    style={{ display: "inline-block", }}
    
  />
);

export default XIcon;
