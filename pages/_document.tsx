// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" 
            type="text/css" 
            href="/smthBig.css">
        </link>
        <link rel="preconnect"
              href="https://fonts.gstatic.com">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&display=swap" 
              rel="stylesheet">        
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
