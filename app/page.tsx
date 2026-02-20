import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";
import { SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return <HomeClient />;
}
