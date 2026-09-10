import Container from "@/components/ui/Container";
import TalkBlob from "@/components/ui/TalkBlob";

export default function TalkBanner() {
  return (
    <section className="py-section" aria-label="Still have a question?">
      <Container>
        <TalkBlob
          title="Still have a question?"
          caption="Let's talk"
          href="/book"
        />
      </Container>
    </section>
  );
}
