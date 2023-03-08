import Head from "next/head";
import { ReactNode } from "react";
import { Line } from "react-chartjs-2";
import { TextButtonColorType } from "../components/buttons/text/TextButton";
import { ModalLayout } from "../components/layouts/modal/ModalLayout";
import { PrimaryLayout } from "../components/layouts/primary/PrimaryLayout";
import {
  SidebarLayout,
  ISidebarItemLayout,
} from "../components/layouts/sidebar/SidebarLayout";
import siteConfig from "./siteconfig.json";

export interface IIndexPage {
  sitename: string;
  sidebarItems: Array<ISidebarItemLayout>;
  children?: ReactNode;
}

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: "temp",
      data: ["1:34.567", "2:45.986", "4:23.456"],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export default function IndexPage({
  sitename,
  children,
  sidebarItems,
}: IIndexPage) {
  return (
    <>
      <Head>
        <title>Race Review</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <PrimaryLayout sitename={siteConfig.sitename}>
        <SidebarLayout sidebarItems={siteConfig.menu}></SidebarLayout>
        {children}
        <ModalLayout
          buttonProps={{
            text: "open modal",
            color: TextButtonColorType.surface,
          }}
        >
          <div>Hello World</div>
        </ModalLayout>
        <Line data={data} />
      </PrimaryLayout>
    </>
  );
}
