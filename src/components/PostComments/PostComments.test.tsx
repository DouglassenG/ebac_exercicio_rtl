import { render, screen } from "@testing-library/react";
import PostComments from ".";

describe('Testes para o componente principal', () => {
    test('Deve renderizar corratamente', () => {
        render(<PostComments />)
        expect(screen.getByText('comentar')).toBeInTheDocument()
    })
})