import clsx from "clsx";
import type { Metadata } from "next";
import { POPPINS, ROBOTO_MONO } from "@/constants/font";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "ID Card",
  description: "ID Card by Khoirul Mustaan",
  authors: [
    {
      name: "Khoirul Mustaan",
    },
  ],
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={clsx("scroll-smooth", POPPINS.variable, ROBOTO_MONO.variable)}>
      <body className="flex flex-col w-screen h-auto min-h-screen overflow-x-hidden bg-[#1b1a1a]">{children}</body>
    </html>
  );
}

interface Props {
  children: React.ReactNode;
}
