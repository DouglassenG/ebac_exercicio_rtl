import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from ".";

describe("Testes para o componente principal", () => {
  it("Deve renderizar corretamente o componente", () => {
    render(<PostComments />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    render(<PostComments />);
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: { value: "Segundo comentário" },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    expect(screen.getAllByTestId("elemento-comentario")).toHaveLength(2);
  });
});
