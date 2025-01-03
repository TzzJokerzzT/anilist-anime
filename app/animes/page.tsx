"use client";

import Layout from "@/layout/layout";
import HomeView from "@/view/HomeviewPage";

export default function AnimePage() {
  return (
    <Layout>
      <main className="flex flex-col min-h-screen">
        <HomeView />
      </main>
    </Layout>
  );
}
