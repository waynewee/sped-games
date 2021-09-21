import React, { FunctionComponent } from "react";
import Head from "next/head";

interface IMeta {
  title: string;
}

export const Meta: FunctionComponent<IMeta> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />s
    </Head>
  );
};
