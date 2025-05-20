export default function Head() {
  return (
    <>

      {/* Optional preconnect to speed up Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload the WOFF2 file for Playfair Display — adjust weight as needed */}
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYhCw.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="image"
        href="/hero-background-cover.webp"
        type="image/webp"
      />
      <link rel="canonical" href="https://gravecare.co.za/" />

    </>
  );
}
