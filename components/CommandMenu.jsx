"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { commandLinks } from "../data/portfolio";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = useCallback((href) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  }, []);

  return (
    <>
      {/* Trigger — works identically on touch (tap) and desktop (click), plus Cmd/Ctrl+K */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="flex h-11 items-center gap-2 rounded-full border border-surface px-4 text-sm text-muted transition-colors hover:text-paper"
      >
        <Search size={14} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-surface px-1.5 py-0.5 text-xs sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 sm:pt-32"
          onClick={() => setOpen(false)}
        >
          <Command
            className="w-full max-w-md  rounded-xl border border-surface bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            label="Command menu"
          >
            <Command.Input
              autoFocus
              placeholder="Jump to a section..."
              className="w-full border-b border-surface bg-transparent px-4 py-4 text-base text-paper outline-none placeholder:text-muted"
            />
            <Command.List className="max-h-72  p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
                No results.
              </Command.Empty>
              {commandLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  onSelect={() => go(link.href)}
                  className="cursor-pointer rounded-md px-3 py-3 text-sm text-paper data-[selected=true]:bg-surface"
                >
                  {link.label}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </div>
      )}
    </>
  );
}
