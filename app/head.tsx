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

      {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '717660720718297');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=717660720718297&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
    </>
  );
}
