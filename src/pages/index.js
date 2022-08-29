import * as React from "react";

import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";
import CustomizedDialogs from "../components/Map/Dialog/Dialog";


const DEFAULT_CENTER = [0, 0];

const DUMMY_VILLAGE = [
  {
    id: 0,
    position: [3.707132, -27.736546],
    title: "BATTLE STADIUM",
    description:
      "The Battle Station allows the community to play Competitive Games using TTM Tokens. Moon Teams are keeping track of their records and competing in tournaments for Special Items and TTM Tokens.",
    image: "BattleStation.png",
  },
  {
    id: 1,
    position: [18.207132, -15.9],
    title: "THE ARCADE",
    description:
      "This is where the community plays Fun Mini Games using TTM Tokens. The games award Special Items and TTM Tokens to its highest scorers.",
    image: "TheArcade.png",
  },
  {
    id: 2,
    position: [10.507132, -5.2],
    title: "COMMAND CENTER",
    description:
      "This location is privately owned and can only be entered at certain times by certain members of the community. In order to enter, the Cryptonauts are required to use a Special Access Card.",
    image: "CommandCenter.png",
  },
  {
    id: 3,
    position: [0.407132, -3.28],
    title: "MOON CENTRAL",
    description:
      "This is the “downtown” core of the Moon Plots. Moon Central is conveniently located and the most vibrant and bustling area of the moon. This is where the community members come to socialize and let loose. Moon Plot Owners can submit advertisements to be approved and then showcased on electronic billboards for the entire community to see. A certain amount of TTM Tokens are required for each available Ad Space.",
    image: "MoonCentral.png",
  },
  {
    id: 4,
    position: [-7.207132, -17.55],
    title: "THE MARKET",
    description:
      "The Market allows the community to purchase assets using TTM Tokens and meet up to trade with one another. This place serves as one of the main areas on the moon for community members to meet and interact.",
    image: "MarketPlace.png",
  },
  {
    id: 5,
    position: [-12.207132, 7.45],
    title: "CONCERT HALL",
    description:
      "The place where fun and entertaining concerts and events are held for the community. These special events are very popular and require Moon Tickets — purchased with TTM Tokens, for entrance.",
    image: "ConcertHall.png",
  },
  {
    id: 6,
    position: [14.207132, 7.15],
    title: "REPAIR STATION",
    description:
      "The Repair Station is where the community Repairs and Modifies their Moon Vehicles using TTM Tokens. As vehicles are used at The Races, they require maintenance. Community members can add-on up to three different types of Special Parts to their Moon Vehicles. These modifications increase/decrease the Top Speed, Acceleration, and Control stats. Modified Vehicles can only be used at The Races.",
    image: "RepairStation.png",
  },
  {
    id: 7,
    position: [5.707132, 20.39],
    title: "THE RACES",
    description:
      "This infrastructure allows the community to Race one another in their Moon Vehicle of choice, all while placing bets using TTM Tokens. Community members are able to Modify their Moon Vehicles with Special Parts at the Repair Station and use these Modified Vehicles exclusively at The Races. There are major racing events that take place, which require Moon Teams to qualify for.",
    image: "TheRaces.png",
  },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState({});

  const handleClickOpen = (id) => {
    setInfo(DUMMY_VILLAGE[id]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Village Map</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Map
          className={styles.homeMap}
          center={DEFAULT_CENTER}
          zoom={3}
          scrollWheelZoom={false}
          maxZoom={6}
          minZoom={3}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="maps/{z}/{x}/{y}.jpg"
                attribution="&copy; TOTHEMOON INC. 2022"
              />
              {DUMMY_VILLAGE.map((data) => {
                return (
                  <Marker
                    position={data.position}
                    eventHandlers={{
                      click: (e) => {
                        handleClickOpen(data.id);
                      },
                    }}
                  />
                );
              })}
              ;
            </>
          )}
        </Map>

        <CustomizedDialogs
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          info={info}
        />
        <div className={styles.grid}>
          <a
            href="https://github.com/colbyfayock/next-leaflet-starter"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>See the code in action.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Next.js &rarr;</h3>
            <p>Getting started with Next.js</p>
          </a>

          <a href="https://leafletjs.com/" className={styles.card}>
            <h3>Leaflet &rarr;</h3>
            <p>Mapping features and APIs.</p>
          </a>

          <a href="https://react-leaflet.js.org/" className={styles.card}>
            <h3>React Leaflet &rarr;</h3>
            <p>Native Leaflet components in React</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
