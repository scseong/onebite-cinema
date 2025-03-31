/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "src/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;
