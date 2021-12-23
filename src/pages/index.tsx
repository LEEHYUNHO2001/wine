import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #222;
`;

const H2 = styled.h2`
  background-color: #000;
  color: deeppink;
  padding: 50px 0px;
  font-size: 50px;
`;

const Container = styled.div`
  margin-top: 200px;
`;

const Wine = styled.a`
  margin-right: 100px;
  font-size: 100px;
  color: red;
  background-color: #999;
  padding: 70px 100px;
  border-radius: 30px;
`;

const Beer = styled.a`
  margin-right: 100px;
  font-size: 100px;
  color: yellow;
  background-color: #999;
  padding: 70px 100px;
  border-radius: 30px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
