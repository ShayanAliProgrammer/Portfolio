"use client";

import React from "react";
import { CookiesProvider } from "react-cookie";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider
      defaultSetOptions={{
        path: "/",
      }}
    >
      {children}
    </CookiesProvider>
  );
}
