<template>
  <footer
    class="flex flex-col justify-center w-full sticky top-[100vh] <!-- force footer to end of page --> px-[3.75rem] py-[1.875rem] gap-[1.875rem] border-t border-primary bg-background"
  >
    <h2
      id="footer_statement"
      class="text-center fontSize-h2 bg-background lowercase"
    >
      creation fueled by the creator
    </h2>
    <div id="footer_contact" class="flex flex-col justify-center">
      <img
        src="https://a.storyblok.com/f/310287/2925x400/82879cfbe9/neckxproductions_white.webp/m/"
        alt="neckXproductions-Logo"
        width="{2925}"
        height="{400}"
        loading="lazy"
        id="footer-logo"
        class="w-[335px] self-center pointer-events-none"
      />
      <a
        href="mailto:yannick@neckXproductions.ch"
        id="company-email"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-center text-decoration-none hover:underline hover:decoration-accent"
        >yannick@neckXproductions.ch
      </a>
    </div>
    <div
      id="footer_subElements"
      class="flex flex-col md:justify-between md:flex-row max-sm:justify-center text-center max-md:gap-[20px] align-top"
    >
      <div
        id="footer_menu"
        class="flex flex-col gap-[10px] max-md:self-center md:w-full md:text-left"
      >
        <NuxtLink
          v-for="({ navItem, url }, index) in [
            { navItem: 'Impressum', url: '/impressum' },
            { navItem: 'Datenschutz', url: '/datenschutz' },
          ]"
          :key="index"
          :to="url"
          class="text-decoration-none hover:underline hover:decoration-accent"
          :aria-label="navItem"
        >
          {{ navItem }}
        </NuxtLink>
      </div>

      <div
        id="footer_socials"
        class="flex flex-row gap-[30px] self-center justify-center md:w-full"
      >
        <div class="footer-tooltip-container">
          <span class="footer-tooltip" id="social_label_youtube">YouTube</span>
          <a
            href="https://youtube.com/@neckxproductions"
            target="_blank"
            aria-label="Zum Youtube-Kanal von neckXproductions"
          >
            <svg
              id="youtube-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              height="30"
              width="30"
              aria-labelledby="social_label_youtube"
            >
              <title>Zum Youtube-Kanal von neckXproductions</title>
              <path
                d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                fill="#eee"
              ></path>
            </svg>
          </a>
        </div>
        <div class="footer-tooltip-container">
          <span class="footer-tooltip" id="social_label_github">GitHub</span>
          <a
            href="https://github.com/y-neck"
            target="_blank"
            aria-label="Zu meinem GitHub-Profil"
          >
            <svg
              id="github-logo"
              width="30"
              height="30"
              viewBox="0 0 92 96"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="social_label_github"
            >
              <title>Besuche meine GitHub-Seite</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </div>
        <div class="footer-tooltip-container">
          <span class="footer-tooltip" id="social_label_linkedin"
            >LinkedIn</span
          >
          <a
            href="https://www.linkedin.com/in/yannick-s"
            target="_blank"
            aria-label="Zu meinem LinkedIn-Profil"
          >
            <svg
              id="linkedin-icon"
              height="30"
              viewBox="0 0 72 72"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="social_label_linkedin"
            >
              <title>Besuche mein LinkedIn-Profil</title>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                  fill="#FFF"
                ></path>
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#000"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="footer-tooltip-container">
          <span class="footer-tooltip" id="social_label_instagram"
            >Instagram</span
          >
          <a
            href="https://www.instagram.com/neckXproductions/"
            target="_blank"
            aria-label="Zur Instagram-Seite von neckXproductions"
          >
            <svg
              id="instagram-icon"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              height="30"
              width="30"
              aria-labelledby="social_label_instagram"
            >
              <title>Zur Instagramseite von neckXproductions</title>
              <path
                class="cls-1"
                d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                fill="#eee"
                transform="translate(-2.5 -2.5)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        id="footer_copyright"
        class="flex flex-col md:self-end md:text-right md:w-full"
      >
        <span
          id="copyright_divider"
          class="text-[32px] leading-normal tracking-wide font-bold italic md:text-right"
          >//////////////</span
        >
        <span id="copyright">{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
let year = new Date().getFullYear();
let copyright: string = `© ${year} neckXproductions`;
</script>

<style scoped>
/* Tooltip container */
.footer-tooltip-container {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.footer-tooltip-container .footer-tooltip {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.footer-tooltip-container .footer-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.footer-tooltip-container:hover .footer-tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
