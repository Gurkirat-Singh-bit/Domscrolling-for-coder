<<<<<<< HEAD
import Link from "next/link";
import { feedData } from "../../lib/demoFeed";

export default function FeedHomePage() {
  return (
    <div className="space-y-10 p-4">
      {feedData.map((section) => (
        <div key={section.id}>
          {/* Section Title */}
          <h2 className="text-xl font-bold mb-3">
            {section.title}
          </h2>

          {/* Horizontal Cards */}
          <div className="flex gap-4 overflow-x-auto">
            {section.videos.map((video) => (
              <Link
                key={video.id}
                href={`/feed/yt/${section.id}`}
                className="min-w-[180px] bg-neutral-900 rounded-xl overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="h-44 bg-neutral-700" />

                {/* Info */}
                <div className="p-2">
                  <p className="text-sm font-semibold truncate">
                    {video.channel}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {video.views} views
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
=======
/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file page.tsx
 * @file Feed page that displays curated reels and content for logged-in users.
 */

export default function FeedPage() {
  // TODO: Implement feed page content
  return (
    <main>
      <h1>Feed</h1>
    </main>
>>>>>>> 17a5bfa5e143285a4b692d2ca667053eed1486b2
  );
}
