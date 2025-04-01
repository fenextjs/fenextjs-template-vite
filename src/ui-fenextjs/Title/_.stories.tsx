import { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Title, TitleProps } from "./index";

export default {
    title: "UIFenextjs/Title",
    component: Title,
} as Meta;

const Profile: StoryFn<PropsWithChildren<TitleProps>> = (args: any) => (
    <Title {...args}>Test Children</Title>
);

export const Index = Profile.bind({});
const args: TitleProps = {};
Index.args = args;
