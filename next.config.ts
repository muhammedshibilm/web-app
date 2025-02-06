declare module 'next-pwa' {
  import { NextConfig } from 'next';

  export interface PWAConfig {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    buildExcludes?: string[];
    fallbacks?: {
      document?: string;
      image?: string;
      font?: string;
      audio?: string;
      video?: string;
    };
  }

  type WithPWA = (config: NextConfig & { pwa?: PWAConfig }) => NextConfig;

  const withPWA: WithPWA;
  export default withPWA;
}
