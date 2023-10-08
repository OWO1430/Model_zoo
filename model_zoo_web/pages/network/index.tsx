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
                    // iframe 已加载完成
                    const iframe = e.target as HTMLIFrameElement;
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
                    if (iframeDocument) {
                        // 在此处执行与 iframe 内容相关的 JavaScript 操作
                    }
                }}
            ></iframe>
        </div>
    );
};

export default function Home() {
    const embeddedWebsiteSrc = "https://rawgit.com/jexp/neo4j-3d-force-graph/master/particles.html"; // 替换为你想要嵌入的网站 URL

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl p-4">
                <h1 className="text-3xl font-semibold mb-4">Embedded Website Example</h1>
                <EmbeddedWebsite src={embeddedWebsiteSrc} />
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


