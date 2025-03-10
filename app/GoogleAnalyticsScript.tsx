import React from 'react';
import Script from 'next/script';

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11125733571" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-11125733571');`}
      </Script>
    </>
  )
}

export default GoogleAnalyticsScript