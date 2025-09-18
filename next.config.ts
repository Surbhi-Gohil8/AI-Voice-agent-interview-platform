import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 eslint:{
  ignoreDuringBuilds:true,
 },
 typerscript:{
  ignoreBuildError:true,
 }
};

export default nextConfig;
