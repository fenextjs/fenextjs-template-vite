import { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Container, ContainerProps } from "./index";

export default {
    title: "UIFenextjs/Container",
    component: Container,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ContainerProps>> = (args: any) => (
    <Container {...args}>Test Children</Container>
);

export const Index = Profile.bind({});
const args: ContainerProps = {};
Index.args = args;
