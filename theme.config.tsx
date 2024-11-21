import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";
import SparklesText from "@/components/ui/sparkles-text/SparklesText";
import dynamic from "next/dynamic";
import { APP_CONFIG } from "./config/app-config";
import { useRouter } from "next/router";
import { FC } from 'react';

// Import components
import Notice from "./components/Notice";
import _Image from "./components/Image";

const DynamicThemeToggle = dynamic(
  () => import("components/ui/theme-toggle/ThemeToggle"),
  {
    ssr: false,
  }
);

const config: DocsThemeConfig = {
  components: {
    Notice,
    Image: _Image,
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description || APP_CONFIG.description;
    const title = `${config.title} | ${APP_CONFIG.name} - ${APP_CONFIG.description}`;
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href={APP_CONFIG.logo} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={APP_CONFIG.logo}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={APP_CONFIG.logo}
        />
      </>
    );
  },
  navbar: {
    extraContent: <DynamicThemeToggle />,
  },
  notFound: {
    content: () => <h1>Not found</h1>,
    labels: "Not found 404",
  },
  toc: {
    backToTop: true,
    float: true,
  },
  logoLink: false,
  logo: function useRouterLogo() {
    const [renderSelect, setRenderSelect] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const shouldRenderSelect =
        router.pathname.startsWith("/docs") &&
        !router.pathname.startsWith("/docs/user-guide");
      console.log("Current path:", router.pathname);
      console.log("Should render select:", shouldRenderSelect);
      setRenderSelect(shouldRenderSelect);
    }, [router.pathname]);

    return (
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="hidden sm:flex items-center text-current no-underline hover:opacity-75 ltr:mr-auto rtl:ml-auto"
        >
          {/* <div className="flex items-center relative">
            <SparklesText
              text="WA"
              sparklesCount={4}
              className='text-xl font-extrabold text-blue-400'
              colors={{ first: '#A855F7', second: '#A855F7' }}
            />
            <Image src={APP_CONFIG.logo} alt="logo" width={20} height={20} />
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              NET
            </span>
          </div> */}
          <Image src={APP_CONFIG.logo} alt="logo" width={35} height={35} />
        </Link>
      </div>
    );
  },
  darkMode: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  project: {
    link: APP_CONFIG.github,
  },
  // chat: {
  //   link: APP_CONFIG.discord,
  // },
  docsRepositoryBase: APP_CONFIG.github,
  footer: {
    component: (
      <footer className="bg-neutral-300 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
        <hr className="dark:border-neutral-800" />
        <div className="mx-auto max-w-[1440px] p-6 lg:py-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()} {APP_CONFIG.name}.{" "}
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {Object.entries(APP_CONFIG.social).map(([name, url]) => (
                <Link
                  key={name}
                  href={url}
                  className="hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <span className="sr-only">{name} page</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    ),
  },
};

export default config;
