// app/api/github-contributions/route.ts
// Fetches contribution data server-side so your token never hits the client.
//
// Setup:
//   1. Create a GitHub PAT at https://github.com/settings/tokens
//      → needs only the "read:user" scope (public data)
//   2. Add to .env.local:
//      GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

import { NextResponse } from "next/server";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not set in environment variables" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: "onewritescode" },
      }),
      next: { revalidate: 3600 }, // cache for 1 hour (Next.js ISR)
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const calendar =
      data?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: "Could not find contribution data" },
        { status: 404 }
      );
    }

    return NextResponse.json(calendar);
  } catch (err) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}