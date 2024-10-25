/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "devsaidul.com",
      "media-cdn.tripadvisor.com",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn3.gstatic.com",
      "encrypted-tbn1.gstatic.com",
      "images.unsplash.com",
      "devsaidul.com",
      "encrypted-tbn3.gstatic.com",
      "foodking-react.vercel.app",
    ],
    // remotePatterns: [{ hostname: {"images.unsplash.com","devsaidul.com"}, protocol: "https" }],
  },
};

export default nextConfig;
