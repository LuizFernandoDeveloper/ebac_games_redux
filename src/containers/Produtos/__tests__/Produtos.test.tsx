import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
    preco: 100.5,
    precoAntigo: 250,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 2,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['PS5', 'Xbox Series S/X'],
    preco: 100,
    precoAntigo: 250,
    titulo: 'Blatefild'
  },
  {
    id: 3,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5'],
    preco: 150,
    precoAntigo: 200,
    titulo: 'NPX'
  },
  {
    id: 4,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
    preco: 100.5,
    precoAntigo: 250,
    titulo: 'COD'
  }
]

describe('Teste para o container produtos', () => {
  test('Deve rendeirizar coretamente', () => {
    const { debug } = renderizaComProvider(<Produtos />)
    debug()
  })
})
