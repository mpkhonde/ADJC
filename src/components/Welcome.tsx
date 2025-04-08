// src/components/Welcome.tsx
interface WelcomeProps {
  text: {
    title: string;
    subtitle: string;
  };
}

const Welcome = ({ text }: WelcomeProps) => {
  return (
    <section id="welcome">
      <h1>{text.title}</h1>
      <p>{text.subtitle}</p>
    </section>
  );
};

export default Welcome;
