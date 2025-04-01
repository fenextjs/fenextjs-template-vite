import { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { User, UserProps } from "./index";

export default {
    title: "UIFenextjs/User",
    component: User,
} as Meta;

const Profile: StoryFn<PropsWithChildren<UserProps>> = (args: any) => (
    <User {...args}>Test Children</User>
);

export const Index = Profile.bind({});
const args: UserProps = {};
Index.args = args;
