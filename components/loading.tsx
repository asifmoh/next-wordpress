import { AppProps } from 'next/app';


import { motion } from 'framer-motion';

function Loading({ Component, pageProps }: AppProps) {


    return (
        <main className="main">
              <motion.div
                   initial="initial"
                   animate="animate"
                  // this is a simple animation that fades in the page. You can do all kind of fancy stuff here
                   variants={{
                       initial: {
                          opacity: 0,  
                       },
                       animate: {
                          opacity: 1,
                       },
                   }}>
                     <Component {...pageProps} />
               </motion.div>
        </main>
    );
}

export default Loading;