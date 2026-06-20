import { createFileRoute } from "@tanstack/react-router";
import Footer from "#/components/footer";
import { termsSections } from "#/data/privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Ascend 2026" },
      {
        name: "description",
        content:
          "Ascend 2026 terms of service — registration, code of conduct, liability, and event policies.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="main-content">
      <main className="wrapper animate-slide-up">
        <div className="container pt-48 px-4 md:px-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-16">
            Last updated — June 2026
          </p>

          {termsSections.map((section) => (
            <section key={section.title} className="pb-8">
              <h2 className="text-2xl mb-6">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground text-sm leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
