"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { referenceMarkup } from "@/components/portfolio/reference-markup";
import type { Theme } from "@/lib/theme";

type ReferencePortfolioProps = {
  initialTheme: Theme;
};

export function ReferencePortfolio({ initialTheme }: ReferencePortfolioProps) {
  const [themeSlot, setThemeSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    queueMicrotask(() => setThemeSlot(document.getElementById("theme-slot")));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const body = document.body;
    const loader = document.getElementById("loader");
    const count = document.getElementById("ld-count");
    const head = document.getElementById("site-head");
    const progress = document.getElementById("progress");
    const menuButton = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const marquee = document.getElementById("marquee-track");
    const cursor = document.getElementById("cursor");
    const preview = document.getElementById("preview");

    const finishLoad = () => {
      body.classList.add("loaded");
      if (loader) {
        loader.classList.add("done");
        window.setTimeout(() => loader.remove(), 950);
      }
    };

    if (reduced) {
      loader?.remove();
      body.classList.add("loaded");
    } else if (loader && count) {
      let percent = 0;
      const tick = () => {
        percent = Math.min(100, percent + 7 + Math.random() * 16);
        count.textContent = String(Math.floor(percent)).padStart(3, "0");
        if (percent < 100) window.setTimeout(tick, 70 + Math.random() * 110);
        else window.setTimeout(finishLoad, 220);
      };
      tick();
      window.setTimeout(() => {
        if (!body.classList.contains("loaded")) finishLoad();
      }, 3500);
    }

    const clockNodes = document.querySelectorAll<HTMLElement>(".js-clock");
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const updateClock = () => {
      const value = `PKT ${formatter.format(new Date())}`;
      clockNodes.forEach((node) => (node.textContent = value));
    };
    updateClock();
    const clockInterval = window.setInterval(updateClock, 1000);

    let scrollPending = false;
    const onScroll = () => {
      head?.classList.toggle("scrolled", window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress)
        progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      scrollPending = false;
    };
    const onScrollEvent = () => {
      if (!scrollPending) {
        scrollPending = true;
        window.requestAnimationFrame(onScroll);
      }
    };
    window.addEventListener("scroll", onScrollEvent, { passive: true });
    onScroll();

    const closeMenu = () => {
      body.classList.remove("menu-open");
      body.style.overflow = "";
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open menu");
    };
    const onMenuClick = () => {
      const open = !body.classList.contains("menu-open");
      body.classList.toggle("menu-open", open);
      body.style.overflow = open ? "hidden" : "";
      menuButton?.setAttribute("aria-expanded", String(open));
      menuButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    menuButton?.addEventListener("click", onMenuClick);
    mobileMenu
      ?.querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));

    const revealElements = document.querySelectorAll(".fade-up, .reveal-title");
    const revealObserver =
      "IntersectionObserver" in window && !reduced
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("in-view");
                  revealObserver?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
          )
        : null;
    revealElements.forEach((element) => revealObserver?.observe(element));
    if (!revealObserver)
      revealElements.forEach((element) => element.classList.add("in-view"));

    const chars = "—+*<>/\\_#";
    const scramble = (element: Element) => {
      const original = element.getAttribute("data-text") || element.textContent || "";
      let frame = 0;
      const total = Math.max(14, original.length + 6);
      const step = () => {
        let output = "";
        for (let index = 0; index < original.length; index += 1) {
          const revealAt = (index / original.length) * total * 0.7;
          output +=
            frame >= revealAt + 6
              ? original[index]
              : original[index] === " "
                ? " "
                : chars[Math.floor(Math.random() * chars.length)];
        }
        element.textContent = output;
        frame += 1;
        if (frame <= total) window.setTimeout(step, 28);
        else element.textContent = original;
      };
      step();
    };
    const scrambleNodes = document.querySelectorAll(".scramble");
    const scrambleObserver =
      !reduced && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  scramble(entry.target);
                  scrambleObserver?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.6 },
          )
        : null;
    scrambleNodes.forEach((element) => scrambleObserver?.observe(element));

    if (marquee && marquee.dataset.duplicated !== "true") {
      marquee.insertAdjacentHTML("beforeend", marquee.innerHTML);
      marquee.dataset.duplicated = "true";
    }

    let animationFrame = 0;
    const cursorRing = cursor?.querySelector<HTMLElement>(".c-ring");
    const cursorDot = cursor?.querySelector<HTMLElement>(".c-dot");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
      const target = event.target as HTMLElement;
      const link = target.closest("a,button");
      const view = target.closest('[data-cursor="view"]');
      cursor?.classList.toggle("is-link", Boolean(link) && !view);
      cursor?.classList.toggle("is-view", Boolean(view));
    };
    const cursorLoop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }
      animationFrame = window.requestAnimationFrame(cursorLoop);
    };
    if (finePointer && !reduced && cursor) {
      body.classList.add("cursor-on");
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      cursorLoop();
    }

    const previewImage = preview?.querySelector<HTMLImageElement>("img");
    const previewCaption = preview?.querySelector<HTMLElement>(".pv-cap");
    const onProjectEnter = (event: Event) => {
      const row = event.currentTarget as HTMLElement;
      if (previewImage) previewImage.src = row.dataset.preview || "";
      if (previewCaption) previewCaption.textContent = row.dataset.cap || "";
      preview?.classList.add("on");
    };
    const onProjectLeave = () => preview?.classList.remove("on");
    const projectRows = document.querySelectorAll<HTMLElement>(".project-row");
    if (finePointer && !reduced) {
      projectRows.forEach((row) => {
        row.addEventListener("mouseenter", onProjectEnter);
        row.addEventListener("mouseleave", onProjectLeave);
      });
    }

    const magneticMove = (event: Event) => {
      const mouse = event as MouseEvent;
      const element = mouse.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      element.style.transform = `translate(${(mouse.clientX - (rect.left + rect.width / 2)) * 0.18}px, ${(mouse.clientY - (rect.top + rect.height / 2)) * 0.18}px)`;
    };
    const magneticReset = (event: Event) => {
      (event.currentTarget as HTMLElement).style.transform = "";
    };
    const magneticNodes = document.querySelectorAll<HTMLElement>(".magnetic");
    if (finePointer && !reduced) {
      magneticNodes.forEach((node) => {
        node.addEventListener("mousemove", magneticMove);
        node.addEventListener("mouseleave", magneticReset);
      });
    }

    const toTop = document.getElementById("to-top");
    const onToTop = () =>
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    toTop?.addEventListener("click", onToTop);

    return () => {
      window.clearInterval(clockInterval);
      window.removeEventListener("scroll", onScrollEvent);
      menuButton?.removeEventListener("click", onMenuClick);
      mobileMenu
        ?.querySelectorAll("a")
        .forEach((link) => link.removeEventListener("click", closeMenu));
      revealObserver?.disconnect();
      scrambleObserver?.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(animationFrame);
      projectRows.forEach((row) => {
        row.removeEventListener("mouseenter", onProjectEnter);
        row.removeEventListener("mouseleave", onProjectLeave);
      });
      magneticNodes.forEach((node) => {
        node.removeEventListener("mousemove", magneticMove);
        node.removeEventListener("mouseleave", magneticReset);
      });
      toTop?.removeEventListener("click", onToTop);
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: referenceMarkup }} />
      {themeSlot
        ? createPortal(
            <div className="reference-theme-control" aria-label="Theme controls">
              <ThemeToggle initialTheme={initialTheme} />
            </div>,
            themeSlot,
          )
        : null}
    </>
  );
}
