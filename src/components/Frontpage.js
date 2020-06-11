import React from 'react';

import Banner from '../img/omnis-wallpaper.png';
import Launcher from '../img/OmnisWorld-Launcher.png';

export default function Frontpage() {
    return (
        <main id="frontpage">
            <img src={Banner} alt="Banner" id="frontpageBanner" />
            <h1>Omnis World</h1>
            <h2>Do voluptate commodo est Lorem in enim excepteur sunt reprehenderit occaecat eu qui.</h2>
            <section id="blurb">
                <section>
                    <div>
                        Eu ad est eiusmod ut id id Lorem do ex fugiat deserunt nulla et. Mollit nulla nulla aliquip id anim veniam anim mollit exercitation excepteur qui tempor incididunt. Dolor laboris sunt aliquip cillum in labore ut reprehenderit elit consequat veniam ut qui.
					</div>
                    <div>
                        Duis cillum elit ea esse culpa reprehenderit mollit excepteur proident aliquip excepteur pariatur eu ut. Fugiat reprehenderit magna elit irure aliqua. Ut fugiat dolore aute pariatur voluptate deserunt est sint eu minim.
					</div>
                </section>
                <img src={Launcher} alt="Omnis World Launcher" id="frontpageLauncher" />
            </section>
            <section id="download">
                Ullamco est ipsum velit adipisicing cillum sit consectetur magna laborum cillum. Aute voluptate pariatur consequat ullamco. Labore excepteur deserunt tempor sunt ut amet anim magna consequat et culpa laborum.
			</section>
            <section id="news">
                <h2>Recent news</h2>
                <div id="newsContainer">

                </div>
            </section>
            <section id="forums">
                <h2>Recent forum posts</h2>
                <div id="forumContainer">

                </div>
            </section>
        </main>
    );
}