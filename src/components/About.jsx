import CloseButton from "./CloseButton";
import SlideUpTransition from "./SlideUpTransition";

export default function About() {
  return (
    <SlideUpTransition>
      <header className="header">
        <CloseButton />
        <section>
          <h3>About</h3>
          <h1>About Content</h1>
        </section>
      </header>
      <div className="flex-container vertical-center horizontal center" style={{ flexFlow: "column" }}>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
        <h1>About Content</h1>
      </div>
    </SlideUpTransition>
  );
}
