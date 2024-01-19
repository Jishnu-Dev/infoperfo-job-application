import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const runtime = "edge";
export const alt = "Infoperformance";
export const size = {
  width: 1200,
  height: 630,
};

export default async function OGImage() {
  const imageMarkDown = (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "black",
        display: "flex",
        padding: "4rem",
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
      }}
    >
      <h3
        style={{
          top: 0,
          left: "20px",
          color: "white",
          paddingTop: "2",
          fontSize: "2rem",
          paddingBottom: "2",
          paddingLeft: "8px",
          paddingRight: "8px",
          position: "absolute",
          backgroundColor: "#dc2626",
        }}
      >
        Infoperformance
      </h3>
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "-12px",
        }}
      >
        {`Accelerate Your Company's CX And Digital Transformation`}
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          bottom: "5rem",
          position: "absolute",
          justifyContent: "space-around",
        }}
      >
        <p>www.linkedin.com/info</p>
        <p>www.info.com</p>
      </div>
    </div>
  );

  return new ImageResponse(imageMarkDown, {
    ...size,
  });
}
