import { createFileRoute } from "@tanstack/react-router";
import Footer from "#/components/footer";
import { privacySections } from "#/data/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ascend 2026" },
      {
        name: "description",
        content:
          "Ascend 2026 privacy policy — how we collect, use, and protect your personal information.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="main-content">
      <main className="wrapper animate-slide-up">
        <div className="container pt-48 px-4 md:px-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-16">
            Last updated — June 2026
          </p>

          {privacySections.map((section) => (
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
