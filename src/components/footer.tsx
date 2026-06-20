import Button from "./button";

export default function Footer() {
  return (
    <section className="wrapper">
      <div className="container py-24 px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-2/5">
            <h3 className="text-3xl mb-4">Stay in the loop.</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Get updates on speakers, schedule, and early-bird offers delivered
              to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-border px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors duration-300"
              />
              <Button text="join" variant="button" />
            </div>
          </div>

          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm  uppercase tracking-wider mb-2">
                Explore
              </h4>
              <Button text="Schedule" variant="link" />
              <Button text="Speakers" variant="link" />
              <Button text="Passes" variant="link" />
              <Button text="Location" variant="link" />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm  uppercase tracking-wider mb-2">Legal</h4>
              <Button text="Privacy Policy" variant="link" />
              <Button text="Terms of Service" variant="link" />
              <Button text="Cookie Policy" variant="link" />
              <Button text="Code of Conduct" variant="link" />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm  uppercase tracking-wider mb-2">
                Location
              </h4>
              <p className="text-sm leading-relaxed">
                25 Bourdillon Road
                <br />
                Ikoyi, Lagos
                <br />
                Nigeria
              </p>
              <Button text="directions" variant="button" />
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t border-border">
        <div className="py-8 flex items-center justify-center gap-3 text-sm text-muted-foreground px-8 md:px-16">
          <div className="w-6 h-6 rounded-full bg-zinc-600" />
          <span>Made by Xpektra — Ascend 2026</span>
        </div>
      </div>
    </section>
  );
}
