// components/SectionHeader.tsx

type SectionHeaderProps = {
  label: string;
  title: string;
};

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
        {label}
      </p>
      <h2 className="text-white text-4xl font-black mt-2">{title}</h2>
    </div>
  );
}