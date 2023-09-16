import Head from "next/head";
import Editor from "@monaco-editor/react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
export default function Home() {
  const code = ``;

  return (
    <>
      <Head>
        <title>Jutsu Engineering</title>
        <meta name="description" content="Start practicing Solidity now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1>Jutsu Engineering</h1>
        <h3>Start practicing your solidity code</h3>
        <div className={styles.container}>
          <div className={styles.editorContainer}>
            <Editor
              width="100%"
              height="100%"
              language="sol"
              theme="vs-dark"
              value={code}
            />
          </div>
          <div className={styles.editorContainer}>
          <ExerciseCard />
          </div>
        </div>
      </main>
    </>
  );
}
