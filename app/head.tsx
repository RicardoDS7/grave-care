export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://gravecare.co.za/" />

      {/* Preconnect for Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Load the Google Fonts stylesheet */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
        rel="stylesheet"
      />

      {/* Preload Playfair Display font */}
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYhCw.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Preload hero image */}
      <link
        rel="preload"
        as="image"
        href="/hero-background-cover.webp"
        type="image/webp"
      />
    </>
  );
}
