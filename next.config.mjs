/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
};
module.exports = {
    target: 'serverless', // Treat all routes as serverless functions
  };
export default nextConfig;
