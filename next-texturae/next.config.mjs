/** @type {import('next').NextConfig} */

/**
 * ajout des domaines pour importer les différentes images
 */

const nextConfig = {
    images: {
              domains: ['n.nordstrommedia.com', 'imagescdn.simons.ca'],
    },
};

export default nextConfig;
