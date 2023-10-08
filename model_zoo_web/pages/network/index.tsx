import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/searchBox";
import SearchBar from "@/components/searchBar";
import ModelBlock from "@/components/modelBlock";
import { main } from "@/dummyData/database"

import React from "react";

const EmbeddedWebsite: React.FC<{ src: string }> = ({ src }) => {
    return (
        <div className="embed-container">
            <iframe
                src={src}
                frameBorder="0"
                scrolling="yes"
                className="w-full h-screen"
                title="Embedded Website"
                sandbox="allow-same-origin allow-scripts"
                onLoad={(e) => {
                    const iframe = e.target as HTMLIFrameElement;
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
                    if (iframeDocument) {
                    }
                }}
            ></iframe>
        </div>
    );
};

export default function Home() {
    const embeddedWebsiteSrc = "https://rawgit.com/jexp/neo4j-3d-force-graph/master/particles.html"; // 替换为你想要嵌入的网站 URL

    return (
        <div className="ml-20 min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl p-4">
                <h1 className="text-3xl font-semibold mb-4">Concept Demo</h1>
                <EmbeddedWebsite src={embeddedWebsiteSrc} />
            </div>
            <div className="w-full max-w-4xl p-4">
                <h1 className="text-3xl font-semibold mb-4">Future vision explaination</h1>
                <h6 className="text-3xl font-semibold mb-4 text-sm">The 3D graph on the left is currently imported from &quot;https://github.com/jexp/neo4j-3d-force-graph&quot; to display our concept.</h6>
                <h6>Our future vision: creating an intuitive graph on how the models and datas in the database relate to each others. The picture below is our current development progress, it seems like we can&apos;t implement the graphing feature to our frontend before the deadline, but we still want to showcase the functionality.</h6>
                <Image src="/neo4jexp.jpg" alt="conceptual demo" height={500} width={500} />
            </div>
        </div>
    );
}

// import { useEffect } from 'react';
// import session from '@/src/neo4j';

// const Home: React.FC = () => {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await session.run('MATCH (n) RETURN n LIMIT 5');
//         result.records.forEach((record) => {
//           console.log(record.get(0).properties); // Access Neo4j node properties
//         });
//       } catch (error) {
//         console.error('Neo4j query error:', error);
//       } finally {
//         session.close();
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Neo4j Integration in Next.js</h1>
//     </div>
//   );
// };

// export default Home;

// // pages/index.js

// pages/neovis.js
// import { useEffect } from 'react';
// const neo4jPassword = process.env.NEO4J_PASSWORD? process.env.NEO4J_PASSWORD: ''

// export default function NeoVisPage() {
//   useEffect(() => {
//     async function draw() {
//       // 导入NeoVis.js库
//       const NeoVis = require('neovis.js');

//       // 配置NeoVis.js
//       const config = {
//         container_id: 'viz',
//         server_url: 'neo4j+s://af28e064.databases.neo4j.io',
//         server_user: 'neo4j',
//         server_password: neo4jPassword,
//         labels: {
//           Character: {
//             label: 'name',
//             value: 'pagerank',
//             community: 'community',
//           },
//         },
//         relationships: {
//           INTERACTS: {
//             thickness: 'weight',
//           },
//         },
//         initial_cypher: 'MATCH (p:Person)RETURN p;',
//       };

//       const viz = new NeoVis.default(config);
//       await viz.render();
//     }

//     draw();
//   }, []);

//   return (
//     <div>
//       <h1>Neovis.js Simple Example</h1>
//       <div id="viz"></div>
//     </div>
//   );
// }


