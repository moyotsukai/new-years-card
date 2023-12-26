/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV == "production"

const nextConfig = {
  assetPrefix: isProduction ? "/newyearscard" : "",
  basePath: isProduction ? "/newyearscard" : ""
}

module.exports = nextConfig
