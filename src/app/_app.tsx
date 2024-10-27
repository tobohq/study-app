// _app.tsx in src/app directory
import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

// Prevent Font Awesome from auto-adding its CSS since we’re importing it manually
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Add icons to the library
library.add(faPlay);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
