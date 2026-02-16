import React from "react";
import Head from "next/head";

export default function MeetupScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Dealin | The Weekly 60-Minute B2B Trade Floor for Manufacturers & Brokers</title>
        <meta 
          name="description" 
          content="Join the Network Exchange by Dealin. A weekly, verified virtual trade floor where industrial manufacturers, wholesalers, and brokers move inventory and source stock in just 60 minutes. No fluff, just deals." 
        />
        {/* Open Graph for Social Media Previews */}
        <meta property="og:title" content="Dealin | The Weekly 60-Minute B2B Trade Floor" />
        <meta property="og:description" content="Join the Network Exchange by Dealin. Verified virtual trade floor for industrial manufacturers and brokers." />
      </Head>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <main>{children}</main>
      </div>
    </>
  );
}