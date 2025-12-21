import { feedData } from "../../../../lib/demoFeed";

export default async function SingleFeedPage({ params }: { params: Promise<{ "yt-id": string }> | { "yt-id": string } }) {
  // `params` can be a Promise in Next.js route handlers / server components.
  // Await it to safely access dynamic route parameters (avoids the sync dynamic APIs error).
  const resolvedParams = await params;

  console.log("PARAMS =>", resolvedParams);
  console.log("FEED DATA =>", feedData);

  const feed = feedData.find((item) => item.id === resolvedParams["yt-id"]);
    if (!feed) {
      return <div className="p-6">Feed not found</div>;
    }


    

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        {feed.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {feed.videos.map((video) => (
          <div
            key={video.id}
            className="bg-neutral-900 rounded-xl overflow-hidden"
          >
            <div className="h-44 bg-neutral-700" />
            <div className="p-2">
              <p className="text-sm font-semibold truncate">
                {video.channel}
              </p>
              <p className="text-xs text-neutral-400">
                {video.views} views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
