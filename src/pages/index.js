import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Timeline } from 'react-twitter-widgets';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     description="Description will go into a meta tag in <head />">
  //     <HomepageHeader />
  //     <main>
  //       <HomepageFeatures />
  //     </main>
  //   </Layout>
  // );

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>3DStreet - open-source 3d street editor for safer streets</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/css/legacy-styles.css" />
      {/* header start */}
      <div className="st_header_wrapper">
        <div className="st_container">
          <div className="st_header_inner">
            <div className="st_header_logo">
              <a href="">
                <img src="/img/logo.svg" alt="" />
              </a>
            </div>
            <div className="st_header_nav">
              <ul>
                <li>
                  <a href="#scenes">Scene Gallery</a>
                </li>
                <li>
                  <a href="#news">In the News</a>
                </li>
                <li>
                  <a href="#connect">Connect with Us</a>
                </li>
              </ul>
            </div>
            <div className="st_header_button">
              <a href="https://3dstreet.app" className="button button-b3">
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* header end */}
      {/* banner start */}
      <div className="st_banner_wrapper text-center">
        <div className="st_container">
          <h1 className="h-1 color-white">Visualize safer streets.</h1>
          <a href="#scenes" className="button button-b1">
            See Example Scenes
          </a>
        </div>
      </div>
      {/* banner end */}
      {/* scenes start */}
      <div id="scenes" className="st_section">
        <div className="st_container">
          <h1 className="st_section_heading h-2 color-white text-center">
            3DStreet Scene Gallery
          </h1>
          <div className="st_scene_list">
            <div className="st_scene_item">
              <div className="st_scene_image">
                <img src="/img/scenes/scene1.jpg" alt="" />
                <div className="st_scene_overlay">
                  <a
                    href="https://github.3dstreet.org/3dtiles.html"
                    className="st_scene_launch"
                  >
                    <span className="st_scene_launch_text">Launch</span>
                    <span className="st_scene_launch_icon">
                      <svg
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="st_scene_details">
                <h3 className="title-2 color-white">3D Tiles Demo Scene</h3>
                <p className="title-3">
                  16th St &amp; South Van Ness Ave, San Francisco, CA - 3DStreet
                  layers mixed with 3d tiles drone photogrammetry to visualize
                  community-proposed alternatives.
                </p>
              </div>
            </div>
            <div className="st_scene_item">
              <div className="st_scene_image">
                <img src="/img/scenes/scene2.jpg" alt="" />
                <div className="st_scene_overlay">
                  <a
                    href="https://github.3dstreet.org/animated.html"
                    className="st_scene_launch"
                  >
                    <span className="st_scene_launch_text">Launch</span>
                    <span className="st_scene_launch_icon">
                      <svg
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="st_scene_details">
                <h3 className="title-2 color-white">Animated Example</h3>
                <p className="title-3">
                  A basic demonstration of animated people and vehicles.
                </p>
              </div>
            </div>
            <div className="st_scene_item">
              <div className="st_scene_image">
                <img src="/img/scenes/scene3.jpg" alt="" />
                <div className="st_scene_overlay">
                  <a
                    href="https://github.3dstreet.org/#https://streetmix.net/kfarr/3/example-street"
                    className="st_scene_launch"
                  >
                    <span className="st_scene_launch_text">Launch</span>
                    <span className="st_scene_launch_icon">
                      <svg
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="st_scene_details">
                <h3 className="title-2 color-white">Streetmix Demo Scene</h3>
                <p className="title-3">
                  This starter scene allows you to import any Streetmix scene by
                  pasting its URL.
                </p>
              </div>
            </div>
            {/* 
              <div class="st_scene_item">
                  <div class="st_scene_image">
                      <img src="/img/scenes/scene1.jpg" alt="">
                      <div class="st_scene_overlay">
                          <a href="https://github.3dstreet.org/intersection.html" class="st_scene_launch">
                              <span class="st_scene_launch_text">Launch</span>
                              <span class="st_scene_launch_icon">
                                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </span>
                          </a>
                      </div>
                  </div>
                  <div class="st_scene_details">
                      <h3 class="title-2 color-white">Intersection Simple Demo</h3>
                      <p class="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices cum lorem sapien in elementum, pharetra. Tortor malesuada ornare et ipsum.</p>
                  </div>
              </div>

              <div class="st_scene_item">
                  <div class="st_scene_image">
                      <img src="/img/scenes/scene2.jpg" alt="">
                      <div class="st_scene_overlay">
                          <a href="https://github.3dstreet.org/intersection.html" class="st_scene_launch">
                              <span class="st_scene_launch_text">Launch</span>
                              <span class="st_scene_launch_icon">
                                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </span>
                          </a>
                      </div>
                  </div>
                  <div class="st_scene_details">
                      <h3 class="title-2 color-white">Intersection Simple Demo</h3>
                      <p class="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices cum lorem sapien in elementum, pharetra. Tortor malesuada ornare et ipsum.</p>
                  </div>
              </div>

              <div class="st_scene_item">
                  <div class="st_scene_image">
                      <img src="/img/scenes/scene3.jpg" alt="">
                      <div class="st_scene_overlay">
                          <a href="" class="st_scene_launch">
                              <span class="st_scene_launch_text">Launch</span>
                              <span class="st_scene_launch_icon">
                                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00012 6.99999L17 6.99976M17 6.99976L11.5566 1.49976M17 6.99976L11.5566 12.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </span>
                          </a>
                      </div>
                  </div>
                  <div class="st_scene_details">
                      <h3 class="title-2 color-white">Title</h3>
                      <p class="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ultrices cum lorem sapien in elementum, pharetra. Tortor malesuada ornare et ipsum.</p>
                  </div>
              </div> */}
          </div>
          <div className="text-center">
            <div className="st_scene_show_more">
              <span>Show more</span>
              <svg
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#EEEEEE"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* scenes end */}
      {/* news start */}
      <div id="news" className="st_section st_section_white">
        <div className="st_container">
          <h1 className="st_section_heading h-2 color-dark text-center">
            3DStreet in the News
          </h1>
          <div className="st_news_list">
            <div className="st_news_item">
              <div className="st_news_head">
                <div className="st_news_head_avatar">
                  <img src="/img/news/news1_avatar.jpg" alt="" />
                </div>
                <div className="st_news_head_name title-2">
                  The San Francisco <span>Standard</span>
                </div>
              </div>
              <h3 className="title-1">
                Introducing the ‘Burrito Plan,’ One Way to Safety on Valencia Street
              </h3>
              <div className="st_news_image">
                <img src="/img/news/news1.jpg" alt="" />
              </div>
              <div className="st_news_content">
                <p>
                  There is no enforcement against vehicles blocking bike lanes, even
                  across the street from the Mission police station.
                </p>
                <p className="text-italic">
                  What if I told you I have come up with a solution that is better
                  for bikes and businesses?
                </p>
              </div>
              <a
                href="https://sfstandard.com/perspectives/perspective-introducing-the-burrito-plan-one-way-to-safety-on-valencia-street/"
                className="button button-b3"
              >
                Read the full article
              </a>
            </div>
            <div className="st_news_item">
              <div className="st_news_head">
                <div className="st_news_head_avatar">
                  <img src="/img/news/news2_avatar.jpg" alt="" />
                </div>
                <div className="st_news_head_name title-2">
                  The Philadelphia <span>Inquirer</span>
                </div>
              </div>
              <h3 className="title-1">
                Philadelphia needs to manage the return of the car as the pandemic
                subsides
              </h3>
              <div className="st_news_image">
                <img src="/img/news/news2.jpg" alt="" />
              </div>
              <div className="st_news_content">
                <p>
                  So far, the message to motorists seems to be: C’mon back. But
                  Philadelphia needs to retain the public space clawed back from the
                  automobile during the pandemic.
                </p>
              </div>
              <a
                href="https://www.inquirer.com/real-estate/inga-saffron/philadelphia-parking-cycling-driving-mlk-drive-20210524.html"
                className="button button-b3"
              >
                Original article (paywall)
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* news end */}
      {/* Get in touch start */}
      <div id="connect" className="st_section st_section_connect">
        <div className="st_container">
          <h1 className="st_section_heading h-2 color-white text-center">
            Connect with Us
          </h1>
          <div className="st_connect_wrapper">
            <div className="st_connect_twitter">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: '3dstreetapp'
              }}
              options={{
                height: '800'
              }}
            />
            </div>
            <div className="st_connect_discordGithub">
              <h3 className="title-1 color-white">Join our Discord server</h3>
              <p className="color-white">
                Be part of the community. Take a look at how we work on projects. We
                share ideas and would love to hear yours.
              </p>
              <a
                className="button button-white button-icon"
                href="https://discord.gg/9DgKkFCetC"
              >
                Join 3DStreet Discord
                <span>
                  <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 13.5C9.55228 13.5 10 13.0523 10 12.5C10 11.9477 9.55228 11.5 9 11.5C8.44772 11.5 8 11.9477 8 12.5C8 13.0523 8.44772 13.5 9 13.5Z"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 13.5C15.5523 13.5 16 13.0523 16 12.5C16 11.9477 15.5523 11.5 15 11.5C14.4477 11.5 14 11.9477 14 12.5C14 13.0523 14.4477 13.5 15 13.5Z"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 8C11 7 13 7 16.5 8"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 17C10.5 18 13.5 18 17 17"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 17.5C15.5 18.5 17 20.5 17.5 20.5C19 20.5 20.333 18.833 21 17.5C21.667 15.833 21.5 11.667 19.5 6C18.043 4.985 16.5 4.66 15 4.5L14 7"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.49999 17.5C8.49999 18.5 7.14399 20.5 6.66799 20.5C5.23899 20.5 3.96999 18.833 3.33499 17.5C2.69999 15.833 2.85899 11.667 4.76299 6C6.15099 4.985 7.54499 4.66 8.99999 4.5L9.99999 7"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <div className="color-white">
                (If invite expired, email us below.)
              </div>
              <div className="st_divider">/</div>
              <h3 className="title-1 color-white">Contribute on GitHub</h3>
              <p className="color-white">
                See the 3DStreet core viewer source code and help make it better.
              </p>
              <a
                className="button button-white button-icon"
                href="https://github.com/3dstreet/3dstreet"
              >
                3DStreet GitHub Repo
                <span>
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 17.5C3.2 18.9 3.2 15 1.5 14.5M13.5 19.5V16C13.5 15 13.6 14.6 13 14C15.8 13.7 18.5 12.6 18.5 8.00001C18.4988 6.80498 18.0325 5.65732 17.2 4.80001C17.5905 3.76198 17.5545 2.61164 17.1 1.60001C17.1 1.60001 16 1.30001 13.6 2.90001C11.5672 2.3706 9.43276 2.3706 7.4 2.90001C5 1.30001 3.9 1.60001 3.9 1.60001C3.44548 2.61164 3.40953 3.76198 3.8 4.80001C2.96745 5.65732 2.50122 6.80498 2.5 8.00001C2.5 12.6 5.2 13.7 8 14C7.4 14.6 7.4 15.2 7.5 16V19.5"
                      stroke="#4818D1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Get in touch end */}
      {/* footer start */}
      <div className="st_footer color-white text-center">
        3DStreet is a registered trademark. ©2022 3DStreet LLC. <br /> Contact us
        via email at kieran (at) 3dstreet.org
      </div>
      {/* footer end */}
    </>

  );
}
