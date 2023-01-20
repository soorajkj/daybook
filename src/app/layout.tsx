import { ReactNode } from 'react';
import Pane from '_components/pane';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth">
      <head />
      <body className="bg-color-primary font-sans text-size-sm font-weight-normal leading-normal text-color-secondary">
        <div className="flex h-screen w-screen flex-row overflow-hidden">
          <aside className="relative h-full w-auto">
            <nav className="h-full w-16"></nav>
          </aside>
          <Pane direction="vertical" />
          <div className="flex flex-1 flex-col">
            <div className="h-auto w-full">
              <header className="h-16 w-full"></header>
            </div>
            <Pane direction="horizontal" />
            <main className="flex-grow overflow-y-auto">
              <div>{children}</div>
            </main>
            <Pane direction="horizontal" />
            <div className="h-auto w-full">
              <footer className="h-8 w-full"></footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}