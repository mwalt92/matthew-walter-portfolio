import type { Metadata } from "next";
import "./globals.css";
import "./gallery.css";
import "./profile.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Matthew Walter | Product & Data Systems Builder",
    template: "%s | Matthew Walter"
  },
  description:
    "Product, data, learning technology, and implementation case studies from Matthew Walter."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <strong>Matthew Walter</strong>
              <p>Product & Data Systems Builder</p>
            </div>
            <div className="footer-links">
              <a href="mailto:mattwalt92@gmail.com">Email</a>
              <a href="/contact">Contact</a>
              <a href="https://www.linkedin.com/in/matthew-david-walter/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/mwalt92" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
