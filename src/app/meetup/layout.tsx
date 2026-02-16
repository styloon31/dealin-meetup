import React from "react";

export default function MeetupScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <main>{children}</main>
      </div>
    </>
  );
}
