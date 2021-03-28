import Container from "../components/Container";
import MyForm from "../components/elements/MyForm";
import MyNameListFirebase from "../components/elements/MyNameListFireBase";

export default function FirebaseTest() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <MyForm />
        <MyNameListFirebase />
      </div>
    </Container>
  );
}
