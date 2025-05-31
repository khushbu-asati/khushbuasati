// import Image from "next/image";
// import fs from 'fs';
// import path from 'path';

// const html = fs.readFileSync(path.join(process.cwd(), 'public', 'static-page2.html'), 'utf8');
// const html2 = fs.readFileSync(path.join(process.cwd(), 'public', 'aa.html'), 'utf8');

// export default function Home() {
//   return (
//     // <div dangerouslySetInnerHTML={{ __html: html2 }} />
//     <iframe src="/static-page2.html" width="100%" height="600px" />
//   );
// }

"use client";

import Home from "@/components/Home";
import CommonButtons from "@/components/SharedComponents/CommonButtons";
import { useEffect, useState } from "react";

export default function Page() {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Force reload on mount
    setIframeKey(Date.now());
  }, []);

  return (
    // <iframe
    //   key={iframeKey}
    //   src={`/aa.html?t=${iframeKey}`}
    //   width="100%"
    //   height="600"
    // />
    <>
      <Home />
      {/* <CommonButtons /> */}
    </>
  );
}
