import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://byu-ece-software.github.io"),
  title: {
    default: "BYU ECE Software",
    template: "%s | BYU ECE Software",
  },
  description:
    "Meet the people, explore the projects, and read the ideas behind BYU ECE Software.",
  openGraph: {
    type: "website",
    siteName: "BYU ECE Software",
    title: "BYU ECE Software",
    description:
      "A home for the people, projects, and ideas behind BYU ECE Software.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <div className="footer-brand">BYU ECE <span>SOFTWARE</span></div>
              <p>A place for people, projects, and ideas.</p>
            </div>
            <div className="footer-right">
              <a href="https://github.com/BYU-ECE-Software" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <span>© {new Date().getFullYear()} BYU ECE Software</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
