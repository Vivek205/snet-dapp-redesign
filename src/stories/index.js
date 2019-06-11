import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PrimaryFooter from "../components/common/Footer/PrimaryFooter";
import FooterLinks from "../components/common/Footer/PrimaryFooter/FooterLinks";
import SecondaryFooter from "../components/common/Footer/SecondaryFooter";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Header", module).add("Common header", () => <Header />);

storiesOf("Footer", module)
  .add("Common footer", () => <Footer />)
  .add("Primary footer", () => <PrimaryFooter />)
  .add("Footer Links", () => <FooterLinks />)
  .add("Secondary Footer", () => <SecondaryFooter />);
