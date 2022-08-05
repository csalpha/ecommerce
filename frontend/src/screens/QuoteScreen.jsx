import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from 'react-bootstrap/Card'

export default function QuoteScreen() {

  return (
    <div>
      <Helmet>
        <title>
          Quotes
        </title>
      </Helmet>

      <h1>Quotes</h1>

      {/*#1*/}
      <div className="my-3">
        <Card>
          <Card.Header>1. Aja de forma virtuosa</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Um bom caráter é a única garantia de eterna e despreocupada felicidade.{' '}
              </p>
              <footer className="blockquote-footer">
                Sêneca
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

       {/*#2*/}
      <div className="my-3">

        <Card>
          <Card.Header>2. Concentre-se no que você controla e aceite o restante</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                O que é, enfim, ser educado adequadamente? É saber separar as coisas que estão sob nosso controle daquelas que não estão.{' '}
              </p>
              <footer className="blockquote-footer">
                Epicteto
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>

       {/*#3*/}
      <div className="my-3">
        <Card>
          <Card.Header>3. Assuma responsabilidade pelo que você controla</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                “Os homens são perturbados não pelas coisas que acontecem, mas sim por suas opiniões sobre os acontecimentos.”{' '}
              </p>
              <footer className="blockquote-footer">
              Epicteto
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      {/*#4*/}
      <div className="my-3">

        <Card>
          <Card.Header>4. Saiba diferenciar entre o que é bom, mau ou indiferente</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Apenas o que está em nosso controle pode ser considerado bom ou mau. Tudo que foge do nosso poder é indiferente.

{' '}
              </p>
              <footer className="blockquote-footer">
                Desconhecido
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>

      {/*#5*/}      
      <div className="my-3">
        <Card>
          <Card.Header>5. Coloque os aprendizados em prática</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Não perca tempo discutindo sobre o que um bom homem deve ser. Seja um.{' '}
              </p>
              <footer className="blockquote-footer">
                Marco Aurélio
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      {/*#6*/}
      <div className="my-3">

        <Card>
          <Card.Header>6. Pergunte-se o que poderia dar errado</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae ex ipsam. Eaque eos ea officiis blanditiis minima officia totam laboriosam ratione! Consequuntur sed quisquam suscipit mollitia repudiandae quis dolore.
                {' '}
              </p>
              <footer className="blockquote-footer">
                Desconhecido
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>

      {/*#7*/}
      <div className="my-3">
        <Card>
          <Card.Header>7. Internalize seus objetivos</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Eu vou fazer isso e mais aquilo, se nada acontecer que possa se tornar um obstáculo para a minha decisão. Eu vou cruzar o oceano, se nada me impedir de fazê-lo.{' '}
              </p>
              <footer className="blockquote-footer">
                Sêneca
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      {/*#8*/}
      <div className="my-3">

        <Card>
          <Card.Header>8. Transforme obstáculos em oportunidades</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae ex ipsam. Eaque eos ea officiis blanditiis minima officia totam laboriosam ratione! Consequuntur sed quisquam suscipit mollitia repudiandae quis dolore.
                {' '}
              </p>
              <footer className="blockquote-footer">
                Desconhecido
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>

       {/*#9*/}
      <div className="my-3">
        <Card>
          <Card.Header>9. Ame seu destino, porque não há outro melhor</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Não queira que tudo aconteça como deseja. Deseje que tudo aconteça como deve acontecer, e terá serenidade.{' '}
              </p>
              <footer className="blockquote-footer">
                Epicteto
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      {/*#10*/}
      <div className="my-3">

        <Card>
          <Card.Header>10. Esteja sempre autoconsciente</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quia reiciendis, consequuntur expedita alias doloremque harum error porro, voluptates minus vel ut ratione temporibus quasi laboriosam labore fuga itaque.{' '}
              </p>
              <footer className="blockquote-footer">
                Desconhecido
                {/* <cite title="Source Title">Source Title</cite> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}