import Head from "components/Head";
import Footer from "components/Footer";
import HeaderWrapper from "components/HeaderWrapper";
import {
  FindFair,
  HowTo,
  ChooseAlternative,
  AsSeenAs,
  CheckSellerRating,
  SafeDeal,
  Slider,
} from "components/Sections";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head title={ t("title") } />
      <div className="font-sans bg-white">
        <HeaderWrapper heading={ t("title") }/>
        <HowTo />
        <FindFair />
        <CheckSellerRating />
        <ChooseAlternative />
        <AsSeenAs />
        <SafeDeal />
        <Slider />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default HomePage;
