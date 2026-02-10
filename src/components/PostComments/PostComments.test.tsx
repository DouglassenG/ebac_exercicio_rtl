import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from ".";

describe('Testes para o componente principal', () => {
    test('Deve renderizar corratamente', () => {
        render(<PostComments />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar 2 comentários', () => {
        render(<PostComments />)
        fireEvent.change(screen.getByTestId('campo-comentarario'),
            { target: { value: 'Primeiro comentário' } })
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
})