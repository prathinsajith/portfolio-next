import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Prathin Sajith, a Senior Software Engineer based in Dubai, for project inquiries or collaboration.",
};

export default function ContactPage() {
  return <ContactClient />;
}
