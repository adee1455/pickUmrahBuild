// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
// };

// export default nextConfig;

// next.config.js

const nextConfig = {
    async exportPathMap() {
        return {
            '/': { page: '/' },
            // add other static pages here if needed
        };
    },
    // You can keep other configurations as needed
};

export default nextConfig;
