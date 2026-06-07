import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AboutHer from "../components/AboutHer";
import Favorites from "../components/Favorites";
import Timeline from "../components/Timeline";
import LoveReasons from "../components/LoveReasons";
import BucketList from "../components/BucketList";
import BeachSection from "../components/BeachSection";
import MountainSection from "../components/MountainSection";
import StoryBook from "../components/StoryBook";
import MemoryWall from "../components/MemoryWall";
import TravelMap from "../components/TravelMap";
import LoveJar from "../components/LoveJar";
import LoveLetter from "../components/LoveLetter";
import Countdown from "../components/Countdown";

export const routes = [
//   { path: "", label: "Home", Component: Hero, category: "Main" },
//   { path: "about", label: "About", Component: AboutHer, category: "Memories" },

//   { path: "favorites", label: "Favorites", Component: Favorites, category: "Memories" },
//   { path: "timeline", label: "Timeline", Component: Timeline, category: "Memories" },
  { path: "reasons", label: "Love Reasons", Component: AboutHer, category: "Memories" },
//   { path: "bucket", label: "Bucket List", Component: BucketList, category: "Memories" },
  { path: "story", label: "Story Book", Component: StoryBook, category: "Memories" },
  { path: "memories", label: "Memory Wall", Component: MemoryWall, category: "Memories" },

//   { path: "beach", label: "Beach", Component: BeachSection, category: "Places" },
//   { path: "mountain", label: "Mountains", Component: MountainSection, category: "Places" },
//   { path: "travel", label: "Travel Map", Component: TravelMap, category: "Places" },

  { path: "jar", label: "Love Jar", Component: LoveJar, category: "Love" },
//   { path: "letter", label: "Love Letter", Component: LoveLetter, category: "Love" },
//   { path: "countdown", label: "Countdown", Component: Countdown, category: "Love" }
];

export default function Router() {
  const [route, setRoute] = useState(() => (window.location.hash || "").replace("#", ""));

  useEffect(() => {
    const onHash = () => setRoute((window.location.hash || "").replace("#", ""));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const entry = routes.find((r) => r.path === route) || routes[0];
  const C = entry.Component;

  const pageName = entry.path || "home";

  return (
    <main className={`page page-${pageName}`}>
      <C />
    </main>
  );
}
