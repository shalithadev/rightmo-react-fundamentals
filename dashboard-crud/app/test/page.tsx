"use client";

import { PageLoading } from "react-page-loading-v2";

export default function TestPage() {
  return (
    <PageLoading duration={2000} type="cubes" color="#2ecc71">
      <h1>Welcome!</h1>
      <p>Your content is ready.</p>
    </PageLoading>
  );
}
