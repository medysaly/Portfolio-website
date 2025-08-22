import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Projects Preview Section */}
      <section id="projects-preview" className="py-20 w-full px-6">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary mb-12">
            Coming soon... Building something amazing!
          </p>
        </div>
      </section>
    </div>
  );
}
