import "./styles.css";

export default function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Kula-AI</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link
        href="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/css/kula-290bcb.webflow.4a5b76d94.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <div className="page-wrapper">
        <div className="global-styles w-embed">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n                /* Snippet gets rid of top margin on first element in any rich text*/\n                \n                .w-richtext>:first-child {\n                    margin-top: 0;\n                }\n                /* Snippet gets rid of bottom margin on last element in any rich text*/\n                \n                .w-richtext>:last-child,\n                .w-richtext ol li:last-child,\n                .w-richtext ul li:last-child {\n                    margin-bottom: 0;\n                }\n                /* Snippet makes all link elements listed below to inherit color from their parent */\n                \n                a,\n                .w-tab-link,\n                .w-nav-link,\n                .w-dropdown-btn,\n                .w-dropdown-toggle,\n                .w-dropdown-link {\n                    color: inherit;\n                }\n                /* Snippet prevents all click and hover interaction with an element */\n                \n                .clickable-off {\n                    pointer-events: none;\n                }\n                /* Snippet enables all click and hover interaction with an element */\n                \n                .clickable-on {\n                    pointer-events: auto;\n                }\n                /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n                \n                .div-square::after {\n                    content: "";\n                    display: block;\n                    padding-bottom: 100%;\n                }\n                /*Hide focus outline for main content element*/\n                \n                main:focus-visible {\n                    outline: -webkit-focus-ring-color auto 0px;\n                }\n                /* Make sure containers never lose their center alignment*/\n                \n                .container-medium,\n                .container-small,\n                .container-large {\n                    margin-right: auto !important;\n                    margin-left: auto !important;\n                }\n                /*Reset selects, buttons, and links styles*/\n                \n                .w-input,\n                .w-select,\n                a {\n                    color: inherit;\n                    text-decoration: inherit;\n                    font-size: inherit;\n                }\n                /*Apply "..." after 3 lines of text */\n                \n                .text-style-3lines {\n                    display: -webkit-box;\n                    overflow: hidden;\n                    -webkit-line-clamp: 3;\n                    -webkit-box-orient: vertical;\n                }\n                /* Apply "..." after 2 lines of text */\n                \n                .text-style-2lines {\n                    display: -webkit-box;\n                    overflow: hidden;\n                    -webkit-line-clamp: 2;\n                    -webkit-box-orient: vertical;\n                }\n                /* Apply "..." at 100% width */\n                \n                .truncate-width {\n                    width: 100%;\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                }\n                /* Removes native scrollbar */\n                \n                .no-scrollbar {\n                    -ms-overflow-style: none;\n                    overflow: -moz-scrollbars-none;\n                }\n                \n                .no-scrollbar::-webkit-scrollbar {\n                    display: none;\n                }\n                \n                <style>.hero__card {\n                    backdrop-filter: blur(2em);\n                    -webkit-backdrop-filter: blur(2em);\n                }\n            '
            }}
          />
        </div>
      </div>
      <div
        data-w-id="161957b1-a96f-dbbc-a2fe-d2695da24854"
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar5_component-2 dark w-nav"
      >
        <div className="navbar5_container">
          <a
            href="/"
            aria-current="page"
            className="navbar5_logo-link w-nav-brand w--current"
          >
            <img
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
              loading="lazy"
              width={36}
              alt="Kula logo"
              className="navbar5_logo"
            />
          </a>
          <nav role="navigation" className="navbar5_menu-2 w-nav-menu">
            <div className="navbar5_menu-left">
              <div
                data-hover="true"
                data-delay={200}
                data-w-id="161957b1-a96f-dbbc-a2fe-d2695da2485a"
                className="navbar11_menu-dropdown w-dropdown"
              >
                <div className="navbar11_dropdown-toggle w-dropdown-toggle">
                  <div className="dropdown-icon-2 w-icon-dropdown-toggle" />
                  <div className="text-block-20">
                    <span className="text-span-17">Product</span>
                  </div>
                </div>
              </div>
              <a href="/story" className="navbar5_link-2 dark w-nav-link">
                Our Story
              </a>
              <div
                data-hover="true"
                data-delay={200}
                data-w-id="9b2c750f-9c86-6a76-f258-e1528116ca57"
                className="navbar11_menu-dropdown w-dropdown"
              >
                <div className="navbar11_dropdown-toggle w-dropdown-toggle">
                  <div className="dropdown-icon-2 w-icon-dropdown-toggle" />
                  <div className="text-block-20">
                    <span className="text-span-17">Resources</span>
                  </div>
                </div>
                <nav
                  data-w-id="9b2c750f-9c86-6a76-f258-e1528116ca5d"
                  className="navbar11_dropdown-list-2 w-dropdown-list"
                >
                  <div className="navbar11_dropdown-link-list">
                    <a
                      id="w-node-_9b2c750f-9c86-6a76-f258-e1528116ca5f-10cfef58"
                      href="/blog"
                      target="_blank"
                      className="navbar11_dropdown-link w-inline-block"
                    >
                      <div className="navbar11_text-wrapper">
                        <div className="text-block-21">Blog</div>
                      </div>
                    </a>
                    <a
                      href="/resources/outbound-recruiting-playbook"
                      className="navbar11_dropdown-link w-inline-block"
                    >
                      <div className="navbar11_text-wrapper">
                        <div className="text-block-22">Guides</div>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="navbar5_menu-right">
              <a
                data-click-id="book-demo"
                href="/book-demo"
                target="_blank"
                className="button-3 gradient-button w-button"
              >
                Book a demo
              </a>
            </div>
          </nav>
          <div className="navbar5_menu-button w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon_line-top" />
              <div className="menu-icon_line-middle">
                <div className="menu-icon_line-middle-inner" />
              </div>
              <div className="menu-icon_line-bottom" />
            </div>
          </div>
        </div>
      </div>
      <header className="section-header23">
        <div className="page-padding-2">
          <div className="container-small">
            <div className="padding-vertical padding-custom2">
              <div className="letter">
                <div className="max-width-xlarge align-center">
                  <div className="margin-bottom margin-small">
                    <h1>
                      Turn employee's networks into your talent pipeline
                      <br />
                    </h1>
                  </div>
                  <p className="text-size-medium-2">
                    Bring all professional connections of your existing team
                    members on one platform, request referrals in a click, and
                    get an intro in another.
                    <br />
                  </p>
                  <div className="margin-top margin-medium">
                    <div className="button-row is-button-row-center">
                      <a href="/circles" className="button-tertiary w-button">
                        View Circles
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-layout349">
        <div className="page-padding-5">
          <div className="container-large">
            <div className="w-layout-grid layout349_component">
              <div
                id="w-node-c2d4d73d-3623-c8c3-cf7e-89f912b4ceae-10cfef58"
                className="layout349_content-wrapper"
              >
                <div className="layout349_content">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-12">Kula Circles</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">
                      <strong>All your employees’ networks in one place</strong>
                    </h2>
                  </div>
                  <p className="text-size-medium-2">
                    Bring all your employee networks spread across LinkedIn,
                    Gmail, and spreadsheets, together on one single platform.
                    Apply advanced filters and mine for best-fit candidates.
                    <br />
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63078dd2236b92a9cbeb9f4c_cir.png 2442w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt
                      className="layout349_mobile-image"
                    />
                  </div>
                  <div className="background-holder">
                    <div className="background-layer-2 background-color-1" />
                  </div>
                </div>
                <div
                  data-w-id="c2d4d73d-3623-c8c3-cf7e-89f912b4cebe"
                  className="layout349_content"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-12">Kula Circles</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">
                      Get referral introductions in one-click
                    </h2>
                  </div>
                  <p className="text-size-medium-2">
                    <a href="#">
                      Request referrals and get introductions in one smooth
                      flow. Fewer follow-ups, more referrals, faster hires.
                    </a>
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db3272de75c5e8c92931f_getintro.png 2443w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt
                      className="layout349_mobile-image"
                    />
                  </div>
                  <div style={{ opacity: "0" }} className="background-holder">
                    <div className="background-layer-2 background-color-2" />
                  </div>
                </div>
                <div
                  data-w-id="c2d4d73d-3623-c8c3-cf7e-89f912b4cecc"
                  className="layout349_content"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-12">Kula Circles</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">
                      <a href="#">Transparency for the referrers</a>
                    </h2>
                  </div>
                  <p className="text-size-medium-2">
                    <a href="#">
                      The referrers know how their referrals are faring at each
                      stage of the hiring process. Adding more accountability,
                      and reducing reverse follow-ups for a better overall
                      experience.
                    </a>
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b18fe24bca41b5802ee37_cir-6.png 2443w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt
                      className="layout349_mobile-image"
                    />
                  </div>
                  <div style={{ opacity: "0" }} className="background-holder">
                    <div className="background-layer-2 background-color-3" />
                  </div>
                </div>
              </div>
              <div className="layout349_desktop-image-wrapper">
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634522ad8a89ddfab738c792_circle-screen-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634522ad8a89ddfab738c792_circle-screen-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634522ad8a89ddfab738c792_circle-screen-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="layout349_image is-image1 w-background-video w-background-video-atom"
                >
                  <video
                    id="0ae34f08-b6e3-93b7-6d40-6b103ec936a8-video"
                    autoPlay
                    loop
                    style={{}}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634522ad8a89ddfab738c792_circle-screen-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634522ad8a89ddfab738c792_circle-screen-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634559d23a74fd058882bc4c_New-file (3)-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634559d23a74fd058882bc4c_New-file (3)-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634559d23a74fd058882bc4c_New-file (3)-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-w-id="3c48c60b-e551-ddfb-e275-4c31d0d9d2c5"
                  className="layout349_image is-image2 w-background-video w-background-video-atom"
                >
                  <video
                    id="3c48c60b-e551-ddfb-e275-4c31d0d9d2c5-video"
                    autoPlay
                    loop
                    style={{}}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634559d23a74fd058882bc4c_New-file (3)-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/634559d23a74fd058882bc4c_New-file (3)-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy] (2)-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy] (2)-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy] (2)-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-w-id="649ec1b3-e06f-ed62-381d-1a8fa408b381"
                  className="layout349_image is-image3 w-background-video w-background-video-atom"
                >
                  <video
                    id="649ec1b3-e06f-ed62-381d-1a8fa408b381-video"
                    autoPlay
                    loop
                    style={{}}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy] (2)-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a2d7f2bcd7b198691ad_New-file-[copy]-[copy] (2)-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
