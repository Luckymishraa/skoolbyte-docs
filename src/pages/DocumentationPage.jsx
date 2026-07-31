import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DocHeader from "../components/ui/DocHeader.jsx";
import Section from "../components/ui/Section.jsx";
import Callout from "../components/ui/Callout.jsx";
import CodeBlock from "../components/ui/CodeBlock.jsx";
import ScreenshotPlaceholder from "../components/ui/ScreenshotPlaceholder.jsx";
import StepCard from "../components/ui/StepCard.jsx";
import FAQ from "../components/ui/FAQ.jsx";
import PermissionsTable from "../components/ui/PermissionsTable.jsx";
import RelatedModules from "../components/ui/RelatedModules.jsx";
import PrevNext from "../components/ui/PrevNext.jsx";
import { getPrevNext } from "../utils/getPrevNext.js";

export default function DocumentationPage({ content }) {
  const { setHeadings } = useOutletContext();
  const { prev, next } = getPrevNext(content.slug);

  useEffect(() => {
    const sections = [
      { id: "overview", text: "Overview", show: !!content.overview },
      { id: "purpose", text: "Purpose", show: !!content.purpose },
      {
        id: "navigation-path",
        text: "Navigation Path",
        show: !!content.navigationPath,
      },
      {
        id: "permissions",
        text: "Permissions",
        show: !!content.permissions?.length,
      },
      { id: "steps", text: "Steps", show: !!content.steps?.length },
      { id: "example", text: "Example", show: !!content.example },
      {
        id: "screenshots",
        text: "Screenshots",
        show: !!content.screenshots?.length,
      },
      {
        id: "best-practices",
        text: "Best Practices",
        show: !!content.bestPractices?.length,
      },
      {
        id: "common-errors",
        text: "Common Errors",
        show: !!content.commonErrors?.length,
      },
      { id: "faqs", text: "FAQs", show: !!content.faqs?.length },
    ];

    setHeadings(
      sections
        .filter((s) => s.show)
        .map(({ id, text }) => ({ id, text, depth: 2 })),
    );

    return () => setHeadings([]);
  }, [content, setHeadings]);

  return (
    <article>
      <DocHeader title={content.title} description={content.overview} />

      {content.purpose && (
        <Section id="purpose" title="Purpose">
          <p>{content.purpose}</p>
        </Section>
      )}

      {content.navigationPath && (
        <Section id="navigation-path" title="Navigation Path">
          <Callout type="note">{content.navigationPath}</Callout>
        </Section>
      )}

      {content.permissions?.length > 0 && (
        <Section id="permissions" title="Permissions">
          <PermissionsTable permissions={content.permissions} />
        </Section>
      )}

      {content.steps?.length > 0 && (
        <Section id="steps" title="Steps">
          {content.steps.map((step, index) => (
            <StepCard key={step.title} number={index + 1} title={step.title}>
              <p>{step.description}</p>
              {step.screenshot && (
                <ScreenshotPlaceholder src={step.screenshot} alt={step.title} />
              )}
            </StepCard>
          ))}
        </Section>
      )}

      {content.example && (
        <Section id="example" title="Example">
          <CodeBlock
            code={content.example.code}
            language={content.example.language}
            filename={content.example.filename}
          />
        </Section>
      )}

      {content.screenshots?.length > 0 && (
        <Section id="screenshots" title="Screenshots">
          {content.screenshots.map((shot) => (
            <ScreenshotPlaceholder
              key={shot.caption}
              src={shot.src}
              alt={shot.alt}
              caption={shot.caption}
            />
          ))}
        </Section>
      )}

      {content.bestPractices?.length > 0 && (
        <Section id="best-practices" title="Best Practices">
          {content.bestPractices.map((tip) => (
            <Callout key={tip} type="tip">
              {tip}
            </Callout>
          ))}
        </Section>
      )}

      {content.commonErrors?.length > 0 && (
        <Section id="common-errors" title="Common Errors">
          {content.commonErrors.map((error) => (
            <Callout key={error.issue} type="warning" title={error.issue}>
              {error.fix}
            </Callout>
          ))}
        </Section>
      )}

      {content.faqs?.length > 0 && (
        <Section id="faqs" title="FAQs">
          <FAQ items={content.faqs} />
        </Section>
      )}

      <RelatedModules modules={content.relatedModules} />
      <PrevNext prev={prev} next={next} />
    </article>
  );
}
