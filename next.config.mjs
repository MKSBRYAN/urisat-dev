/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode:true,
   images:{
   remotePatterns:[
      {
         protocol:'https',
         hostname:'images.unsplash.com',
         pathname:'**'
      }
   ]
   //  domains:['images.unsplash.com']
   }
    
};


export default nextConfig;

