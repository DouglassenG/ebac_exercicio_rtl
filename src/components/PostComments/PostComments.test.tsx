import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from ".";

describe("Testes para o componente principal", () => {
  it("Deve renderizar corretamente o componente", () => {
    render(<PostComments />);
    expect(screen.getByTestId("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    render(<PostComments />);
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));
  });
});
