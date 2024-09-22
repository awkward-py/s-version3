import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <NextSeo
        title="Pankaj Rawat | Frontend, touch of backend Developer"
        description="Explore the professional portfolio of Pankaj Rawat, an aspiring Frontend Developer with a foundational understanding of web development and a touch of backend experience."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Pankaj Rawat | Frontend, touch of backend Developer",
          description:
            "Explore his journey, see his projects, and witness his dedication to making a meaningful impact in web development. Watch as he continues to learn, grow, and contribute to the field with passion and creativity.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Pankaj Rawat",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Awkwardpy, awkwardpy, awkward-py, Pankaj Rawat, Pankaj dev, Developer Pankaj, Pankaj Full Stack Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
