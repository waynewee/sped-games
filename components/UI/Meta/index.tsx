import React, { FunctionComponent } from "react";
import Head from "next/head";

interface IMeta {
  title: string;
}

export const Meta: FunctionComponent<IMeta> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
      </style>
    </Head>
  );
};
