const DecorativeBlob = ({ className = "", variant = "primary" }: { className?: string; variant?: "primary" | "secondary" | "accent" }) => {
  const colors = {
    primary: "from-primary/10 to-accent/5",
    secondary: "from-secondary/20 to-secondary/5",
    accent: "from-accent/15 to-accent/5",
  };

  return (
    <div className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colors[variant]} ${className}`} />
  );
};

export default DecorativeBlob;
