import { Preview } from "@storybook/react";
import {
  AnchorListItem,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  LinkComponent,
  Paragraph,
  RelatedComponent,
  RelatedComponents,
  SectionName,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines
} from "../src";
import { ComponentNameDecorator } from "../storybook/components";
import { DocsContainer, DocsPage } from "@storybook/blocks";
import "monday-ui-style/dist/index.min.css";

const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          {/*TODO fix hack for removal of storybook styles*/}
          <div className={"sb-unstyled"}>
            {children}
            {<DocFooter feedbackFormLink="// TODO add feedbackFormLink" />}
          </div>
        </DocsContainer>
      ),
      page: DocsPage,
      components: {
        h1: ComponentNameDecorator,
        ComponentName: ComponentNameDecorator,
        h2: SectionName,
        h3: Title,
        li: AnchorListItem,
        a: LinkComponent,
        p: Paragraph,
        SectionName,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents,
        Frame,
        UnstyledList,
        UnstyledListItem
      }
    },
    options: {
      storySort: {
        order: ["Welcome", "*"]
      }
    }
  }
};

export default preview;
