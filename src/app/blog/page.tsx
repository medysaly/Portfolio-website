export default function Blog() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Blog
          </h1>
          <div className="text-xl text-text-secondary leading-relaxed">
            <p className="mb-6">
              Technical articles about cloud engineering, software development, 
              DevOps practices, and emerging technologies are coming soon. 
              Stay tuned for in-depth tutorials and insights.
            </p>
            <div className="font-mono text-primary">
              <span className="text-white">$</span> cat blog/latest.md
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}