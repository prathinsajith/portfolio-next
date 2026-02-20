import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description: "Get in touch with Prathin Sajith, a Senior Software Engineer based in Dubai, for project inquiries or collaboration.",
};

export default function ContactPage() {
  return <ContactClient />;
}
