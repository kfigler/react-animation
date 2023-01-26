import CloseButton from "./CloseButton";
import SlideUpTransition from "./SlideUpTransition";

export default function MainContent() {
  return (
    <SlideUpTransition>
      <header className="header">
        <CloseButton />
        <section>
          <h3>Content</h3>
          <h1>Main Content</h1>
        </section>
      </header>
    </SlideUpTransition>
  );
}
