import React from 'react'
import { CardContainer, CardContent, SubscribeArea } from './styles/Container.styles'
import { Button, H1, Paragraph } from './styles/Elements.styles'

const Card = () => {
  return (
    <CardContainer>
      <CardContent>
        <H1>
          Let's Keep in touch
        </H1>
        <Paragraph>
          Subscribe to keep up with fresh news and exciting updates.
          <br />
          We promise not to spam you!
        </Paragraph>

        <SubscribeArea>
          <Button color='#97ACC1'>Subscribe</Button>
        </SubscribeArea>

      </CardContent>
    </CardContainer>
  )
}

export default Card