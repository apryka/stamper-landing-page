import React from "react";
// import { Layout } from "../components/layout";
import {
  Header,
  SectionIcon,
  LinkButton,
  SEO,
  PageLayout,
  Text,
  NavigationWrapper,
} from "../components";

import DownloadIcon from "../../static/icons/icon-download.inline.svg";
import ScanQRIcon from "../../static/icons/icon-scan-qr.inline.svg";
import VisitOfficeIcon from "../../static/icons/icon-visit-office.inline.svg";
import RewardIcon from "../../static/icons/icon-reward.inline.svg";

const App = () => {
  return (
    <PageLayout>
      <SEO />
      <Header firstLine="zgarnij gadżety" secondLine="za zakupy!" />
      <Text color="#fff">
        Zastanawiasz się, gdzie jest haczyk? Nie znajdziesz go! Rozdajemy
        gadżety za korzystanie z aplikacji, dzięki której oszczędzasz na
        zakupach każdego dnia!
      </Text>
      <SectionIcon firstLine="Pobierz" secondLine="aplikację">
        <DownloadIcon />
      </SectionIcon>
      <SectionIcon firstLine="Zeskanuj kod QR" secondLine="z plakatu">
        <ScanQRIcon />
      </SectionIcon>
      <SectionIcon firstLine="Odwiedź" secondLine="nasze biuro">
        <VisitOfficeIcon />
      </SectionIcon>
      <SectionIcon firstLine="Wybierz" secondLine="nagrodę!">
        <RewardIcon />
      </SectionIcon>
      <NavigationWrapper>
        <LinkButton type="external" href="http://getstamper.com">
          Pobierz aplikację
        </LinkButton>
      </NavigationWrapper>
    </PageLayout>
  );
};

export default App;
