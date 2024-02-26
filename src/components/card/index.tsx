import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Card as InternalCard, CardContent, CardProps } from './component'


interface CompoundedComponent
  extends ForwardRefExoticComponent<
    CardProps &
    RefAttributes<HTMLElement>> {
  CardContent: typeof CardContent
  CardImage: typeof Card
}

const Card = InternalCard as CompoundedComponent
Card.CardContent = CardContent

export default Card
