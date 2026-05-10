import { getProjectSubdomain } from "@/lib/subdomain";
import { HomePage } from "@/components/home/HomePage";

export default async function Home() {
  const projectSubdomain = await getProjectSubdomain();

  // If on a project subdomain, redirect to that project's full-screen page
  if (projectSubdomain === "ascend") {
    return <AscendFullScreen />;
  }

  // Otherwise, show the sales homepage
  return <HomePage />;
}

/**
 * Full-screen Ascend app embedded via iframe
 * Renders when user visits ascend.asixstud.io
 */
function AscendFullScreen() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://ascend.asix.live/"
        className="w-full h-full border-none"
        title="Ascend - Habit Tracker"
        allow="camera; microphone; geolocation"
      />
    </div>
  );
}
