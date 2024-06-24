import localFont from "next/font/local";

export const iranSansFont = localFont({
  src: [
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./IranSans/Woff2/IRANSansXFaNum-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
});
