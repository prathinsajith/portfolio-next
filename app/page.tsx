import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return <HomeClient />;
}
