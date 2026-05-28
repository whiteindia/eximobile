interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
            light
              ? "bg-gold/20 text-gold"
              : "bg-royal/10 text-royal"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
        {highlight && (
          <span className="text-gold"> {highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-charcoal/60"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 bg-gold rounded-full ${center ? "mx-auto" : ""}`}
      />
    </div>
  );
}
