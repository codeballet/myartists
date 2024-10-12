import { ReactElement } from "react";

export function EditPage(): ReactElement {
    return (
        <section className="edit-page">
            <h2>EditPage</h2>
            <figure>
                {/* image link generated from: https://www.labnol.org/embed/google/photos/ */}
                {/* Or generate manually from shared photo (top link below) */}
                <img
                    // src="https://lh3.googleusercontent.com/pw/AP1GczOOxWR-UqZLHks2KbuVB0Zk2ZmWAHO2pcYqYhm9Ka587h47mFAI_8DsMO5ney5HXCWD-6VRpy1BfLHx0BZvQ2K3YiYxNGqpuMS9vF2E6JdvIq-05k7vt9gDtF6CnmoreQbbx2Gokz46qr_VX16V9hjW9w=w1384-h1845-s-no?authuser=0"
                    // src="https://lh3.googleusercontent.com/pw/AP1GczNOAylgYJ1Dyb63-l3JeTBoZsdLI5bCG_UAdU1_QWc4EB86KuSt3goYggumQLrAQZXcJa0mroDv0OKc4Ah9eYvATeZy8s1ukoiCooUEhi6urLziYf7I=w2400"
                    src="https://www.dropbox.com/scl/fi/fux195ko8f73a54pjhfip/2015-02-21-19.30.27.jpg?rlkey=7nqzuo3m2qhbt3caf6lkq3cy4&st=2b2e5fes&raw=1"
                    alt="picture"
                />
            </figure>
        </section>
    );
}
