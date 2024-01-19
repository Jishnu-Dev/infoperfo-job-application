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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
        padding: "4rem",
        position: "relative",
      }}
    >
      <h3
        style={{
          color: "white",
          position: "absolute",
          top: 0,
          left: "20px",
          backgroundColor: "black",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "2",
          paddingBottom: "2",
          fontSize: "2rem",
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
        Accelerate Your Company's CX And Digital Transformation
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          bottom: "5rem",
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
